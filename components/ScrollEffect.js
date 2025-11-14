import React from 'react'

import { StyleSheet, View } from 'react-native'

const ScrollEffect = ({ Scroll }) => {
  return (
    <View
        style={[styles.scrollGradient, Scroll]}>
    </View>
  )
}

export default ScrollEffect

const styles = StyleSheet.create({
    scrollGradient:{
        width: 8,
        height: 8,
        borderRadius: 50,
        backgroundColor: "#00BBD3"
    }
})
