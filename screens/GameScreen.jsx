import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";

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

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, props.userChoice)
  );

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      setCurrentGuess(generateRandomNumber(1, currentGuess, currentGuess));
    } else {
      setCurrentGuess(generateRandomNumber(currentGuess, 100, currentGuess));
    }
  };

  return (
    <View>
      <Text>Opponent's Guess</Text>
      <Text>{currentGuess}</Text>
      <Button title='LOWER' onPress={nextGuessHandler.bind(this, "lower")} />
      <Button
        title='GREATER'
        onPress={nextGuessHandler.bind(this, "greater")}
      />
    </View>
  );
};

export default GameScreen;
