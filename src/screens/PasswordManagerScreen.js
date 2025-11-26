import React from "react";
import { View, StyleSheet } from "react-native";

import Input from "../components/input";
import ButtonComponent from "../components/Button";
import Link from "../components/Link";

import ScreenWrapper from "../components/ScreenWrapper";

const PasswordManagerScreen = () => {
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
          newArea={{
            marginBottom: 40,
            marginLeft: 280,
            marginTop: 5,
          }}
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
          newStyles={{
            marginTop: 200,
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default PasswordManagerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
});
