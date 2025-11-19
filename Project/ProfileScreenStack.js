import React from 'react'
import { View, } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { imageSource } from '../components/vectors';
import { LinearGradient } from 'expo-linear-gradient';
import { useGoBack } from '../Module/NavigateTo';

import ProfileScreen from './ProfileStack/ProfileScreen';
import ProfilePhotoPlaceholder from '../components/ProfilePhotoPlaceholder';

const GradientHeader = () => (
  <LinearGradient
    colors={["#33E4DB", "#00BBD3"]}
    style={{ flex: 1 }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
)

const BackArrow = () => {
  const goBack = useGoBack()

  return (
  <TouchableOpacity
  onPress={goBack}
   style={{
    paddingHorizontal: 15
   }}>
  <Ionicons 
    name="chevron-back"
    size={28}
    color={'#fff'}/>
    </TouchableOpacity>
)}

const HeaderPlugin = () => {
    return (
        <View>
            <ProfilePhotoPlaceholder 
                source={imageSource.ProfilePhoto}
                newImg={{
                    width: 150,
                    height: 150
                }}/>

            <View>

            </View>
        </View>
    )
}

const Stack = createStackNavigator();

const ProfileScreenStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Profile Screen'
        screenOptions={{
            headerShown: true,
            headerLeft: () => <BackArrow />,
            headerLeftContainerStyle: {
                
            },
            headerTitle: () => <HeaderPlugin />,
            headerStyle: {
                height: 250
            },
            headerBackground: GradientHeader
        }}>
        <Stack.Screen name='Profile Screen' component={ProfileScreen}/>
    </Stack.Navigator>
  )
}

export default ProfileScreenStack
