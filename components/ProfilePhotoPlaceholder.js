import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigateTo } from '../Module/NavigateTo'

const ProfilePhotoPlaceholder = ({ source, newImg, iconSIze, iconColor, newIconStyle, onPress }) => {
    const NavigateTo = useNavigateTo()

  return (
    <View
        style={styles.container}>
    <Image 
        source={source}
        style={[styles.img, newImg]}/>
    <Ionicons 
        name='pencil-outline'
        size={iconSIze}
        color={iconColor}
        onPress={() => NavigateTo('Profile Screen')}
        style={[styles.iconStyle, newIconStyle]}/>
    </View>
  )
}

export default ProfilePhotoPlaceholder

const styles = StyleSheet.create({
    img:{
        borderRadius: 100,
        width: 40,
        height: 40,
    },
    iconStyle:{
        backgroundColor: "#cdcacaff",
        width: 20,
        height: 20,
        padding: 5,
        borderRadius: 100,
        position: 'absolute',
        top: 25,
        left: 20,
        transform: [{scaleX: -1}]
    }
})
