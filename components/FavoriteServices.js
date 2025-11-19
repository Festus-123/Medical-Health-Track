import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'


const FavoriteServices = ({ text }) => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
  return (
    <View style={styles.container}>

            <LinearGradient
                colors={['#33E4DB', '#00BBD3']}
                style={styles.gradient}>
                <View style={{
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 5
                }}>
                <Ionicons name='heart' color={'#ffffff'} size={20}/>
                <Text style={{
                    fontSize: 20,
                    color: "#ffffff"
                }}>{text}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => handleClick()}>
                <Ionicons name={click ? 'chevron-down' : "chevron-forward"} size={24} color={'#ffffff'}/>
                </TouchableOpacity>
            </LinearGradient>

            <View style={click ? styles.serviceInfo : styles.hide}>
                <Text style={{
                    padding: 15,
                    backgroundColor: "#33e4db29",
                    borderRadius: 25,
                    lineHeight: 25,
                    
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent pellentesque congue lorem, vel tincidunt tortor 
                    placerat a. Proin ac diam quam. Aenean in sagittis magna, ut 
                    feugiat diam.
                </Text>
                
                <View style={{
                    backgroundColor: "#33e4db29",
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    borderRadius: 25
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: 'center'
                    }}>Looking Doctors</Text>
                </View>
                
            </View>
    </View>
  )
}

export default FavoriteServices

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',

    },
    gradient:{
        width: "90%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 25
    },
    serviceInfo:{
        display: "block",
        width: "90%",
        padding: 10,
        gap: 15
    },
    hide:{
        display: "none",
    }
})