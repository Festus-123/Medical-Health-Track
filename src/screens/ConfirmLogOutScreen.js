import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useReplaceNavigation } from "../utils/navigateTo";
import { useScaledStyles } from "../utils/styleHelpers";

import ButtonComponent from "../components/Button";

const ConfirmLogOut = ({ onPress }) => {
  const navigateReplace = useReplaceNavigation();
  const styles = useScaledStyles(makeStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you sure you want to Logout?</Text>

      <View style={styles.confirmBtn}>
        <ButtonComponent
          BtnStyleLeft={"#ffffff"}
          BtnStyleRight={"#ffffff"}
          title={"Cancel"}
          newStyles={{
            borderWidth: 1,
            borderColor: "#00bad3d2",
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}
          BtnTextStyle={{
            color: "#000000",
          }}
          onPress={onPress}
        />
        <ButtonComponent
          BtnStyleLeft={"#33e4db"}
          BtnStyleRight={"#00bbd3"}
          title={"Yes, Logout"}
          newStyles={{
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}
          onPress={() => navigateReplace("Sign In")}
        />
      </View>
    </View>
  );
};

export default ConfirmLogOut;

const makeStyles = ({ scaleSize }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      borderTopLeftRadius: scaleSize(50),
      borderTopRightRadius: scaleSize(50),
      zIndex: 1,
      backgroundColor: "#ffffff",
      position: "absolute",
      bottom: scaleSize(10),

      paddingVertical: scaleSize(50),
      gap: scaleSize(20),
    },
    text: {
      fontSize: scaleSize(16),
      textAlign: "center",
    },
    confirmBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "100%",
    },
  });
