import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";

const PrivacyPolicyScreen = () => {
  const styles = useScaledStyles(makeStyles);

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <Text style={styles.updateText}>last update: 14/08/2024</Text>

        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
          diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a
          scelerisque neque, sed accumsan metus.
        </Text>

        <Text style={styles.bodyText}>
          Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt.
          Aenean arcu metus, bibendum at rhoncus at, volutpat ut lacus. Morbi
          pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim
          vel neque auctor, a ultrices ex placerat. Mauris ut lacinia justo, sed
          suscipit tortor. Nam egestas nulla posuere neque tincidunt porta.
        </Text>

        <Text style={styles.sectionTitle}>Terms and Condition</Text>

        <View style={styles.row}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            1
          </Text>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
            diam quam. Aenean in sagittis magna, ut feugiat diam.{" "}
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            2
          </Text>
          <Text style={styles.bodyText}>
            Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
            eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
            nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
            rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
            rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi
            tellus.{" "}
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            3
          </Text>
          <Text style={styles.bodyText}>
            Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
            eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
            nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
            rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
            rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi
            tellus ac turpis.
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            4
          </Text>
          <Text style={styles.bodyText}>
            Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
            eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
            nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
            rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
            rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi
            tellus ac turpis.
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PrivacyPolicyScreen;

const makeStyles = ({ scaleSize, scaleFont }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: scaleSize(10),
      padding: scaleSize(5),
    },
    updateText: {
      fontWeight: "bold",
      marginVertical: scaleSize(10),
      width: "90%",
    },
    bodyText: {
      lineHeight: scaleFont(20),
      marginVertical: scaleSize(0),
      width: "90%",
    },
    sectionTitle: {
      fontWeight: "bold",
      color: "#00BBD3",
      fontSize: scaleFont(20),
      width: "90%",
      marginVertical: scaleSize(5),
    },
    row: {
      flexDirection: "row",
      gap: scaleSize(5),
      marginVertical: scaleSize(10)
    },
  });
