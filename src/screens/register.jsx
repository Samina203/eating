import { useEffect, useState } from "react";
import * as EmailValidator from "email-validator";

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
function Register(navigation, route) {
  const [isValid, setIsValid] = useState(false); // form is valid or not
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {
    checkValidForm();
  }, [firstName, lasttName, email, password, confirmPassword]);
  const checkValidForm = () => {
    if (firstName === "") {
      setIsValid(false);
      return;
    }
    if (lasttName === "") {
      setIsValid(false);
      return;
    }
    if (EmailValidator.validate(email) === false) {
      setIsValid(false);
      return;
    }
    if (password === "") {
      setIsValid(false);
      return;
    }
    if (confirmPassword === "") {
      setIsValid(false);
      return;
    }
    if (password !== confirmPassword) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  };
  const submitBtn = () => {
    alert("go");
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.inputBox}
          placeholder="First Name"
          onChangeText={setFirstName}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Last Name"
          onChangeText={setLasttName}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={setConfirmPassword}
        ></TextInput>
        <View style={styles.buttonProp}>
          <Button
            title="Submit"
            onPress={submitBtn}
            disabled={isValid == false}
          ></Button>
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
