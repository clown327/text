import React from "react";
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import StackContainer from './src/navigation/StackContainer'
export default function App()
{
  return (
    <NavigationContainer>
      <StackContainer/>
    </NavigationContainer>

  );
}

const style = StyleSheet.create({

});