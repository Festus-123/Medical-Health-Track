import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import OnBoardingScreen from "../screens/OnBoardingScreen1";
import OnBoardingScreen2 from "../screens/OnboardingScreen2";
import OnBoardingScreen3 from "../screens/OnBoardingScreen3";

const Stack = createStackNavigator();

const OnBoardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator:
          Platform.OS === "ios"
            ? CardStyleInterpolators.forHorizontalIOS
            : CardStyleInterpolators.forFadeFromRightAndroid,
      }}
    >
      <Stack.Screen name="OnBoardingScreen1" component={OnBoardingScreen} />
      <Stack.Screen name="OnBoardingScreen2" component={OnBoardingScreen2} />
      <Stack.Screen name="OnBoardingScreen3" component={OnBoardingScreen3} />
    </Stack.Navigator>
  );
};

export default OnBoardingStack;
