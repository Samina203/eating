import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
function Login({ navigation }) {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [showPassword, setShowPassword] = useState(true);
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
        <Button title="Login account" onPress={btnPressed}></Button>
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
});
