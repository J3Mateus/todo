import { Text,View } from "react-native";
import Button from "../../component/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreanNavigationProps, ScreenRouteProps } from "../../../App";

const CreateTask: React.FC =  ()=>{
    const route = useRoute<ScreenRouteProps>()
    const { goBack,pop} = useNavigation<ScreanNavigationProps>();
    return ( <View style={{ flex:1,justifyContent:"center",alignContent:"center"}}>
        <Text>{route.params?.name}</Text>
        <Button onPress={()=>{ pop(1)}} title="voltar" />

    </View>)
}

export default CreateTask;