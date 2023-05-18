//스택 관리 나 네비게이션 총 관리
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import managing from "./screens/managing";
import min1 from "./screens/min1";
import settings from "./screens/settings";
import { mainscreen } from "./screens/mainscreen";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createNavigationContainerRef } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//const navigationRef = createNavigationContainerRef();


//bottom tabs
function HomeTabs() {
  return (
    <Tab.Navigator 
			screenOptions={{ headShown: false }} />
      <Tab.Screen name="Home" 
					component = {Home} 
					options={{
          title: "메인",
          tabBarIcon: ({color, size}) => (<Icon name="home" color={color} size={size}), }}/>
      <Tab.Screen name="Settings" 
					component = {Settings} 
					options={{
          title: "설정",
          tabBarIcon: ({color, size}) => (<Icon name="setting" color={color} size={size}), }}/>
    </Tab.Navigator>
  );
}

//stacks
export default function CNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headShown: false }}>
        <Stack.Screen name="min1" component={min1} />
        <Stack.Screen name="managing" component={managing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



