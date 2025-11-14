import React from 'react'
import { View, StyleSheet, Text, } from 'react-native'

import Dropdown from './Dropdown'

function Appointment ({ newAppointment }){
    return (
        <View
            style={[ styles.appointment, newAppointment, {
                marginVertical: 5,
                marginRight: 35,
                width: "80%",
                paddingBottom: 10
            }]}>
            <Text style={{
                color: "#fff",
                fontSize: 20,
                textAlign: "left"
            }}> {'\u2022'} 11 Month - Wednesday - Today</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    marginRight: 40,
                    marginLeft: 15
                    
                }}>
                <Text style={{ color: "#fff", fontSize: 20, }}>10:00am</Text>
                <Text style={{ color: "#fff", fontSize: 20}}>Dr. Olivia Turner</Text>
            </View>
        </View>
    )
}

const AppointmentTable = () => {
  return (
    <View
        style={styles.container}>
        <Dropdown 
            seeAll={'See all'}
            newStyles={{
                width: "90%"
            }}/>
            <Appointment 
                newAppointment={{
                    borderBottomWidth: 1,
                    borderColor: "#fff"
                }}/>
            <Appointment />
    </View>
  )
}

export default AppointmentTable

const styles = StyleSheet.create({
    container:{
        width: 350,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 20,
        alignSelf: "center",
        marginTop: 20,

        alignItems: "center",
        justifyContent: "center"
    }
})