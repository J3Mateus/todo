import { TouchableOpacity, Text, StyleProp,ViewStyle } from "react-native";
import styleButton from "../../styles/button.style";

type color = 'white' | 'red' | 'black'

interface IPropsButton{
    title: string;
    onPress: ()=>void
    color?: color
    style?: StyleProp<ViewStyle>
}
const Button:React.FC<IPropsButton> = ({title, onPress,style})=>{
   return (
    <TouchableOpacity style={[styleButton.container,style]} onPress={onPress}>
        <Text style={styleButton.containerText}>{title}</Text>
    </TouchableOpacity>
   )
}

export default Button;