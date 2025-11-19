import React, { useState } from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

const ButtonComponent = ({ title, onPress, BtnStyleLeft, BtnStyleRight, BtnTextStyle, newBtnArea, newStyles }) => {

  return (
    <TouchableOpacity
      onPress={onPress} 
      style={[styles.BtnArea, newBtnArea]}>
    <LinearGradient 
      colors= {[BtnStyleLeft, BtnStyleRight]}
      style={[styles.Btn, newStyles]}>
        <Text
          style={[styles.BtnTxt, BtnTextStyle]}>
              {title}
        </Text>
    </LinearGradient>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  Btn:{
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 50
  },
  BtnTxt:{
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "600"
  },
  BtnArea:{

  }
})
