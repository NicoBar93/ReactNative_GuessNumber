import {
  StyleSheet,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [numberList, setNumberList] = useState([]);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(userNumber) {
    setPickedNumber(userNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function restartGame() {
    setNumberList([]);
    setPickedNumber(null);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = (
      <GameScreen
        pickedNumber={pickedNumber}
        onGameOver={gameOverHandler}
        numberList={numberList}
        setNumberList={setNumberList}
      />
    );
  }

  if (gameIsOver && pickedNumber) {
    screen = <GameOver onRestart={restartGame} numberList={numberList} pickedNumber={pickedNumber} />;
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
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
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
  },
});
