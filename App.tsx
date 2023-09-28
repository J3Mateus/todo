import { Text, View, StyleSheet, ScrollView,TextInput,SafeAreaView } from 'react-native';
import React from 'react';
import Button from './src/component/Button'
export default function App() {
  const [altura,setAltura] = React.useState<number>(0.0)
  const [massa,setMassa] = React.useState<number>(0.0)
  const [resultado, setResultado] = React.useState<string>('')

  function handleOnchangeAltura(texto: string){
    const alturaChange = parseFloat(texto)
    setAltura(alturaChange)
  } 

  function handleOnchangeMassa(texto: string){
    const massaChange = parseFloat(texto)
    setMassa(massaChange)
  } 
  
  function calcularIMC(){
    const alturaEmMetro = altura/ 100
    const  imc = (massa / (alturaEmMetro * alturaEmMetro)).toFixed(2)
    if ( !isNaN(Number(imc))){
      setResultado(imc)
    }else{
      setResultado("Por favor, insira valores validos para altura e massa. ")
    }
  }

  function resetar(){
    setAltura(0.0)
    setMassa(0.0)
    setResultado('')
  }
  return (
    <View style={style.container} >
      <TextInput style={style.inputs} placeholder='Altura'onChangeText={handleOnchangeAltura} keyboardType='numeric' />
      <TextInput style={style.inputs}  defaultValue={`${massa}`} placeholder='Massa' onChangeText={handleOnchangeMassa} keyboardType='numeric' />
      <Button style={{backgroundColor:'red'}} title='Realizar calculo' onPress={calcularIMC} />
      <Text style={{textAlign:"center",margin:10,}}>{`Altura:${altura}`}</Text>
      <Text style={{textAlign:"center",margin:10,}}>{`Massa:${massa}`}</Text>
      <Text style={{textAlign:"center",margin:10,}}>{`Resultado:${resultado}`}</Text>
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