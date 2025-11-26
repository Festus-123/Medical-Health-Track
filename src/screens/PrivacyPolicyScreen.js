import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";

const PrivacyPolicyScreen = () => {
  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: "bold",
            marginVertical: 10,
            width: "90%",
          }}
        >
          last update: 14/08/2024
        </Text>

        <Text
          style={{
            lineHeight: 20,
            marginVertical: 10,
            width: "90%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
          diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a
          scelerisque neque, sed accumsan metus.
        </Text>

        <Text
          style={{
            lineHeight: 20,
            marginVertical: 10,
            width: "90%",
          }}
        >
          Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt.
          Aenean arcu metus, bibendum at rhoncus at, volutpat ut lacus. Morbi
          pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim
          vel neque auctor, a ultrices ex placerat. Mauris ut lacinia justo, sed
          suscipit tortor. Nam egestas nulla posuere neque tincidunt porta.
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            color: "#00BBD3",
            fontSize: 20,
            width: "90%",
            marginVertical: 5,
          }}
        >
          Terms and Condition
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            1
          </Text>
          <Text
            style={{
              fontWeight: "normal",
              lineHeight: 20,
              width: "90%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
            diam quam. Aenean in sagittis magna, ut feugiat diam.{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            1
          </Text>
          <Text
            style={{
              fontWeight: "normal",
              lineHeight: 20,
              width: "90%",
            }}
          >
            Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
            eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
            nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
            rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
            rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi
            tellus.{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            1
          </Text>
          <Text
            style={{
              fontWeight: "normal",
              lineHeight: 20,
              width: "90%",
            }}
          >
            Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
            eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
            nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
            rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
            rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi
            tellus ac turpis.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            1
          </Text>
          <Text
            style={{
              fontWeight: "normal",
              lineHeight: 20,
              width: "90%",
            }}
          >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    padding: 10,
  },
});
