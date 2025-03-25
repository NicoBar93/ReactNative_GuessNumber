import { View, Text, StyleSheet } from "react-native";

function PrimaryButton({children}) {
    return (
        <View style={styles.buttons}>
            <Text>{children}</Text>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: "#72063c",
        borderRadius: 8
    }
})