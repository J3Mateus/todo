import { View, Image} from 'react-native'
import HeaderStyle from '../../styles/header.style';
const Header: React.FC = ()=>{
    return (<>
        <View style={HeaderStyle.header}>
            <Image source={require('../../../assets/profile.png')} />
        </View>
    </>)
}

export default Header;