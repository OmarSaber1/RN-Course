import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

function StartGameScreen({ setCurrentNumber }) {
  const [inputText, setInputText] = useState("");

  const handleConfirm = () => {
    const inputNumber = parseInt(inputText);

    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert("Invalid Number!", "Please enter a number between 0 and 99", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
      return;
    }
    setCurrentNumber(inputNumber);
  };
  const handleReset = () => {
    setInputText("");
  };
  return (
    <View style={styles.inputBoxcontainer}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        maxLength={2}
        keyboardType='number-pad'
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton title='Confirm' onPress={handleConfirm} />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title='Reset' onPress={handleReset} />
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputBoxcontainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: "#9c459c",
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
  buttonsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  buttonContainer: {
    flex: 1,
  },
});
