import { StyleSheet, View, Text } from "react-native";

const WelcomeMsg = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.msg}>{text}</Text>
        </View>
    )
}

export default WelcomeMsg

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        position: "relative",
        left: 20,
        width: "100%",
        marginBottom: 30
    },
    msg:{
        fontSize: 40,
        color: "#1caeaeff",
        position: "absolute",
        left: -20
    }
})