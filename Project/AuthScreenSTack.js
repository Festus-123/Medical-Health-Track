import { StyleSheet, Platform, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"
import { useGoBack } from "../Module/NavigateTo"
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import SignIn from './AuthScreens/sign-in'
import SignUp from './AuthScreens/sign-up'
import ResetPassword from './AuthScreens/ResetPassword'
import WelcomeScreen from './WelcomeScreen'
import { NavigationIndependentTree } from "@react-navigation/native"

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



const AuthScreenSTack = () => {

  return (

    <Stack.Navigator
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
                  : CardStyleInterpolators.forFadeFromRightAndroid,}}>

        {/* Auth Screens */}
        <Stack.Screen name="Sign In" component={SignIn}/>
        <Stack.Screen name="New Account" component={SignUp}/>
        <Stack.Screen name="Reset Password" component={ResetPassword}/>

          {/* Welcome Screen */}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
          options={{
            headerShown: false
          }}/>
    </Stack.Navigator>
  )
}

export default AuthScreenSTack

const styles = StyleSheet.create({

})
