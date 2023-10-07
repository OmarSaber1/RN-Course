import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.inputStyle} placeholder='Enter Todo' />
        <Button title='Add Todo' />
      </View>
      <View style={styles.listWrapper}>
        <Text>List of Todos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: "skyblue",
    borderBottomWidth: 2,
  },
  inputStyle: {
    width: "70%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  listWrapper: {
    flex: 3,
    marginTop: 20,
  },
});
