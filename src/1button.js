import { StatusBar } from "expo-status-bar";
import React from "react";
import {ScrollView, StyleSheet, Text, View, Button, Alert,TouchableOpacity,} from "react-native";

export default function App() {
  return (
      <ScrollView style={styles.container}>

            <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("sting")}>
                  <Text style={styles.textStyle}>
                  텍스트 영역입니다.
                  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("sting")}>
                  <Text style={styles.textStyle}>
                  텍스트 영역입니다.
                  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("sting")}>
                  <Text style={styles.textStyle}>
                  텍스트 영역입니다.
                  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("sting")}>
                  <Text style={styles.textStyle}>
                   텍스트 영역입니다.
                  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("sting")}>
                  <Text style={styles.textStyle}>
                  텍스트 영역입니다.
                  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("sting")}>
                  <Text style={styles.textStyle}>
                  텍스트 영역입니다.
                  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer} onPress={()  => NavigationPreloadManager.navigator("sting")}>
            <Text style={styles.textStyle}>
                  텍스트 영역입니다.
                  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer} onPress={() => NavigationPreloadManager.navigator("sting")}>
                  <Text style={styles.textStyle}>
                  텍스트 영역입니다.
                  </Text>
            </TouchableOpacity>
      </ScrollView>
      );
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
},
textContainer: {
height: 100,
borderColor: "#000",
borderWidth: 1,
borderRadius: 10,
margin: 10,
},
textStyle: {
textAlign: "center",
},
});

/* <Image
     source={{uri:'https://images.unsplash.com/photo-1424819827928-55f0c8497861?fit=crop&w=600&h=600%27'}}
      resizeMode={"cover"}
      style={styles.imageStyle}
/>
*/

