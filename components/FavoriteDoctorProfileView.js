import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const FavoriteDoctorProfileView = ({ source, DoctorName, DoctorTitle, onPress }) => {
  return (
    <View style={styles.container}>

      {/* profile photo  */}
        <Image 
            style={styles.img}
            source={source}/>

        {/* Name section */}
        <View style={styles.textArea}>

            <View style={{
              flexDirection: 'row',
              alignItems: " center",
              gap: 5,
              marginBottom: 10,
              // justifyContent: "center"
            }}>
              <Ionicons name='medal-outline' size={14} color={'#ffffff'} style={{
                backgroundColor: "#00BBD3",
                borderRadius: 50,
                padding: 2,
                alignItems: "center",

                width: 20,
                height: 20
              }} />
              <Text>Professional Doctor</Text>
            </View>

            <Text style={styles.nameTxt}> {DoctorName} </Text>
            <Text style={styles.titletxt}> {DoctorTitle} </Text>

            <View>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.gradientArea}>
                    <LinearGradient
                        colors={['#33E4DB', '#00BBD3']}
                        style={styles.gradient}>
                        <Text style={{ color: 'white'}}>Make Appointment</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default FavoriteDoctorProfileView

const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: '#00bad374',
        paddingBottom: 20,
        marginTop: 20
        // justifyContent: "center"
    },
    img:{
        width: 110,
        height: 110
    },
    textArea:{
        justifyContent: "center",
        marginTop: 10
    },
    nameTxt:{
        color: '#00BBD3',
        fontSize: 16
    },
    titletxt:{
        fontWeight: "normal"
    },
    gradient:{
        paddingVertical: 5,
        paddingHorizontal: 70,
        borderRadius: 25,
        marginTop: 10
    }
})