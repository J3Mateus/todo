
import { View, ScrollView,Text } from "react-native";
import Header from "../../component/Header";
import List from "../../component/List";
import ListChildren from "../../component/List/Children/ListChildrenCheckbox";
import { useState } from "react";
import ListChildrenli from "../../component/List/Children/ListChidrenli";
import FAB from "../../component/FAB";
import Button from "../../component/Button";
import { useNavigation } from "@react-navigation/native";
import { ScreanNavigationProps } from "../../../App";

const Home = ()=>{
  const { navigate,push } = useNavigation<ScreanNavigationProps>()
  return (
   <View>
    <Header />
    <ScrollView>
        <Button onPress={()=>{ push('createTask',{name:"José Mateus"}) }} title="Criar task"  />
        <List title="Hoje" buttonHide={true}>
          <View>
            <ListChildren title="Fazer compras amanha " time="12:30PM" />
            <ListChildren title="Fazer compras amanha " time="12:30PM" />
            <ListChildren title="Fazer compras amanha " time="12:30PM" />
            <ListChildren title="Fazer compras amanha " time="12:30PM" />
            <ListChildren title="Fazer compras amanha " time="12:30PM" />
            <ListChildren title="Fazer compras amanha " time="12:30PM" />
            <ListChildren title="Fazer compras amanha " time="12:30PM" />
            <ListChildren title="Fazer compras amanha " time="12:30PM" />
            <ListChildren title="Fazer compras amanha " time="12:30PM" />
            
          </View>

        </List>

        <List title="Amanha" buttonHide={false}>
          <View style={{overflow:"scroll"}}>
            <ListChildrenli title="Fazer compras amanha " time="12:30PM" />
            <ListChildrenli title="Fazer compras amanha " time="12:30PM" />
            <ListChildrenli title="Fazer compras amanha " time="12:30PM" />
            <ListChildrenli title="Fazer compras amanha " time="12:30PM" />
            <ListChildrenli title="Fazer compras amanha " time="12:30PM" />
            <ListChildrenli title="Fazer compras amanha " time="12:30PM" />
            <ListChildrenli title="Fazer compras amanha " time="12:30PM" />
            <ListChildrenli title="Fazer compras amanha " time="12:30PM" />
            <ListChildrenli title="Fazer compras amanha " time="12:30PM" />
            <ListChildrenli title="Fazer compras amanha " time="12:30PM" />
            <ListChildrenli title="Fazer compras amanha " time="12:30PM" />
          </View>

        </List>
    </ScrollView>
    <FAB onPress={()=>{console.log("Hello world")}} title="+" />
  </View>
  )
}

export default Home;