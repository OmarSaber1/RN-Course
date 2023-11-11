import React, { useEffect, useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import Title from "../components/Title/Title";
import NumberContainer from "../components/NumberContainer/NumberContainer";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundry = 1;
let maxBoundry = 100;

const GameScreen = ({ goalNumber, handleGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, goalNumber)
  );

  useEffect(() => {
    if (currentGuess === goalNumber) {
      handleGameOver();
    }
  }, [currentGuess, goalNumber, handleGameOver]);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < goalNumber) ||
      (direction === "greater" && currentGuess > goalNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = goalNumber;
    }
    setCurrentGuess(generateRandomNumber(minBoundry, maxBoundry, currentGuess));
  };

  return (
    <View>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => nextGuessHandler("lower")}>
          <Ionicons color='white' name='md-remove' size={20} />
        </PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons color='white' name='md-add' size={20} />
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "space-around",
    marginTop: 20,
    gap: 5,
  },
  buttonStyle: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#5d2525",
    color: "red",
  },
});
