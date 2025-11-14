import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity,  } from 'react-native'

const Dropdown = ({ sectionTitle, seeAll, newStyles, newTxt, onPress }) => {
  return (
    <View
    style={[styles.dropdownSectionStyle, newStyles]}>
    <Text style={[styles.text, newTxt]}>{sectionTitle}</Text>
    <TouchableOpacity
        style={styles.seeAllArea}
        onPress={onPress}>
    <Text style={[styles.text, newTxt]}>{seeAll}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Dropdown

const styles = StyleSheet.create({
    dropdownSectionStyle:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        borderBottomWidth: 1,
        borderColor: "#fff",
        paddingBottom: 5,
        paddingHorizontal: 15,
        marginTop: 10
    },
    text:{
        color: "#fff",
        fontSize: 16    
    }
})
