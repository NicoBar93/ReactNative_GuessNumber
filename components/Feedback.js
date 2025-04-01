import { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Alert } from "react-native";
import PrimaryButton from "./PrimaryButton";

function Feedback({ onGameOver, pickedNumber }) {
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [current, setCurrent] = useState(getRandomNumber(1, 99));
  const [numberList, setNumberList] = useState([]);

  useEffect(() => {
    if (current === pickedNumber) {
      onGameOver();
    }
  }, [current, pickedNumber, onGameOver]);

  const handleHigher = () => {
    if (current > pickedNumber) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    setMin(current);
    setCurrent(getRandomNumber(current, max));
    setNumberList((prev) => [current, ...prev]);
  };

  const handleLower = () => {
    if (current < pickedNumber) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    setMax(current);
    setCurrent(getRandomNumber(min, current));
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
            <PrimaryButton onPress={handleLower}>-</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={handleHigher}>+</PrimaryButton>
          </View>
        </View>
      </View>
      <FlatList
        data={numberList}
        keyExtractor={(item, index) => index.toString()} // Fix per keyExtractor
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

const styles = StyleSheet.create({
  guessContainer: {
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#ddb52f",
    borderRadius: 8,
    margin: 24,
    padding: 8,
  },
  guess: {
    color: "#ddb52f",
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
  },
  container: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "#3b021f",
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
    justifyContent: "space-between",
  },
});
