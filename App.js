import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState();

  let currentScreen = <StartGameScreen setCurrentNumber={setCurrentNumber} />;

  if (currentNumber) {
    currentScreen = <GameScreen />;
  }

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
        {currentScreen}
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});

export default App;
