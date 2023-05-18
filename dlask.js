import  React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';
import button from './src/1button'; //./src/App 컴포넌트 사용
import { Button } from 'react-native-web';
//import {1buttons} from '.src/1button'
//import React {Component} from 'react';



function MainScreen({navigation}) {
  return (
    <View style={{
      flex : 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button style={styles.button}
        title="필터링"
        onPress={() => navigation.navigate("Settings")}>
        </Button>
      <ScrollView style={styles.container} >
        <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("min1")}>
          <Text style={styles.textStyle}>
             이곳은 텍스트를 테스트하는 텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>        
        <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>

      
  );
}

function SettingsScreen({navigation}) {  //여기가 페이지에 기능을 넣는거임
  return (
    <View style={{
       flex: 1, 
       justifyContent: 'center',
       alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button 
      title="새 민원 확인" 
      onPress={() => navigation.navigate("Main")} />
    </View>
  );
}


const TabNavi = ({ navigation }) => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#7DD421",
          inactiveTintColor: "#222222",
          style: {
            height: heightPercentage(56),
            borderTopWidth: heightPercentage(0.5),
            borderTopColor: "#E9E9E9",
            backgroundColor: "#FFFFFF",
          },
          iconStyle: {
            marginTop: heightPercentage(10),
          },
          labelStyle: {
            fontFamily: "NotoSansKR-Regular",
            fontSize: fontPercentage(10),
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={TabPlaceholder}
          options={{
            tabBarLabel: "홈",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <ActiveHomeIcon width={widthPercentage(24)} height={heightPercentage(24)} />
              ) : (
                <InactiveHomeIcon width={widthPercentage(24)} height={heightPercentage(24)} />
              ),
          }}
        />
  
        <Tab.Screen
          name="Category"
          component={TabPlaceholder}
          options={{
            tabBarLabel: "카테고리",
            tabBarIcon: () => (
              <CategoryIcon width={widthPercentage(24)} height={heightPercentage(24)} />
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate("NewScreen");
            },
          })}
        />
  
        <Tab.Screen
          name="Chatting"
          component={TabPlaceholder}
          options={{
            tabBarLabel: "채팅",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <ActiveChatIcon width={widthPercentage(24)} height={heightPercentage(24)} />
              ) : (
                <InactiveChatIcon width={widthPercentage(24)} height={heightPercentage(24)} />
              ),
          }}
        />
  
        <Tab.Screen
          name="Profile"
          component={TabPlaceholder}
          options={{
            tabBarLabel: "프로필",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <ActiveProfileIcon width={widthPercentage(24)} height={heightPercentage(24)} />
              ) : (
                <InactiveProfileIcon width={widthPercentage(24)} height={heightPercentage(24)} />
              ),
          }}
        />
      </Tab.Navigator>
    );
  };
  
  const Stack = createStackNavigator();
  
  const WholeStack = () => {
    return (
      <Stack.Navigator initialRouteName="TabNavi">
        <Stack.Screen
          name="TabNavi"
          component={TabNavi}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="NewScreen"
          component={NewScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
      </Stack.Navigator>
    );
  };
  
  export default () => {
    return (
      <NavigationContainer>
        <WholeStack />
      </NavigationContainer>
    );
  };

function Screen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = 'min1'
        component ={min1}
        options = {{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const Tab = createBottomTabNavigator();
//const Stack = createStackNavigator();

const NewScreen = () => {
  return (
    <><Placeholder style={{ backgroundColor: "#222A55" }} />
    <Text>  안녕 </Text></>
  )
}


export default function App () {
  return ( 
    <NavigationContainer>
  
      <Tab.Navigator>
        <Tab.Screen 
        name="Main" 
        component={MainScreen} 
        options={{
          title: "메인 화면",
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
     />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          title: '설정',
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size}  />
          )
        }}
      />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}

 
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "transparent",
  },
  textContainer: {
  height: 140,
  borderColor: "black",
  borderWidth: 1,
  borderRadius: 13,
  margin: 10,
  marginLeft:10,
  marginBottom: 15,
  backgroundcolor: "#AC91E6",
  },
  textStyle: {
  textAlign: "flex-start",
  marginTop: 10,
  marginLeft: 150,
  marginRight: 10,
  },
  button:{
    Color: "#222A55",
    
  },
  });