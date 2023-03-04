import { View, Text } from "react-native";
function Detail({ navigation, route }) {
  const inComingData = route.params;

  return (
    <View>
      <Text>{inComingData.data.title}</Text>
      <Text>{inComingData.data.subtitle}</Text>
    </View>
  );
}
export { Detail };
