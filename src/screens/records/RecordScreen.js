import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { imageSource } from "../../constants/imageSource";
import { useNavigateTo } from "../../utils/navigateTo";
import ScreenWrapper from "../../components/ScreenWrapper";
import ButtonComponent from "../../components/Button";

const RecordScreen = () => {
  const NavigateTo = useNavigateTo();
  return (
    <ScreenWrapper scroll={true}>
      <View style={styles.container}>
        <Image source={imageSource.HugeRecordIcon} style={styles.img} />

        <Text style={styles.text}>
          You Have Not Added Any Medical Records Yet
        </Text>

        <ButtonComponent
          title={"AddRecord"}
          BtnStyleLeft={"#33e4db"}
          BtnStyleRight={"#00bbd3"}
          onPress={() => NavigateTo("Add Record Screen")}
        />
      </View>
    </ScreenWrapper>
  );
};

export default RecordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  img: {
    width: 150,
    height: 230,
  },
  text: {
    fontSize: 40,
    flexWrap: "wrap",
    width: 280,
    textAlign: "center",
    color: "#00bbd3",
    fontWeight: "bold",
    marginVertical: 50,
  },
});
