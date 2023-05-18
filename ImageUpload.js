import React, { useState } from "react";
import { Pressable, Image } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

function ImageUpload() {

  const [response, setResponse] = useState(null);
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      (res) => {
        console.log(res);
        if (res.didCancel) return;
        setResponse(res);
      },
    )
  }
  
  return (
    <Pressable style={styles.circle} onPress={onSelectImage}>
      <Image style={styles.circle} source={{uri: response?.assets[0]?.uri}} />
    </Pressable>
  )

}

export default ImageUpload;