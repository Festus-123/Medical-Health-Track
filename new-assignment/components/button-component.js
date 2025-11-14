import React from 'react'
import { useState } from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"

const Button = ({ Char, operate, symbol, value, onPress, calculate}) => {

  const [operationStyle, setOperationStyle] = useState(operate)
  return (
    <>
        <TouchableOpacity 
        style={[styles.calcBtn, operationStyle === "operate" ? styles.operate : styles.calcBtn]}
        onPress={onPress}>

          <Text 
            style={[styles.charTxt, operationStyle === "operate" ? styles.operateCharTxt : styles.charTxt]}
            value={value}>
              {Char}
          </Text>
              
        </TouchableOpacity>
    </>
  )
}

export default Button

const styles = StyleSheet.create({
    calcBtn:{
        backgroundColor: "#ebe9e9ff",
        borderRadius: "50%",
        width: 80,
        height: 80,
        padding: 10,
        justifyContent: "center",
        alignItems: 'center'
    },
    charTxt: {
      fontSize: 40,
    },
    operate:{
      backgroundColor: "#2a770eff",
    },
    operateCharTxt:{
      color: "white"
    },

    Expression:{
    }

})