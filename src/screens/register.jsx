import { View } from "react-native";
function Register({ navigation, route }) {
  const inComingData = route.params;
  alert(inComingData.data.Name);

  return <View></View>;
}
export { Register };
