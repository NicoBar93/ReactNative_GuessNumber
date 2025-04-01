import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { widthRelative, heightRelative } = useWindowDimensions();

  const marginTopRelative = heightRelative < 380 ? 30 : 100;

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function setInputHandler(enteredValue) {
    setEnteredNumber(enteredValue);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Please choose a number between 1 and 99",
        [{ test: "Close", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <ScrollView style={styles.buttonContainer}>
      <KeyboardAvoidingView
        behavior="position"
        style={styles.buttonContainer}
      >
        <View style={[styles.introContainer, { marginTop: marginTopRelative }]}>
          <View>
            <Text style={styles.intro}>Guess My Number</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const widthDim = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    marginHorizontal: widthDim < 380 ? 12 : 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  introContainer: {
    alignItems: "center",
  },
  numberInput: {
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: Platform.select({ios: 0, android: 2}),
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
  intro: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
    marginTop: 100,
    maxWidth: "80%",
    marginHorizontal: widthDim < 380 ? 12 : 24,
  },
});
