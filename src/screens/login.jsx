import { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
function Login(navigation) {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const btnPressed = () => alert(emailInput);
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.inputBox}
          placeholder="email"
          onChangeText={(text) => setEmailInput(text)}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.inputBox}
          onChangeText={(text) => setPasswordInput(text)}
        ></TextInput>
      </View>
      <View style={styles.bottomBox}>
        <Button title="Loginme" onPress={btnPressed}></Button>
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
  },
  bottomBox: {
    flex: 1,
    backgroundColor: "purple",
  },
  inputBox: {
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
});
