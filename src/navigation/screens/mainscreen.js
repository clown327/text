//민원들이 보이는 메인 화면 입니다. Tab

import React from "react";
import { StyleSheet, Text, View,TouchableOpacity, FlatList, Button } from 'react-native';
import CNavigation from "../CNavigation";


export function mainscreen (props) {
    const min1box = [
    { title : "민원", content : "민원을 담기 위한 상자입니다." }
    ];

return (
    <View style={styles.min1boxcontainer}>
        <FlatList style={{alignContent: "center"}}
        contentsContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
        }}
        />
    </View>
)
}




const styles = StyleSheet.create ({
  min1boxcontainer: {
        height: 100,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
    },
    container:{
        flex: 1,
        backgroundColor: "#fff",
    },
});