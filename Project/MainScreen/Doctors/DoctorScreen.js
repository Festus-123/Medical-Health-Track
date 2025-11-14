import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'

import DoctorsProfileView from '../../../components/DoctorsProfileView'
import Dropdown from '../../../components/Dropdown'
import { imageSource } from '../../../components/vectors'


const DoctorScreen = () => {
  return (
    <View>
        <Dropdown 
            seeAll={'Ratings'}
            />
        <ScrollView>
            <DoctorsProfileView 
                DoctorName={'Dr. FatherLord'}
                DoctorTitle={'inter'}
                source={imageSource.MaleDoctor}/>
        </ScrollView>
    </View>
  )
}

export default DoctorScreen

const styles =  StyleSheet.create({

})