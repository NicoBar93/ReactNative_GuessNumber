import { View, Text, StyleSheet } from "react-native";
import Feedback from "../components/Feedback";

function GameScreen({onGameOver, pickedNumber}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Opponent's Guess</Text>
      <Feedback onGameOver={onGameOver} pickedNumber={pickedNumber} />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 60,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
