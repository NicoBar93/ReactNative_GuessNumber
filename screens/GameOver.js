import { View, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function GameOver({onRestart}) {
    return (
        <View>
            <Text>Game Over</Text>
            <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
        </View>
    );
}

export default GameOver;