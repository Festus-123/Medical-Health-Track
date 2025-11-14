import React from "react"
import { StyleSheet, Platform, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"
import { useGoBack, useNavigateTo } from "./Module/NavigateTo"
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../travel/Project/SplashScreen"
import WelcomeScreen from "./Project/WelcomeScreen"
import OnBoardingStack from "./Project/OnBoardingStack"
// import AuthScreenSTack from "./Project/AuthScreenSTack"
import SignIn from "./Project/AuthScreens/sign-in"
import SignUp from "./Project/AuthScreens/sign-up"
import ResetPassword from "./Project/AuthScreens/ResetPassword"

import SpecialtiesScreenStack from "./Project/HomeScreenStack"

// main screens
import MainScreenTab from "./Project/MainScreenTab"

const Stack = createStackNavigator()

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


export default function App () {

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
          initialRouteName="OnBoardingStack"
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

        <Stack.Screen name="SplashScreen" component={SplashScreen}
          options={{
            headerShown: false
          }}/>

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


        <Stack.Screen  name="Main Screens" component={MainScreenTab}
          options={{
            headerShown: false
          }}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
  }
})