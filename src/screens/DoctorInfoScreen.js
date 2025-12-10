import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";

const DoctorInfoScreen = ({ route }) => {
  const { doctorName, doctorTitle, doctorImg } = route.params;

  const styles = useScaledStyles(makeStyles);

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <View style={styles.focusView}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            focus:
            <Text
              style={{
                fontWeight: "normal",
                lineHeight: 30,
              }}
            >
              The impact of hormonal imbalances on skin conditions, specializing
              in acne, hirsutism, and other skin disorders.
            </Text>
          </Text>
        </View>

        <Text
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#00bad326",
            paddingVertical: 10,

            color: "#00BBD3",
            fontSize: 20,
            width: "80%",
            marginTop: 10,
          }}
        >
          Profile
        </Text>

        <Text
          style={{
            width: "80%",
            lineHeight: 20,
            marginTop: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Text
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#00bad326",
            paddingVertical: 10,

            color: "#00BBD3",
            fontSize: 20,
            width: "80%",
            marginTop: 10,
          }}
        >
          Career Path
        </Text>

        <Text
          style={{
            width: "80%",
            lineHeight: 20,
            marginTop: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Text
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#00bad326",
            paddingVertical: 10,

            color: "#00BBD3",
            fontSize: 20,
            width: "80%",
            marginTop: 10,
          }}
        >
          Highlight
        </Text>

        <Text
          style={{
            width: "80%",
            lineHeight: 20,
            marginTop: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default DoctorInfoScreen;

const makeStyles = ({ scaleSize }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    focusView: {
      width: "90%",
      padding: scaleSize(15),
      margin: scaleSize(20),
      marginTop: scaleSize(40),
      backgroundColor: "#E9F6FE",
      borderRadius: scaleSize(25),
    },
  });
