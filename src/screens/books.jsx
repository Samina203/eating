import { FlatList, View, Text, TouchableOpacity } from "react-native";
const BookData = [
  { title: "mybook1", subtitle: "subtitle1" },
  { title: "mybook2", subtitle: "subtitle2" },
  { title: "mybook3", subtitle: "subtitle3" },
  { title: "mybook4", subtitle: "subtitle4" },
  { title: "mybook5", subtitle: "subtitle5" },
  { title: "mybook6", subtitle: "subtitle6" },
  { title: "mybook7", subtitle: "subtitle7" },
  { title: "mybook8", subtitle: "subtitle8" },
  { title: "mybook9", subtitle: "subtitle9" },
  { title: "mybook10", subtitle: "subtitle10" },
  { title: "mybook11", subtitle: "subtitle11" },
  { title: "mybook12", subtitle: "subtitle12" },
  { title: "mybook13", subtitle: "subtitle13" },
  { title: "mybook14", subtitle: "subtitle14" },
];
function Book({ navigation }) {
  const __renderedIem = ({ item }) => (
    <TouchableOpacity
      style={{
        margin: 20,
        borderRadius: 10,
        padding: 20,
        backgroundColor: "cyan",
      }}
      onPress={() => navigation.navigate("bookdetail", { data: item })}
    >
      <Text style={{ fontSize: 20 }}>{item.title}</Text>
      <Text>{item.subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: "pink", flex: 1 }}>
      <FlatList data={BookData} renderItem={__renderedIem}></FlatList>
    </View>
  );
}

export { Book };
