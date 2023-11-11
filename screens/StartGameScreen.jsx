import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

const deviceDimensions = Dimensions.get("window").width;

function StartGameScreen({ setGoalNumber }) {
  const [inputText, setInputText] = useState("");
  const { height } = useWindowDimensions();

  const handleConfirm = () => {
    const inputNumber = parseInt(inputText);

    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert("Invalid Number!", "Please enter a number between 0 and 99", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
      return;
    }
    setGoalNumber(inputNumber);
  };
  const handleReset = () => {
    setInputText("");
  };

  const deviceHeightMargin = height < 400 ? 50 : 100;

  console.log({ deviceHeightMargin });

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior='position'>
        <View
          style={[styles.inputBoxcontainer, { marginTop: deviceHeightMargin }]}
        >
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            maxLength={2}
            keyboardType='number-pad'
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={handleConfirm}>Confirm </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={handleReset}> Reset</PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputBoxcontainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: deviceDimensions < 400 ? 20 : 30,
    marginTop: deviceDimensions < 400 ? 20 : 50,
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
