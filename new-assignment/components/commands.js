import React, { useState } from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Commands = ({ iconName, position, onPress }) => {
    const [iconPosition, setIconPosition] = useState(position)

  return (
    <TouchableOpacity 
        style={[styles.rightICon, iconPosition === "right" ? styles.rightICon : styles.leftIcons]}
        onPress={onPress}>
            <Ionicons  name={iconName} size={30} color={"#fe5959ff"} style={StyleSheet.icon}/>
    </TouchableOpacity>
  )
}

export default Commands

const styles = StyleSheet.create({
    iconAre:{
        backgroundColor: "transparent",
        padding: 10
    },
    rightICon:{
        position: 'absolute',
        right: 30,
        top: -50
    }
})
