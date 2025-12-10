import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { imageSource } from "../constants/imageSource";

import Logo from "../components/Logo";
import { useScaledStyles } from "../utils/styleHelpers";

const SplashScreen = () => {
  const styles = useScaledStyles(makeStyles);

  return (
    <LinearGradient colors={["#33E4DB", "#00BBD3"]} style={styles.container}>
      <Logo source={imageSource.whiteLogo} />
      <Text style={styles.strongTxt}>
        {" "}
        Health
        <Text style={styles.lightTxt}>Track</Text>
      </Text>
    </LinearGradient>
  );
};

export default SplashScreen;

const makeStyles = ({ scaleSize, scaleFont }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    strongTxt: {
      fontWeight: "900",
      fontSize: scaleFont(50),
      color: "white",
      gap: scaleSize(10),
      marginTop: scaleSize(20),
    },
    lightTxt: {
      fontWeight: "normal",
    },
  });
