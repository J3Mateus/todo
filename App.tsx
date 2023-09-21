import { Text, View, StyleSheet, Button, ScrollView,TextInput,SafeAreaView } from 'react-native';
import React from 'react';

export default function App() {
  const [altura,setAltura] = React.useState('')
  const [massa,setMassa] = React.useState('')

  function handleOnchangeAltura(texto: string){
    setAltura(texto)
  } 

  function handleOnchangeMassa(texto: string){
    setMassa(texto)
  } 
  return (
    <View style={style.container} >
      <TextInput style={style.inputs} placeholder='Altura' onChangeText={handleOnchangeAltura} keyboardType='numeric' />
      <TextInput style={style.inputs} placeholder='Massa' onChangeText={handleOnchangeMassa} keyboardType='numeric' />
      <Button title='Calcular'/>
      <Text style={{textAlign:"center",margin:10,}}>{`Altura:${altura}`}</Text>
      <Text style={{textAlign:"center",margin:10,}}>{`Massa:${massa}`}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container:{
      flex:1, // definindo o espaço para toda tela
      justifyContent:"center", /// todos que estão na horizontal está no centro
      margin:10, //se descolar 10px para cada lado
    },
    inputs:{
      height: 40, // altura de 40 cm
      borderColor: 'gray', // borda cinza
      borderWidth: 1, //borda de altura
      marginBottom: 10, //se desloca 10px para cima
      paddingLeft: 10,// cria uma area de 10px na sua esquerda
    },
    button:{
      backgroundColor:"#9ACD32"
    },
})