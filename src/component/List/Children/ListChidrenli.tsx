import { View,Text, TouchableWithoutFeedback } from "react-native";
import ListStyle from "../../../styles/list.style";

interface IPropsListChildren {
    title: string;
    time: string;
}
const ListChildrenli:React.FC<IPropsListChildren> = ({title,time})=>{
      return (
        <TouchableWithoutFeedback>
            <View style={ListStyle.todoItem}>
                <View style={ListStyle.checkContainer}>
                <View style={{backgroundColor:'black' , height:10,width:10,borderRadius:50}} ></View>
                </View>
                <View style={ListStyle.todoTextContainer}>
                    <Text>{title}</Text>
                    <Text>{time}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
     )
}

export default ListChildrenli