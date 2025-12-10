import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigateTo } from "../utils/navigateTo";

import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";
import Input from "../components/input";
import ButtonComponent from "../components/Button";

const ResetPassword = () => {
  const styles = useScaledStyles(makeStyles);

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <Text style={styles.longText}>
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

const makeStyles = ({ scaleSize }) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    longText: {
      width: "100%",
      marginTop: scaleSize(20),
      marginBottom: scaleSize(50),
    },
  });
