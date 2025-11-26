import React from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useGoBack } from '../utils/navigateTo';
import { Ionicons } from '@expo/vector-icons';

import OnBoardingStack from './OnBoardingStack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import ResetPassword from '../screens/ResetPassword';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

export const GradientHeader = () => (
  <LinearGradient
    colors={["#33E4DB", "#00BBD3"]}
    style={{ flex: 1 }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
)

export const BackArrow = () => {
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


const RootNavigator = () => {
  return (
      <Stack.Navigator
          initialRouteName="AppNavigator"
          screenOptions={{
            headerShown: true,
            headerTintColor: "#fff",
            headerBackground: GradientHeader,
            headerLeft: () => <BackArrow />,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 28,
              color: "#FFF",
              fontWeight: "bold",
            },
              cardStyleInterpolator:
                Platform.OS === "ios"
                  ? CardStyleInterpolators.forHorizontalIOS
                  : CardStyleInterpolators.forFadeFromRightAndroid,
          }}>
                {/* OnBoarding Screen */}
                <Stack.Screen name="OnBoardingStack" component={OnBoardingStack}
                    options={{
                        headerShown: false
                    }}/>

                {/* Welcome Screen */}
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
                options={{
                    headerShown: false
                }}/>

                {/* Auth Screens */}
                <Stack.Screen name="Sign In" component={SignIn}/>
                <Stack.Screen name="New Account" component={SignUp}/>
                <Stack.Screen name="Reset Password" component={ResetPassword}/>

                {/* Main App */}
                <Stack.Screen name='AppNavigator' component={AppNavigator}
                  options={{
                    headerShown: false,
                  }}/>

        </Stack.Navigator>
  )
}

export default RootNavigator
