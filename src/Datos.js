import React, { Component } from 'react';
import {View,Text, ActivityIndicator,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//Nombre: Olvera González Abraham
//Grupo: TI02SM-18
//Pantalla: Movies

class Datos extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    }
  }//end constructor
  async componentDidMount(){
    try{
      const response = await fetch('http://192.168.1.74/Sensor/json.php');
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.sensor,
      },function(){
      });
    }catch(error){
      console.log(error);
    }
  }//end componentDidMount

  render(){
    if(this.state.isLoading==true){
      return(
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }// end if
    return(
      <View style={styles.container}>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({item}) => 
            <Text>Capacidad: {item.mensaje}, Gramos: {item.grms}</Text>
          }
          keyExtractor = {({id},index)=>id} />
      </View>
    );
  }//end render
}//end class

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'yellow',
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center',
  }

});
export default Datos;
