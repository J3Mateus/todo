import { View,Text} from 'react-native';
import ListStyle from '../../styles/list.style';
import Checkbox from 'expo-checkbox';

interface IPropsList {
    title: string;
    buttonHide: boolean;
    children?: React.ReactNode
}
const List: React.FC<IPropsList> = ({title,buttonHide,children})=>{
    
    return (
        <>
            <View style={ListStyle.titleContainer}>
                <Text style={ListStyle.title}>{title}</Text>
               {buttonHide && (<Text style={ListStyle.hideCompleted}>Excluir tarefas completas</Text>) } 
            </View>
            {children}
        </>
    )
}

export default List;