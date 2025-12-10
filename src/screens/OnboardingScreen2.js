import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { imageSource } from "../constants/imageSource";
import { useNavigateTo, useReplaceNavigation } from "../utils/navigateTo";

import Logo from "../components/Logo";
import GradientLook from "../components/GradientLook";
import ScrollEffect from "../components/ScrollEffect";
import ButtonComponent from "../components/Button";
import Escape from "../components/Escape";

import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";
import { useResponsive } from "../utils/responsive";

const OnBoardingScreen2 = ({ page }) => {
  const navigateReplace = useReplaceNavigation();
  const navigateTo = useNavigateTo();
  const styles = useScaledStyles(makeStyles);
  const { scaleSize } = useResponsive();

  return (
    <ScreenWrapper scroll>
      <View style={[styles.container, page]}>
        <Escape
          iconName={"chevron-forward"}
          iconSize={25}
          text={"skip"}
          escapeOption={{
            position: "absolute",
            top: 40,
            right: 0,
          }}
          onPress={() => navigateReplace("WelcomeScreen")}
        />

        <View style={styles.Svg}>
          <GradientLook gradient={{}} />
          <Logo
            source={imageSource.ScheduleYourAppointments}
            svg={{
              position: "absolute",
              right: 25,
              top: 25,
              width: 300,
            }}
          />
        </View>

        <Text style={styles.strongText}>Schedule Your Appointments</Text>

        <Text style={styles.longText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eos
          ipsam possimus enim assumenda nihil nostrum. Similique iste, quia iure
          consequatur quidem, tempore alias, veritatis beatae rerum veniam autem
          deserunt?
        </Text>

        <View style={styles.scrollView}>
          <ScrollEffect
            Scroll={{
              backgroundColor: "#bdd1deb1",
            }}
          />

          <ScrollEffect />

          <ScrollEffect
            Scroll={{
              backgroundColor: "#bdd1deb1",
            }}
          />
        </View>

        <GradientLook
          gradient={{
            width: scaleSize ? scaleSize(400) : 400,
            height: scaleSize ? scaleSize(400) : 400,
            position: "absolute",
            bottom: scaleSize ? scaleSize(45) : 45,
            borderRadius: scaleSize ? scaleSize(200) : 200,
          }}
        />

        <ButtonComponent
          title={"Next"}
          BtnStyleLeft={"#00BBD3"}
          BtnStyleRight={"#00BBD3"}
          BtnTextStyle={{
            color: "#fff",
          }}
          onPress={() => navigateTo("OnBoardingScreen3")}
        />
      </View>
    </ScreenWrapper>
  );
};

export default OnBoardingScreen2;

const makeStyles = ({ scaleSize, scaleFont }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    Svg: {
      marginBottom: scaleSize(50),
      position: "relative",
    },
    strongText: {
      fontSize: scaleFont(40),
      fontWeight: "bold",
      color: "#13CAD6",
      marginBottom: scaleSize(50),
      width: "90%",
      textAlign: "center",
    },
    longText: {
      textAlign: "center",
      marginHorizontal: scaleSize(10),
      marginBottom: scaleSize(50),
      fontSize: scaleFont(12),
      lineHeight: scaleFont(25),
    },
    scrollView: {
      flexDirection: "row",
      gap: scaleSize(10),
      marginBottom: scaleSize(50),
    },
  });
