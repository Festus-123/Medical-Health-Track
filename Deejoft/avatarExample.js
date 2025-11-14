import React from 'react'
import { View, StyleSheet, Text } from "react-native"

import { Avatar } from 'react-native-paper'

const AvatarExample = () => {
  return (
    <View style={styles.container}>
        <Avatar.Icon  size={100} icon='coffee'/>
        {/* <Text style={styles.text}>Avatar icon example</Text> */}

        <Avatar.Icon  size={100} icon='table'/>
        {/* <Text style={styles.text}>Avatar icon example</Text> */}

        <Avatar.Icon  size={100} icon='slide'/>
        {/* <Text style={styles.text}>Avatar icon example</Text> */}

        <Avatar.Image size={100} source={require('./assets/aero.jpg')} />
        {/* <Text style={styles.text}> Avatar Image Example</Text> */}

        <Avatar.Text size={100} label='GLE' />
        {/* <Text style={styles.text}>Avatar Text Example</Text> */}
    </View>
  )
}

export default AvatarExample

const styles = StyleSheet.create({
    container:{
        marginVertical: 50,
        marginHorizontal: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 30
    },
    text:{
        marginBottom: 20,
        fontSize: 20
    }
})
