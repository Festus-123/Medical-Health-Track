import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity,  } from 'react-native'

const Link = ({ newLinkTxt, title, onPress, newArea }) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.LinkArea, newArea]}>
        <Text style={[styles.linkTxt, newLinkTxt]}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default Link

const styles = StyleSheet.create({

    linkTxt:{
        color: '#00BBD3'
    }
})
