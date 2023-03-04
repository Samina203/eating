import { View } from "react-native";
import { Login } from "./src/screens/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "./src/screens/register";
import { Book } from "./src/screens/books";
import { Detail } from "./src/screens/booksdetail";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login}></Stack.Screen>
        <Stack.Screen name="registersheda" component={Register}></Stack.Screen>
        <Stack.Screen name="book" component={Book}></Stack.Screen>
        <Stack.Screen name="bookdetail" component={Detail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
