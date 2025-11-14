import { useState } from 'react'
import { useNavigation } from 'expo-router'
import { View, StyleSheet, Button } from 'react-native'
import React from 'react'

import WelcomeMsg from './components/Welcome'
import Suggestion from './components/suggestions'

const HomeScreen = () => {
  const navigation = useNavigation()

  const moveToCounter = () => {
      navigation.navigate('Counter')
  }
  return (
    <View style={styles.container}>
        <WelcomeMsg text={"Bankify"}/>
        <Suggestion text3={"Welcome to the bankify app where you bank at a hgh charge rate "}
        />

        <Button title='click me' onPress={moveToCounter} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        marginTop: 60,
        padding: 10,
    }
})
