import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigateTo } from "../utils/navigateTo";
import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";
import Profile from "../components/Profile";

const SettingsScreen = () => {
  const navigateTo = useNavigateTo();

  const styles = useScaledStyles(makeStyles);

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <Profile
          iconName={"bulb-outline"}
          title={"Notification Setting"}
          onPress={() => navigateTo("Notification Settings Screen")}
        />
        <Profile
          iconName={"key-outline"}
          title={"Password Manager"}
          onPress={() => navigateTo("Password Manager Screen")}
        />
        <Profile iconName={"person-outline"} title={"Delete Account"} />
      </View>
    </ScreenWrapper>
  );
};

export default SettingsScreen;

const makeStyles = ({ scaleSize }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: scaleSize(20),
      gap: scaleSize(20),
      padding: scaleSize(10),
    },
  });
