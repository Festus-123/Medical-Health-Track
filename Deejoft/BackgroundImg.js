import React from 'react'
import { View, StyleSheet, ImageBackground, TextInput, Dimensions, StatusBar } from 'react-native'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const BackgroundImg = () => {
  return (
    <View>
        <ImageBackground 
        source={require('./assets/photo.jpg')}
        resizeMethod='stretch'
        style={styles.img}/>

        <StatusBar backgroundColor={"auto"} />
        <TextInput 
        placeholder='Image Background'
        style={styles.input}/>
    </View>
  )
}

export default BackgroundImg

const styles = StyleSheet.create({
    img:{
        height: screenHeight,
        width: screenWidth,
        justifyContent: "center",
        alignItems: "center",

    },
    input:{
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 2,
        backgroundColor: "#fff",
        position: "absolute",
        top: "50%",
        // left: "30%",
        flexWrap: "wrap"
    }
})
