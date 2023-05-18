import React from "react";
import CNavigation from "./src/navigation/CNavigation";
import { StatusBar } from "expo-status-bar"; 
import  {StyleSheet, Text, View} from 'react-native';


export default function App()
{
  return (
    <View style={{flex:1}}>
      <Text>ji</Text>
      <CNavigation/>
    </View>
  );
}

//const style = StyleSheet.create({});