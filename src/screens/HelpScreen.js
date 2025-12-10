import React from "react";
import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ScreenWrapper from "../components/ScreenWrapper";
import Profile from "../components/Profile";
import { useScaledStyles } from "../utils/styleHelpers";

const help = [
  ["Customer Service", "Website", "Whatsapp", "Facebook", "Instagram"],
  ["call", "globe", "whatsapp", "facebook", "instagram"],
];

const lists = help[0].map((title, i) => {
  return {
    title,
    i,
    iconName: help[1][i],
  };
});

const HelpScreen = () => {
  const [current, setCurrent] = useState("FAQs");
  const [active, setActive] = useState();
  const styles = useScaledStyles(makeStyles);

  const ActiveBtn = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.activeBtnArea} onPress={onPress}>
        <LinearGradient
          colors={["#33E4DB", "#00BBD3"]}
          style={styles.activeBtn}
        >
          <Text style={{ color: "#ffffff", fontSize: 20 }}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const InActiveBtn = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.InactiveBtnArea} onPress={onPress}>
        <Text style={{ color: "#000000", fontSize: 20 }}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const onClickEvent1 = () => {
    setCurrent("FAQs");

    if (current === "FAQs") {
      setActive(!active);
      // setCurrent("Services")
    }
  };

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <View style={styles.topRow}>
          {current === "FAQs" ? (
            active ? (
              <ActiveBtn title={"FAQs"} />
            ) : (
              <InActiveBtn title={"FAQs"} onPress={onClickEvent1} />
            )
          ) : null}

          {current === "FAQs" ? (
            !active ? (
              <ActiveBtn title={"Contact Us"} />
            ) : (
              <InActiveBtn title={"Contact Us"} onPress={onClickEvent1} />
            )
          ) : null}
        </View>

        <View>
          {current === "FAQs" && !active ? (
            <View style={styles.contactView}>
              {lists.map((item, index) => (
                <Profile
                  key={index}
                  title={item.title}
                  iconName={item.iconName}
                />
              ))}
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HelpScreen;

const makeStyles = ({ scaleSize }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    topRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "90%",
      marginTop: scaleSize(20),
      marginBottom: scaleSize(15),
    },
    activeBtn: {
      paddingHorizontal: scaleSize(50),
      paddingVertical: scaleSize(15),
      borderRadius: scaleSize(25),
    },
    activeBtnArea: {
      // wrapper area for active button if needed
    },
    InactiveBtnArea: {
      backgroundColor: "#ffffff",
      paddingVertical: scaleSize(15),
      paddingHorizontal: scaleSize(50),
      borderWidth: 1,
      borderColor: "#00bad3aa",
      borderRadius: scaleSize(25),
    },
    contactView: {
      gap: scaleSize(20),
    },
  });
