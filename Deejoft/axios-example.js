import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Button, Text  } from 'react-native'
import axios from 'axios'

const AxiosExample = () => {
    const [advice, setAdvice] = useState("")

    const getAdvice = () => {
        axios
        .get( "https://api.adviceslip.com/advice/" + getRandomId(1, 200))
        .then((response) => {
            setAdvice(response.data.slip.advice)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const getRandomId = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max);
        return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
    }

    
    return (
    <View style={styles.container}>
        <Text style={styles.advice}>{advice}</Text>
        <Button title='Get Advice' onPress={getAdvice} color={"green"} />
    </View>
  )
}


export default AxiosExample

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  advice:{
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 20,
  }
})
