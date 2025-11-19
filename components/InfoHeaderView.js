import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { imageSource } from './vectors'

const InfoHeaderView = ({ source, name, title, rateCount, messageCount, experienceCount }) => {
  return (
    <View style={styles.container}>

        {/* icon view */}
        <View style={styles.iconView}>
            <View 
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1
                }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        width: 100,
                        padding: 5,
                        borderRadius: 25,
                        flexDirection: 'row',
                        alignItems:"center"
                    }}>
                    <Ionicons name='calendar-outline' size={20} color={'#00BBD3'}/>
                    <Text> Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        // width: 150,
                        padding: 5,
                        borderRadius: 25,
                        flexDirection: "row",
                        gap: 2
                    }}>
                    <Ionicons name='call' size={20} color={'#00BBD3'}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        // width: 150,
                        padding: 5,
                        borderRadius: 25
                    }}>
                    <Ionicons name='videocam' size={20} color={'#00BBD3'}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        // width: 150,
                        padding: 5,
                        borderRadius: 25
                    }}>
                    <Ionicons name='chatbubbles-outline' size={20} color={'#00BBD3'}/>
                </TouchableOpacity>
            </View>

            <View 
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2
                }}>
                <TouchableOpacity
                    style={{
                        borderRadius: 25,
                        padding: 5,
                        borderWidth: 1,
                        borderColor: "#ffffff4c"
                    }}>
                    <Ionicons name='help' size={20} color={'#ffffff'}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        borderRadius: 25,
                        padding: 5,
                        borderWidth: 1,
                        borderColor: "#ffffff4c"
                    }}>
                    <Ionicons name='heart-outline' size={20} color={'#ffffff'}/>
                </TouchableOpacity>
            </View>

        </View>

        {/* Profile picture and name details View */}
        <View style={styles.profileView}>
        <Image 
            source={source}
            style={styles.img}/>

            <View
                style={{
                    justifyContent: "center",
                    
                }}>
                <Text style={{ color: "white"}}>{name}</Text>
                <Text style={{ color: "white"}}>{title}</Text>

                <View 
                    style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        gap: 10
                    }}>
                    <TouchableOpacity
                        style={{
                            width: 50,
                            backgroundColor: "white",
                            padding: 5,
                            borderRadius: 25,
                            flexDirection: 'row',
                            gap: 5,
                            alignItems: 'center'
                        }}>
                            <Ionicons name='star' size={10} color={'#00BBD3'}/>
                            <Text>{rateCount}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 50,
                            backgroundColor: "white",
                            padding: 5,
                            borderRadius: 25,
                            flexDirection: "row",
                            gap: 5,
                            alignItems: "center"
                        }}>
                            <Ionicons name='notifications-outline' size={10} color={'#00BBD3'}/>
                            <Text>{messageCount}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        {/* Experience and schedule View */}
        <View style={styles.experienceView}>
            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: "#00bad385",
                    borderRadius: 50,
                    flexDirection: 'row',
                    alignItems: "center",
                    padding: 10,
                    gap: 5  
                }}>
                <Ionicons name='medal-outline' size={20} color={'#00BBD3'}/>
                <Text style={{ width: 70, flexWrap: "wrap"}}>{experienceCount} years Experience</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: "#00bad385",
                    borderRadius: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    gap: 5
                }}>
                <Ionicons name='calendar-outline' size={20} color={'#00BBD3'}/>
                <Text>Mon - Sat / 9:00AM - 5:00PM</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default InfoHeaderView

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    iconView:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        width: "100%",
        padding: 10,
        marginTop: 10
    },
    profileView:{
        width: "90%",
        flexDirection: 'row',
        gap: 20,
        marginTop: 20
    },
    experienceView:{
        flexDirection: 'row',
        marginTop: 30,
        width: "100%"
    }
})