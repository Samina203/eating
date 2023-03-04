import { TouchableOpacity, View, Text } from "react-native";
function Login({ navigation }) {
  const btnPressed = () => {
    const sentData = { Name: "ali", age: 24 };
    navigation.navigate("registersheda", { data: sentData });
  };
  return (
    <View style={{ backgroundColor: "blue", flex: 1 }}>
      <TouchableOpacity onPress={btnPressed}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
}
export { Login };
