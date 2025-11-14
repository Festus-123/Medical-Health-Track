import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const ModesComponent = ({ onPress, ModeObject, icon }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Ionicons name={icon} size={50} style={styles.icon}/>
        <Text> {ModeObject} </Text>
    </TouchableOpacity>
  )
}

export default ModesComponent

const styles = StyleSheet.create({
    container:{
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    icon:{
        color: "grey"
    }
})
