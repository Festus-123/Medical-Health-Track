import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

import AppIcons from './AppIcons'

const DoctorsProfileView = ({ DoctorName, DoctorTitle, source }) => {

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
            <Text style={styles.nameTxt}> {DoctorName} </Text>
            <Text style={styles.titletxt}> {DoctorTitle} </Text>

            {/* Info, like and calendar */}
            <View style={styles.interactiveView}>
                <TouchableOpacity
                    style={styles.info}>
                        <Text style={{ color:'#00BBD3', fontSize: 16}}> info </Text>
                </TouchableOpacity>

                <View style={styles.iconView}>
                    <AppIcons IconName={'calendar-outline'} IconSize={20} iconColor={'#00BBD3'} newAppIconStyle={{
                        backgroundColor: "transparent",
                    }}/>
                    <AppIcons IconName={''} IconSize={20} iconColor={'#00BBD3'} newAppIconStyle={{
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

export default DoctorsProfileView

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
        gap: 60,
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
    }
})