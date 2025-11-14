
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Submit = ({ btnTxt, onPress }) => {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.submitBtn} onPress={onPress}>
                <Text style={styles.submitBtnTxt}>{btnTxt}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Submit

const styles =StyleSheet.create({
    container:{
        marginTop: 15
    },
    submitBtn:{
        backgroundColor: "#00cfcf",
        width: 200,
        paddingVertical: 15,
        borderRadius: 50,
    },
    submitBtnTxt:{
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
})