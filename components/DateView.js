import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const DateView = ({ date, day, newStyles, newText, newDayTxt }) => {
  return (
    <View
        style={[styles.dateView, newStyles]}>
        <Text style={[styles.text, newText]}> {date}</Text>
        <Text style={[styles.dayText, newDayTxt]}> {day}</Text>
    </View>
  )
}

export default DateView

const styles = StyleSheet.create({
    dateView:{
        borderWidth: 2,
        width: 50,
        height: 90,
        borderRadius: 30,
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        margin: 10
        // padding: 10,
    },
    text:{
        fontSize: 20,
        color: "#fff"
    },
    dayText:{
        fontSize: 15,
        color: "#fff",
        fontFamily: "league spartan"
    }
})