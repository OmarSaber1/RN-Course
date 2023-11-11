import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [goalNumber, setGoalNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  let currentScreen = <StartGameScreen setGoalNumber={setGoalNumber} />;

  function handleGameOver() {
    setIsGameOver(true);
  }

  if (goalNumber) {
    currentScreen = (
      <GameScreen goalNumber={goalNumber} handleGameOver={handleGameOver} />
    );
  }

  if (goalNumber && isGameOver) {
    currentScreen = <GameOverScreen />;
  }

  return (
    <>
      <StatusBar style='light' />
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
          <SafeAreaView style={styles.innerContainer}>
            {currentScreen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
  innerContainer: {
    padding: 20,
    marginTop: 30,
  },
});

export default App;
