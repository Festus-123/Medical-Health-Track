import { useState, useEffect } from "react"
import { StyleSheet, View, Text, TextInput, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Input = ({ 
    label, 
    placeholder, 
    Bool, 
    IconName, 
    IconSize,
    value, 
    onChangeText, 
    error, 
    instruction,  
    onPress }) => {


    return (
        <View style={styles.container}>

            <Text style={styles.label}>{label}</Text>

            <Ionicons 
                name={IconName} 
                size={IconSize} 
                style={styles.icon} 
                onPress={onPress}/>

            <TextInput 
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={"#10babaff"}
                secureTextEntry={Bool}
                onChangeText={onChangeText}
                value={value} />

            {error ? <Text style={styles.error}>{error}</Text> : <Text style={styles.instructions}>{instruction}</Text>}

        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container:{
        marginTop: 8,
        width: 380,
    },
    label:{
        fontSize: 25,
        fontWeight: "bold",
        // fontFamily: "time",
        margin: 5,
        color: "#000000"
    },
    input:{
        borderColor: "blue",
        // borderWidth: 0.5,
        borderRadius: 20,
        backgroundColor: "#b6eaeab4",
        paddingVertical: 15,
        paddingHorizontal: 10,
        position: "relative",
        fontSize: 20,
        color: "#149595ff",
    },
    instructions:{
        color: "grey",
        marginLeft: 10
    },
    error:{
        color: "red",
        marginLeft: 10
    },
    icon:{
        position: "absolute",
        right: 20,
        top: 52,
        zIndex: 1,
        color: "#10babaff",
    }
})