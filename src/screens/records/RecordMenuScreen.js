import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, Text } from "react-native";

import ScreenWrapper from "../../components/ScreenWrapper";
import RecordScreen from "./RecordScreen";
import AvatarIcon from "../../components/AvatarIcon";
import { imageSource } from "../../constants/imageSource";

const RecordMenuScreen = () => {
  const dispatch = useDispatch();
  const bloodType = useSelector((state) => state.record.bloodType);
  const { gender, age, weight, height } = useSelector((state) => state.record);

  return (
    <ScreenWrapper scroll={true}>
      <View style={styles.container}>
        {bloodType === "" ? (
          <RecordScreen />
        ) : (
          <View style={styles.container}>
            <View style={styles.records}>
              <Text style={styles.text}>
                Gender:{" "}
                <Text style={{ color: "#00bbd3", paddingHorizontal: 5 }}>
                  {gender}
                </Text>{" "}
              </Text>
              <Text style={styles.text}>
                Blood Type:{" "}
                <Text style={{ color: "#00bbd3", paddingHorizontal: 10 }}>
                  {bloodType}
                </Text>{" "}
              </Text>
            </View>

            <View style={styles.records}>
              <Text style={styles.text}>
                Age:{" "}
                <Text style={{ color: "#00bbd3", paddingHorizontal: 5 }}>
                  {age}
                </Text>{" "}
              </Text>
              <Text style={styles.text}>
                Weight:{" "}
                <Text style={{ color: "#00bbd3", paddingHorizontal: 10 }}>
                  {weight}
                </Text>{" "}
              </Text>
            </View>

            <View style={styles.recordMenu}>
              <AvatarIcon
                title={"Allergies"}
                newStyles={styles.menuAvatar}
                source={imageSource.MedicalHistoryBigIcon}
              />
              <AvatarIcon
                title={"Analysis"}
                newStyles={styles.menuAvatar}
                source={imageSource.AnalysisBigIcon}
              />
              <AvatarIcon
                title={"Vaccination"}
                newStyles={styles.menuAvatar}
                source={imageSource.VaccinationBigIcon}
              />
              <AvatarIcon
                title={"Medical History"}
                newStyles={styles.menuAvatar}
                source={imageSource.MedicalHistoryBigIcon}
              />
            </View>
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default RecordMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  records: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",

    borderBottomWidth: 1,
    borderColor: "#00bad34c",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
  recordMenu: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 40,
    width: "100%",
    marginVertical: 100,
    // borderWidth: 1,
    marginRight: 40,
  },
  menuAvatar: {
    width: 150,
    height: 150,
  },
});
