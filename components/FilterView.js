import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity,  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const FIlterView = ({ seeAll, newStyles, newTxt, onPress, filterAction, alphabeticalFIlterAction, alphabethArrange }) => {
  return (
    <View
        style={[styles.filterView, newStyles]}>

        <View 
            style={{
                flexDirection: "row",
                gap: 20
            }}>
            <Text style={[styles.text, newTxt]}>Sort by</Text>
            <TouchableOpacity
                style={styles.alphabeticalFIlter}
                onPress={alphabeticalFIlterAction}>
                    <LinearGradient
                        colors={['#33E4DB', '#00BBD3']}
                        style={{
                            borderRadius: 20,
                            width: 50,
                            height: 20,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Text style={{ color: "#ffff"}}>{alphabethArrange}</Text>
                    </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.filter}
                onPress={filterAction}>
                    <View
                        style={{
                            width: 50,
                            height: 20,
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#33E4DB',
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Text style={{ color: '#00BBD3'}}> filter</Text>
                    </View>
            </TouchableOpacity>

        </View>

        <TouchableOpacity
            onPress={onPress}
            style={{
                // alignSelf: "right"
            }}>
            <Text style={{ color: '#00BBD3', fontSize: 16}}>{seeAll}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FIlterView

const styles = StyleSheet.create({
    filterView:{
        flexDirection: "row",
        // gap: 20,
        justifyContent: "space-between",
        width: "90%",
        borderBottomWidth: 1,
        borderColor:'#00bad35c',
        paddingBottom: 5,
        paddingHorizontal: 15,
        // marginTop: 10
        marginBottom: 10
    },
    text:{
        color: '#00BBD3',
        fontSize: 16    
    }
})
