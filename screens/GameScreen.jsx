import React, { useEffect, useState } from "react";
import { View, Button, Alert } from "react-native";
import Title from "../components/Title/Title";
import NumberContainer from "../components/NumberContainer/NumberContainer";

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
      <Button title='LOWER -' onPress={() => nextGuessHandler("lower")} />
      <Button title='GREATER +' onPress={() => nextGuessHandler("greater")} />
    </View>
  );
};

export default GameScreen;
