//스택 관리 나 네비게이션 총 관리
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import managing from "./screens/managing";
import min1 from "./screens/min1";
import settings from "./screens/settings";
import { mainscreen } from "./screens/mainscreen";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNavigationContainerRef } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const navigationRef = createNavigationContainerRef();


//bottom tabs
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="main"
      screenOptions={{ headShown: false }}>
      <Tab.Screen name="main" component = {mainscreen} options={{ tabBarLabel: "메인" }} />
      <Tab.Screen name="settings" component={settings} options={{ tabBarLabel: "세팅" }} />
    </Tab.Navigator>
  );
}
// 확장용<Tab.Screen name = "main" component={} options={{tabBarLabel:"홈"}}/>

//stacks
export default function CNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="min1"
        screenOptions={{ headShown: false }}>
        <Stack.Screen name="min1" component={min1} />
        <Stack.Screen name="managing" component={managing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}