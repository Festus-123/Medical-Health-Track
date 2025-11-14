import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'

const CategoryIcon = ({ source, onPress, newCategoriesIcon, newIcon, label, newTxt }) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.categoriesIcon, newCategoriesIcon]}>
    <Image 
        source={source}
        style={[styles.icon, newIcon]}/>
    <Text
        style={[styles.text, newTxt]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default CategoryIcon

const styles = StyleSheet.create({
    icon:{

    },
    categoriesIcon:{
        margin: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        color:'#00BBD3'
    }

})
