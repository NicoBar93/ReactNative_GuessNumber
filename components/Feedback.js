import PrimaryButton from "./PrimaryButton";
import { View, StyleSheet, Text } from "react-native";

function Feedback() {
  return (
    <View>
      <View style={styles.guessContainer}>
        <Text style={styles.guess}>25</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton>-</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton>+</PrimaryButton>
          </View>
        </View>
      </View>
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
});
