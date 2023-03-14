import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { View, Button, TouchableOpacity, Alert } from "react-native";
function Gallery() {
  const galleryBtn = () => {
    alert("Goo");
  };
  const openGallery = () => {
    ImagePicker.requestMediaLibraryPermissionsAsync().then((response) => {
      console.log("permision grant");
    });
  };
  ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 0.5,
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
  })
    .then((response) => {
      if (response.uri !== undefined) {
        setImageUri(response.uri);
      }
    })

    .catch((error) => {
      alert(error.message);
    });
}

return (
  <View style={{ backgroundColor: "pink", flex: 1 }}>
    <Button title="Btnn" onPress={galleryBtn}></Button>

    <Button title="Gallery" onPress={openGallery}></Button>
  </View>
);

export { Gallery };
