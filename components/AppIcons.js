import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const AppIcons = ({ IconName, IconSize, newAppIconStyle, onPress, iconColor }) => {
  return (
    <TouchableOpacity
        style={[styles.appIcon, newAppIconStyle]}
        onPress={onPress}>
    <Ionicons 
        name={IconName} 
        size={IconSize} 
        color={iconColor}/>
    </TouchableOpacity>
  )
}

export default AppIcons

const styles = StyleSheet.create({
    appIcon:{
        margin: 3,
        backgroundColor: "#E9F6FE",
        padding: 5,
        borderRadius: 50
    }
})