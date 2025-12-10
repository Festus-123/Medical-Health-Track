import React from "react";
import { View, StyleSheet, Text } from "react-native";

import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";
import Toggle from "../components/Toggle";

const ToggleSettings = ({ title }) => {
    const styles = useScaledStyles(makeStyles);
  return (
    <View style={styles.toggleSettings}>
    <Text style={styles.text}>{title}</Text>
    <Toggle />
  </View>
  )
};


const NotificationSettingsScreen = () => {
  const styles = useScaledStyles(makeStyles); 
  
  return (
    // <ScreenWrapper scroll>
      <View style={styles.container}>
        <ToggleSettings title={"General notification"} />
        <ToggleSettings title={"Sound"} />
        <ToggleSettings title={"Sound Call"} />
        <ToggleSettings title={"Vibrate"} />
        <ToggleSettings title={"Special Offers"} />
        <ToggleSettings title={"Payments"} />
        <ToggleSettings title={"Promo and Discount"} />
        <ToggleSettings title={"Cashback"} />
      </View>
    // </ScreenWrapper>
  );
};

export default NotificationSettingsScreen;

const makeStyles = ({ scaleSize, scaleFont }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: scaleSize(10),
      gap: scaleSize(20),
    },
    toggleSettings: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      alignItems: "center",
    },
    text: {
      fontSize: scaleFont(20),
    },
  });
