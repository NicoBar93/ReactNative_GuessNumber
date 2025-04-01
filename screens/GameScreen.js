import { View, Text, StyleSheet, Dimensions } from "react-native";
import Feedback from "../components/Feedback";

function GameScreen({ onGameOver, pickedNumber, numberList, setNumberList }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Opponent's Guess</Text>
      <Feedback
        onGameOver={onGameOver}
        pickedNumber={pickedNumber}
        numberList={numberList}
        setNumberList={setNumberList}
      />
    </View>
  );
}

export default GameScreen;

const widthDim = Dimensions.get("window").width;
const heightDim = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: heightDim < widthDim ? 20 : 100,
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
