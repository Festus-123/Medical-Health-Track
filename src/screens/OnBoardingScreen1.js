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

const OnBoardingScreen = ({ page }) => {
  const navigateReplace = useReplaceNavigation();
  const navigateTo = useNavigateTo();
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
            source={imageSource.ChooseYourDoctor}
            svg={{
              position: "absolute",
              right: 30,
              top: 25,
              width: 300,
            }}
          />
        </View>

        <Text style={styles.strongText}>Choose Your Doctor</Text>

        <Text style={styles.longText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eos
          ipsam possimus enim assumenda nihil nostrum. Similique iste, quia iure
          consequatur quidem, tempore alias, veritatis beatae rerum veniam autem
          deserunt?
        </Text>

        <View style={styles.scrollView}>
          <ScrollEffect />
          <ScrollEffect
            Scroll={{
              backgroundColor: "#bdd1deb1",
            }}
          />
          <ScrollEffect
            Scroll={{
              backgroundColor: "#bdd1deb1",
            }}
          />
        </View>

        <GradientLook
          gradient={{
            width: 400,
            height: 400,
            position: "absolute",
            bottom: 45,
            borderRadius: 200,
          }}
        />

        <ButtonComponent
          title={"Next"}
          BtnStyleLeft={"#00BBD3"}
          BtnStyleRight={"#00BBD3"}
          BtnTextStyle={{
            color: "#fff",
          }}
          onPress={() => navigateTo("OnBoardingScreen2")}
        />
      </View>
    </ScreenWrapper>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  Svg: {
    marginBottom: 50,
    position: "relative",
    // top: "-10%"
  },
  strongText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#13CAD6",
    marginBottom: 50,
    width: 300,
    textAlign: "center",
  },
  longText: {
    textAlign: "center",
    marginHorizontal: 10,
    // marginTop: 40,
    marginBottom: 50,
    fontSize: 12,
    lineHeight: 25,
  },
  scrollView: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 50,
  },
});
