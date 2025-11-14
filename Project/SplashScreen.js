import React from 'react'
import {View, StyleSheet, Text} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

import { imageSource } from '../components/vectors'

import Logo from '../components/Logo'

const SplashScreen = () => {
  return (
    <LinearGradient 
      colors={['#33E4DB' ,'#00BBD3']}
      style={styles.container}>
        <Logo source= {imageSource.whiteLogo} />
        <Text 
          style={styles.strongTxt}> Health
            <Text 
              style={styles.lightTxt}>Track
            </Text>
          </Text>

    </LinearGradient>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    strongTxt:{
      fontWeight: "900",
      fontSize: 50,
      color: "white",
      gap: 10,
      marginTop: 20,
    },
    lightTxt:{
      fontWeight: "normal",
    }
})
