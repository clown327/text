import React from "react";
import CNavigation from "./src/navigation/CNavigation";
import { StatusBar } from "expo-status-bar"; 
import  {StyleSheet, Text, View} from 'react-native';


export default function App() //export default 지우고 실행시켜보기
{
  return (
    <View style={{flex:1}}>
      <Text>ji</Text>
      <CNavigation/>
    </View>
  );
}

//const style = StyleSheet.create({});
