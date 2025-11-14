import React from 'react'
import { View, StyleSheet, Text} from "react-native"

const Display = ({ result }) => {
  return (
    <View style={styles.display}>
        <Text style={styles.displayTxt}>
            {result}
        </Text>
    </View>
  )
}

export default Display

const styles = StyleSheet.create({
    display:{
        width: 300,
        marginBottom: 40,
        position: 'absolute',
        top: -280,
    },
    displayTxt:{
        fontSize: 70
    }
})
