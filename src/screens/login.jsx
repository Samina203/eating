import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
function Login({ navigation }) {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const [imageUri, setImageUri] = useState();
  const onEyePressed = () => {
    if (showPassword == true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  const btnPressed = () => {
    navigation.navigate("registersheda");
  };
  const openGallery = () => {
    ImagePicker.requestMediaLibraryPermissionsAsync().then((response) => {
      console.log("permision grant");
    });
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
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          onChangeText={(text) => setEmailInput(text)}
        ></TextInput>
        <View style={styles.inPassword}>
          <TextInput
            style={styles.inIcon}
            placeholder="Password"
            secureTextEntry={showPassword} // hide passwsord
            onChangeText={(text) => setPasswordInput(text)}
          ></TextInput>

          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={24}
            color={showPassword ? "purple" : "orange"}
            onPress={onEyePressed}
          ></Ionicons>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <Image style={styles.galleryImg} source={{ uri: imageUri }}></Image>
        <Button title="Login account" onPress={btnPressed}></Button>
        <Button title="Gallery" onPress={openGallery}></Button>
      </View>
    </View>
  );
}
export { Login };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginForm: {
    flex: 1,
    paddingTop: 0.5,
  },
  bottomBox: {
    flex: 1,
  },
  inputBox: {
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
  inPassword: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    padding: 5,
  },
  inIcon: {
    padding: 7,
    width: "90%",
  },
  galleryImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
});
