import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useReplaceNavigation } from "../utils/navigateTo";

import ButtonComponent from "../components/Button";

const ConfirmLogOut = ({ onPress }) => {
  const navigateReplace = useReplaceNavigation();
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 1,
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 10,

    paddingVertical: 50,
    gap: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  confirmBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
});
