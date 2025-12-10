import React from "react";
import { View, StyleSheet } from "react-native";

import Input from "../components/input";
import ButtonComponent from "../components/Button";
import Link from "../components/Link";

import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";

const PasswordManagerScreen = () => {
  const styles = useScaledStyles(makeStyles);

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <Input
          label={"Current Password"}
          placeholder={"********"}
          IconName={"eye-off-outline"}
          IconSize={20}
          Bool={true}
        />

        <Link
          title={"Forget Password?"}
          // onPress={() => navigateTo('Reset Password')}
          newArea={styles.forgetLink}
        />

        <Input
          label={"New password"}
          placeholder={"********"}
          IconName={"eye-off-outline"}
          IconSize={20}
          Bool={true}
        />

        <Input
          label={"Confirm password"}
          placeholder={"********"}
          IconName={"eye-off-outline"}
          IconSize={20}
          Bool={true}
        />

        <ButtonComponent
          title={"Change Password"}
          BtnStyleLeft={"#33e4db"}
          BtnStyleRight={"#00bbd3"}
          newStyles={styles.changeBtn}
        />
      </View>
    </ScreenWrapper>
  );
};

export default PasswordManagerScreen;

const makeStyles = ({ scaleSize }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: scaleSize(20),
      gap: scaleSize(10),
    },
    forgetLink: {
      marginBottom: scaleSize(40),
      marginLeft: "auto",
      marginTop: scaleSize(5),
    },
    changeBtn: {
      marginTop: scaleSize(200),
    },
  });
