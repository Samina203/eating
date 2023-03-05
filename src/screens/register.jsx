import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
function Register(navigation, route) {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const submitBtn = () => {
    alert("go");
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput style={styles.inputBox} placeholder="First Name"></TextInput>
        <TextInput style={styles.inputBox} placeholder="Last Name"></TextInput>
        <TextInput style={styles.inputBox} placeholder="Email"></TextInput>
        <TextInput style={styles.inputBox} placeholder="Password"></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Confirm Password"
        ></TextInput>
        <View style={styles.buttonProp}>
          <Button title="Submit" onPress={submitBtn}></Button>
        </View>
      </View>
    </View>
  );
}
export { Register };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0.5,
  },
  loginForm: {
    flex: 1,
  },

  inputBox: {
    margin: 5,
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
  buttonProp: {
    margin: 10,
  },
});
