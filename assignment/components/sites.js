import { useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";

const Sites = ({ imageUrl, option }) => {
    // const [current, setCurrent] = useState(option)
    const current = option;
    const ImageUrl = {
        Google: require("../../assets/used-assets/gLogo.png"),
        Facebook: require("../../assets/used-assets/fLogo.png"),
        Fingerprint: require("../../assets/used-assets/fingerprint.png"),
    }
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.siteArea}>
            <Image source={ImageUrl[imageUrl]} style={[styles.siteLogo, current ? styles.siteLogoNew : styles.siteLogo]}/>
        </TouchableOpacity>
    </View>
    )
}

export default Sites

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
    },
    siteArea:{
        backgroundColor: "#00cfcf",
        borderRadius: 50,
        width: 70,
        height: 70,
        position: "relative"
    },
    siteLogo:{
        width: 50,
        height: 40,
        color: " white",
        position: "absolute",

        top: 12,
        left: 5
    },
    siteLogoNew:{
        width: 80,
        height: 50,
        left: -3,
        top: 10
    }
})