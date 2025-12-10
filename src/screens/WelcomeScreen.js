import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { imageSource } from "../constants/imageSource";
import { useReplaceNavigation } from "../utils/navigateTo";
import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";

import Logo from "../components/Logo";
import ButtonComponent from "../components/Button";

const WelcomeScreen = () => {
  const navigateReplace = useReplaceNavigation();

  const styles = useScaledStyles(makeStyles);

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <Logo source={imageSource.greenLogo} />
        <Text style={styles.strongTxt}>
          {" "}
          Health
          <Text style={styles.lightTxt}>Track</Text>
        </Text>

        <Text style={styles.longTxt}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eos
          ipsam possimus enim assumenda nihil nostrum. Similique iste, quia iure
          consequatur quidem, tempore alias, veritatis beatae rerum veniam autem
          deserunt?
        </Text>

        <View style={styles.ButtonArea}>
          <ButtonComponent
            title={"Sign In"}
            BtnStyleLeft={"#33E4DB"}
            BtnStyleRight={"#00BBD3"}
            onPress={() => navigateReplace("Sign In")}
          />
          <ButtonComponent
            title={"Sign Up"}
            BtnStyleLeft={"#bdd1deb1"}
            BtnStyleRight={"#bdd1deb1"}
            BtnTextStyle={{
              color: "#00BBD3",
            }}
            onPress={() => navigateReplace("New Account")}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;

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
      color: "#00BBD3",
      marginTop: scaleSize(40),
      marginBlock: scaleSize(10),
    },
    lightTxt: {
      fontWeight: "normal",
      color: "#00BBD3",
      fontSize: scaleFont(50),
    },
    longTxt: {
      textAlign: "center",
      marginHorizontal: scaleSize(10),
      marginTop: scaleSize(40),
      marginBottom: scaleSize(25),
      fontSize: scaleFont(12),
      lineHeight: scaleFont(25),
    },
    ButtonArea: {
      position: "absolute",
      bottom: "10%",
      gap: scaleSize(10),
    },
  });
