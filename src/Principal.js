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
          style={{width: 250, height: 250}}
          source={{uri: 'https://i.pinimg.com/originals/a4/73/45/a47345c7bcff5c8be7240a2574058dc6.png'}} />
                </Item>
                
              </Body>
            </CardItem>
            <CardItem>
            <Button success style = {misEstilos.boton} 
                    onPress ={() =>
                        navigation.navigate('Datos')}>
                    <Text>Ver capacidad</Text>
                    </Button>
                    <Button success style = {misEstilos.boton1} 
                    onPress ={() =>
                        navigation.navigate('Nosotros')}>
                    <Text>Conocenos</Text>
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
    boton1: {
    marginLeft: '2%',
  },
     boton: {
    marginRight: '2%',
  },
});

export default Principal;