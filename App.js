import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const [courses, setCourses] = useState([]);

  function handleTextChange(text) {
    setTextInput(text);
  }

  function handleButtonPress() {
    setCourses((prevState) => [
      ...prevState,
      { text: textInput, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          onChangeText={handleTextChange}
          value={textInput}
          style={styles.inputStyle}
          placeholder='Enter Todo'
        />
        <Button onPress={handleButtonPress} title='Add Todo' />
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.courseHeader}>List Of Todo</Text>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <Text style={styles.course}>{itemData.item.text}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
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
    marginTop: 5,
  },
  courseHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  course: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    color: "white",
  },
});
