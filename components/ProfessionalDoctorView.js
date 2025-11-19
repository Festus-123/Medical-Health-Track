import React, { useState } from 'react'
import { useNavigateTo } from '../Module/NavigateTo'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

import AppIcons from './AppIcons'
import { Ionicons } from '@expo/vector-icons'

const ProfessionalDoctorView = ({ DoctorName, DoctorTitle, source }) => {

    const NavigateTo = useNavigateTo()

    const [state, setState] =  useState(false)
    const handleLikeState = () => {
        try {
            setState(!state)
        }catch (error){
            console.error(error)
        }
    }

  return (
    <View style={styles.container}> {/* COntainer */}

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
              marginBottom: 20,
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

            {/* Info, like and calendar */}
            <View style={styles.interactiveView}>
              
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5
              }}>
                <TouchableOpacity
                    style={styles.info}
                    onPress={() => NavigateTo('Doctor Profile Screen', {
                        doctorName: DoctorName,
                        doctorTitle: DoctorTitle,
                        doctorImg: source
                    })}>
                        <Text style={{ color:'#00BBD3', fontSize: 16}}> info </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.rating}>
                        <Ionicons name='star' size={10} color={'#00BBD3'}/>
                        <Text style={{ color:'#00BBD3', fontSize: 16}}> 5 </Text>
                </TouchableOpacity>
              </View>
              
                <View style={styles.iconView}>
                    <AppIcons IconName={'calendar-outline'} IconSize={20} iconColor={'#00BBD3'} newAppIconStyle={{
                        backgroundColor: "transparent",
                    }}/>
                    <AppIcons IconName={'help'} IconSize={20} iconColor={'#00BBD3'} newAppIconStyle={{
                        backgroundColor: "transparent"
                    }}/>
                    <AppIcons IconName={ state ? 'heart' : 'heart-outline'} IconSize={20} iconColor={'#00BBD3'} newAppIconStyle={{
                        backgroundColor: "transparent"
                    }}
                    onPress={handleLikeState}/>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ProfessionalDoctorView

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
    interactiveView:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // width: "90%",
        gap: 30,
        marginTop: 10
        // paddingHorizontal: 20
    },
    iconView:{
        flexDirection: "row",
        // gap: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    info:{
        borderWidth: 1,
        width: 60,
        height: 25,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#00BBD3',
    },
    rating:{
        borderWidth: 1,
        width: 60,
        height: 25,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#00BBD3',
        flexDirection: 'row',
        gap: 5
    }
})