import React from "react";
import { View, StyleSheet, Text } from "react-native";

import ScreenWrapper from "../components/ScreenWrapper";
import Toggle from "../components/Toggle";

const ToggleSettings = ({ title }) => (
  <View style={styles.toggleSettings}>
    <Text style={styles.text}>{title}</Text>
    <Toggle />
  </View>
);

const NotificationSettingsScreen = () => {
  return (
    <ScreenWrapper scroll>
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
    </ScreenWrapper>
  );
};

export default NotificationSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    gap: 30,
  },
  toggleSettings: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
