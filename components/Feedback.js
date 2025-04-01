import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Alert,
  Dimensions,
} from "react-native";
import PrimaryButton from "./PrimaryButton";
import Colors from "../assets/costants/colors";

function Feedback({ onGameOver, pickedNumber, numberList, setNumberList }) {
  const getRandomNumber = (min, max, exclude) => {
    let random;
    do {
      random = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (random === exclude || numberList.includes(random));
    return random;
  };

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [current, setCurrent] = useState(getRandomNumber(1, 99));

  useEffect(() => {
    if (current === pickedNumber) {
      onGameOver();
    }
  }, [current, pickedNumber, onGameOver]);

  const handleGuess = (direction) => {
    if (
      (direction === "lower" && current < pickedNumber) ||
      (direction === "higher" && current > pickedNumber)
    ) {
      Alert.alert(
        "Non mentire",
        "La risposta che stai fornendo non è corretta...",
        [{ text: "Sorry", style: "cancel" }]
      );
      return;
    }

    if (direction === "lower") {
      setMax(current);
      setCurrent(getRandomNumber(min, current));
    } else {
      setMin(current);
      setCurrent(getRandomNumber(current + 1, max));
    }
    setNumberList((prev) => [current, ...prev]);
  };

  return (
    <View>
      <View style={styles.guessContainer}>
        <Text style={styles.guess}>{current}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => handleGuess("lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={() => handleGuess("higher")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </View>
      <FlatList
        data={numberList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={styles.print}
            key={index}
          >
            <Text>#{numberList.length - index}</Text>
            <Text>Opponent's Guess: {item}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Feedback;

const { width } = Dimensions.get("window").width;
const { height } = Dimensions.get("window").height;

const styles = StyleSheet.create({
  guessContainer: {
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    margin: 24,
    padding: 8,
  },
  guess: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
  },
  container: {
    marginTop: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
    width: "75%",
  },
  text: {
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  button: {
    flex: 1,
  },
  print: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor:  Colors.primary800,
    borderWidth: 2,
    backgroundColor: Colors.accent500,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 8,
  },
});
