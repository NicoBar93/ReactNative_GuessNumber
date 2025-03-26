import { StyleSheet, StatusBar, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  function pickedNumberHandler(userNumber) {
    setPickedNumber(userNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = <GameScreen pickedNumber={pickedNumber} />
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#4e0329", "#ddb52f"]}
        style={styles.rootContainer}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode={"cover"}
          style={styles.rootContainer}
          imageStyle={styles.backgroundImage}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
