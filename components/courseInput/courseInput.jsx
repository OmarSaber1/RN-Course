import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";

const CourseInput = ({ onAddItem }) => {
  const [textInput, setTextInput] = useState("");

  function handleTextChange(text) {
    setTextInput(text);
  }

  function handleAddItem(text) {
    onAddItem(text);
    setTextInput("");
  }

  return (
    <>
      <TextInput
        onChangeText={handleTextChange}
        value={textInput}
        style={styles.inputStyle}
        placeholder='Enter Todo'
      />
      <Button onPress={() => handleAddItem(textInput)} title='Add Todo' />
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: "70%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default CourseInput;
