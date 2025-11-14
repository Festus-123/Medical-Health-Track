import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

const AvatarIcon = ({ source, title, newStyles, newTxt, newImg, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.avatarArea]}
      onPress={onPress}>
    <LinearGradient
    colors={['#33E4DB', '#00BBD3']}
      style={[styles.avatar, newStyles]}>
      <Image 
        source={source}
        style={[styles.image, newImg]}/>
      <Text
      style={[styles.text, newTxt]}>{title}</Text>
    </LinearGradient>
    </TouchableOpacity>
  )
}

export default AvatarIcon

const styles = StyleSheet.create({
  avatarArea:{
    width: 110,
    height: 120,
    margin: 5
  },
  avatar:{
    width: "100%",
    height: "100%",
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: "center",
    gap: 10,
    padding: 5
  },
  image:{
    // width: 80,
    // height: 60
  },
  text:{
    color: "#fff",
    fontSize: 18,
    textAlign: "center"
  }
})