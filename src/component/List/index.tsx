import { View,Text} from 'react-native';
import ListStyle from '../../styles/list.style';
import Checkbox from 'expo-checkbox';

const List: React.FC = ()=>{
    return (
        <>
            <View style={ListStyle.titleContainer}>
                <Text style={ListStyle.title}>Hoje</Text>
                <Text style={ListStyle.hideCompleted}>Excluir tarefas completas</Text>
            </View>
            <View style={ListStyle.todoItem}>
                <View style={ListStyle.checkContainer}>
                    <Checkbox  color='black' style={{borderRadius:6}} value={true} />
                </View>
                <View style={ListStyle.todoTextContainer}>
                    <Text>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorsit amet, consectetur adipiscing elit</Text>
                    <Text>12:42 PM</Text>
                </View>
            </View>

            <View style={ListStyle.todoItem}>
                <View style={ListStyle.checkContainer}>
                    <Checkbox  color='black' style={{borderRadius:6}} value={true} />
                </View>
                <View style={ListStyle.todoTextContainer}>
                    <Text>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorsit amet, consectetur adipiscing elit</Text>
                    <Text>12:42 PM</Text>
                </View>
            </View>

            <View style={ListStyle.todoItem}>
                <View style={ListStyle.checkContainer}>
                    <Checkbox  color='black' style={{borderRadius:6}} value={true} />
                </View>
                <View style={ListStyle.todoTextContainer}>
                    <Text>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorsit amet, consectetur adipiscing elit</Text>
                    <Text>12:42 PM</Text>
                </View>
            </View>
        </>
    )
}

export default List;