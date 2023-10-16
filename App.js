import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";

const App = () => {
  const [inputText, setInputText] = useState("");

  const handleConfirm = () => {
    // Implement your logic for the "Confirm" button here
    console.log("Confirm button pressed");
  };

  const handleReset = () => {
    // Implement your logic for the "Reset" button here
    setInputText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        maxLength={2}
      />
      <PrimaryButton title='Confirm' onPress={handleConfirm} />
      <PrimaryButton title='Reset' onPress={handleReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: "purple",
    // Add shadows based on platform
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderRadius: 20,
    elevation: 8, // Android shadow
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    height: 50,
    width: 50,
    padding: 10,
    marginVertical: 10,
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ddb52f",
  },
});

export default App;
