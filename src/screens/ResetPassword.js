import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigateTo } from "../utils/navigateTo";

import ScreenWrapper from "../components/ScreenWrapper";
import Input from "../components/input";
import ButtonComponent from "../components/Button";

const ResetPassword = () => {
  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <Text
          style={{
            width: 380,
            marginTop: 20,
            marginBottom: 50,
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eos
          ipsam possimus enim assumenda nihil nostrum. Similique iste, quia iure
        </Text>

        <Input
          label={"Password"}
          placeholder={"********"}
          IconName={"eye"}
          IconSize={20}
          Bool={true}
          instruction={"password must be at lest * characters"}
        />

        <Input
          label={"Confirm Password"}
          placeholder={"********"}
          IconName={"eye"}
          IconSize={20}
          Bool={true}
          instruction={"password must be the same"}
        />

        <ButtonComponent
          title={"Create New Password"}
          BtnStyleLeft={"#33E4DB"}
          BtnStyleRight={"#00BBD3"}
          newBtnArea={{
            marginTop: 80,
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
