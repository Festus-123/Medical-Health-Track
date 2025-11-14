import React from 'react'
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const Escape = ({ 
    text, 
    iconName, 
    iconSize, 
    onPress,
    escapeOption,
    escapeOptionIcon,
    escapeOptionText }) => {

  return (
    <TouchableOpacity
        style={[styles.escapeArea, escapeOption]}
        onPress={onPress}>

        <Text style={[styles.escapeText, escapeOptionText]}>{text}</Text>

        <Ionicons 
            name={iconName} 
            size={iconSize} 
            style={[styles.escapeIcon, escapeOptionIcon]}/>

    </TouchableOpacity>
  )
}

export default Escape

const styles = StyleSheet.create({
    escapeArea:{
        width: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    escapeText: {
        fontSize: 18
    },
    escapeIcon:{
        color: "#00BBD3"
    }
})