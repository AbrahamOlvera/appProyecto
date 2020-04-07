import React,{Component} from 'react';
import {View, StyleSheet, Alert, TextInput,ActivityIndicator,Image} from 'react-native';
import { Container,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon,Button} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Nombre: Equipo 1
//Grupo: TI02SM-18
//Pantalla: Principal


class Principal extends Component{
   constructor(props){
        super(props);
        this.state = {
          user:'',
          pass:'' };
    }
    render(){
  const navigation = this.props.navigation;
  return (
       <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>AlacenaIn</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                   <Image
          style={{width: 200, height: 200}}
          source={{uri: ''}} />
          <Text>Abraham Olvera González</Text>
                </Item>
                   <Image
          style={{width: 200, height: 200}}
          source={{uri: ''}} />
               <Text>Laura Yaneli Hervert Zea</Text> 
                            <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://1.bp.blogspot.com/-uQsZoAdjb8U/W7Fe1ac4ChI/AAAAAAAAAA4/5GfYRCQY5KMTQgVi6umJVOjeKr9wZix1wCK4BGAYYCw/s80/12193452_935466539852618_1714455172521154041_n.jpg'}} />
               <Text>Laura Yaneli Hervert Zea</Text> 
                              <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/s960x960/91892476_2271068799862218_587939881330671616_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeEUX4ATTH7Kq3G1KcN9lcY1ufFg45jLG9258WDjmMsb3cT67Tvg2NRmEOHWW9o7OygVVvbQnVrMFSGLyTCUmKYo&_nc_ohc=IUEqIqNOyTAAX_3lgi7&_nc_ht=scontent.fgdl5-2.fna&_nc_tp=7&oh=02a67f6aaf0c1973175bc5b2cc900235&oe=5EB2994D'}} />
  <Text>Edgar Jesús Mancilla Gutiérrez</Text>
                        <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://lh3.googleusercontent.com/meHIxOOI_z4U2k_AIlNcATcaSfTpaev3EV4mR81Sa5rD3QK97evOcMfFuD7wGAw3xDlf62jSS1Gwx5fdA7njzLt-1TUooFvMCY7p2t4HemfO5t2Y_w=w472'}} />
      <Text>Ana Laura Chávez Álvarez</Text>     
           <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/s960x960/74390305_1008718632812994_1925213996600786944_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeHGaGUgWiytkK7NyasL23tVkYie6S3tDfWRiJ7pLe0N9cA4ESCodt8i6nf7QvAPuEPI5BSsYuzjazyHnRoBlAxs&_nc_ohc=WUIO5a9QMPMAX9IRokY&_nc_ht=scontent.fgdl5-2.fna&_nc_tp=7&oh=b550dfb78d8d73222044f73fc4152cdd&oe=5EB23743'}} />
          <Text>Abraham Olvera González</Text>        
                
                
              </Body>
            </CardItem>
            <CardItem>
            <Button success style = {misEstilos.boton} 
                    onPress ={() =>
                        navigation.navigate('Principal')}>
                    <Text>Regresar</Text>
                    </Button>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
   );
  }
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    marginTop: '20%',
    width: '100%',
  },
  body: {
    paddingVertical: 35,
    alignItems: 'center'
  },
     boton: {
    marginRight: '2%',
  },
});

export default Principal;