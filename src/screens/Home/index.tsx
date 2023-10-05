
import { View, ScrollView,Text } from "react-native";
import Header from "../../component/Header";
import List from "../../component/List";
const Home = ()=>{

  return (
   <View>
    <Header />
    <ScrollView>
        <List />
    </ScrollView>

    <ScrollView>
        <List />
    </ScrollView>
    
  </View>
  )
}

export default Home;