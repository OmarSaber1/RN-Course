import { useState } from "react";
import { View, TextInput, StyleSheet, ImageBackground } from "react-native";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";

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
    <LinearGradient
      colors={["#320332", "#6d5f33"]}
      style={styles.parentContainer}
    >
      <ImageBackground
        style={styles.parentContainer}
        resizeMode='cover'
        source={require("./assets/dice.jpg")}
        imageStyle={{ opacity: 0.14 }}
      >
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
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
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

export default App;
