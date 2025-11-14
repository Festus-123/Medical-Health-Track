import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Logo = ({ source, svg }) => {

  return (
        <Image 
            style={[styles.image, svg]} 
            source={source} />
  )
}

export default Logo

const styles = StyleSheet.create({
    container:{

    },
    image:{
        width: 250,
        height: 250
    }
})
