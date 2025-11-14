import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, } from "react-native";

const GradientLook = ({ gradient }) => {

    return (
        <LinearGradient
            colors={['#00bad357', '#fbfcfd29',]}
            start={{x: 0, y: 1.9}}
            end={{x:0, y: 0.6}}
            style={[styles.gradientLook, gradient]}>
        </LinearGradient>
    )
}

export default GradientLook

const styles = StyleSheet.create({
    gradientLook:{
        width: 350,
        height: 350,
        borderWidth: 0,
        borderRadius: 175
    }
})