import { View,Text, TouchableWithoutFeedback } from "react-native";
import ListStyle from "../../../styles/list.style";
import Checkbox from 'expo-checkbox';
import { useState } from "react";

interface IPropsListChildren {
    title: string;
    time: string;
}
const ListChildren:React.FC<IPropsListChildren> = ({title,time})=>{
    const [checkBox,setCheckBox] = useState<boolean>(false)

    const onPress = ()=>{
      setCheckBox(prevent => !prevent)
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={ListStyle.todoItem}>
                <View style={ListStyle.checkContainer}>
                    <Checkbox  color='black' style={{borderRadius:6}} value={checkBox} />
                </View>
                <View style={ListStyle.todoTextContainer}>
                    <Text>{title}</Text>
                    <Text>{time}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
     )
}

export default ListChildren;

