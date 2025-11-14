import React from "react";
import {
    View, Text, Image, TouchableOpacity, StyleSheet
} from "react-native";
import Animated, {
    useSharedValue,
    withTiming,
    Easing,
    useAnimatedStyle
} from "react-native-reanimated";

const Fade = () => {
    const FadeInOpacity = useSharedValue(0)

    const FadeIn = () => {
        FadeInOpacity.value = withTiming(1, {
            duration: 500,
            easing: Easing.linear,
        })
    }

    const FadeOut = () => {
        FadeInOpacity.value = withTiming(0, {
            duration: 1000,
            easing: Easing.linear
        })
    }
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: FadeInOpacity.value
        }
    })

    const ImageUrl = "https://media.geeksforgeeks.org/wp-content/uploads/20230816223829/geeksgforgeeks-logo-1.png";

    return (
        <View style={styles.container}>
            <Animated.View
            style={[
                styles.imageContainer,
                animatedStyle,
            ]}>
                <Image
                source={{uri: ImageUrl}}
                style={styles.Image}
                 />
            </Animated.View>

            <TouchableOpacity style={styles.btn} onPress={FadeIn}>
            <Text style={styles.btnText}> Fade In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={FadeOut}>
            <Text style={styles.btnText}> Fade Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Fade

const styles = StyleSheet.create({
    container:{

    },
    imageContainer:{
        width: 200,
        height: 100,
        marginBottom: 50,
    },
    Image:{
        width: 200,
        height: 150,
    },
    btn:{
        backgroundColor: "blue",
        margin: 10,
        padding: 10,
    },
    btnText:{
        color: "#fff",
        fontSize: 15,
    }

})