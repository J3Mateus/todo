import Home from "./src/screens/Home";
import CreateTask from "./src/screens/CreateTask";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack';

export type StackNavigatorParamList = {
  home:undefined,
  createTask:{
    name:string
  }
}

export type ScreanNavigationProps = NativeStackNavigationProp<StackNavigatorParamList,'createTask'>;

export type ScreenRouteProps = RouteProp<StackNavigatorParamList>;

export default function App() {
  const {Navigator,Screen } = createNativeStackNavigator<StackNavigatorParamList>()

  return (
    <NavigationContainer>
      <Navigator initialRouteName="home" screenOptions={{
        headerShown:false
      }}>
          <Screen name="home" component={Home} />
          <Screen name="createTask" component={CreateTask} />
      </Navigator>
    </NavigationContainer>
  );
}

