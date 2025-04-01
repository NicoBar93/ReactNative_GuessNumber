import { View, Text, StyleSheet, Image, ScrollView, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../assets/costants/colors";

function GameOver({ onRestart, numberList, pickedNumber }) {
    const { width, height } = useWindowDimensions();

    const imageDimensions = height < width ? 100 : 300;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Game Over</Text>
        <Image
          source={require("../assets/images/success.png")}
          style={[ { width: imageDimensions, height: imageDimensions }, styles.image]}
        />
        <Text style={styles.text}>
          Il tuo avversario ha impiegato
          <Text style={styles.emphasys}> {numberList.length}</Text> tentativi per
          indovinare il numero
          <Text style={styles.emphasys}> {pickedNumber}</Text>
        </Text>
        <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    // width: 300,
    // height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.primary500,
    marginVertical: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color:  Colors.accent500,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  emphasys: {
    color: Colors.primary500,
    fontWeight: "bold",
    fontSize: 20,
  },
});
