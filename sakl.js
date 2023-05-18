import  React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from 'react-navigation-stack';
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
        onPress={() => navigation.navigator("Settings")}>
        </Button>
      <ScrollView style={styles.container} >
        <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("min1")}>
          <Text style={styles.textStyle}>
             이곳은 텍스트를 테스트하는 텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("Settings")}>
          <Text style={styles.textStyle}>
            텍스트 영역입니다.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>

      
  );
}



const Home = createBottomTabNavigator();
//하단 탭

function Main(){
  return (
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
            <Icon name="settings" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>

  );

}
function SettingsScreen({navigation}) {  
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

//일반 stack
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = "Min1"
        component={min1}
        options={{headerShown:false}}
        />
        <Stack.Screnn 
        name = 'Settinsg'
        component = {Settings}
        />

      <Stack.Screen 
        name ="Main"
        component = {Main}      
      />
      </Stack.Navigator>
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
  backgroundcolor: "AC91E6",
  },
  textStyle: {
  textAlign: "flex-start",
  marginTop: 10,
  marginLeft: 150,
  marginRight: 10,
  },
  button:{
    Color: "222A55",
  },
  });