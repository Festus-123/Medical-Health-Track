import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { imageSource } from "../constants/imageSource";
import { useRoute } from "@react-navigation/native";

import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";
import DoctorsProfileView from "../components/DoctorsProfileView";
import FIlterView from "../components/FilterView";

const Lists = [
  [
    "Dr. Daniel Rodriguez",
    "Dr. Jessica Ramirez",
    "Dr. Michael Chang",
    "Dr. Michael Davidson, M.D.",
    "Dr. Ibamigboye Kolinton",
  ],

  [
    "Interventional Cardiologist",
    "Electrophysiologist",
    "Cardiac Imaging Specialist",
    "Cardiology",
    "Intensive Cardiologist",
  ],
  ["MaleDoctor", "FemaleDoctor", "MaleDoctor", "FemaleDoctor", "MaleDoctor"],
];

const details = Lists[0].map((name, i) => {
  // const imgName = name.includes(name.slice(4, 7))
  return {
    id: i + 1,
    name,
    title: Lists[1][i],
    source: imageSource[Lists[2][i]],
  };
});

const filter = Lists[0].sort().map((name, i) => {
  return {
    name,
    title: Lists[1][i],
    source: imageSource[Lists[2][i]],
  };
});

const OphtamologyScreen = () => {
  const route = useRoute();
  const searchText = route.params?.search?.toLowerCase() || "";
  const [filterd, setFilter] = useState(false);

  let filteredList = details.filter((doc) => {
    return (
      doc.name.toLocaleLowerCase().includes(searchText) ||
      doc.title.toLocaleLowerCase().includes(searchText)
    );
  });

  if (filterd) {
    filteredList = [...filteredList].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  } else {
    filteredList = [...filteredList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  const handleFIlter = () => {
    setFilter(!filterd);
  };

  const styles = useScaledStyles(makeStyles);

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <FIlterView
          alphabethArrange={filterd ? "Z - A" : "A - Z"}
          seeAll={"See all"}
          alphabeticalFIlterAction={handleFIlter}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.contentContainer}
        >
          {filteredList.map((doc, index) => (
            <DoctorsProfileView
              key={index}
              id={doc.id}
              source={doc.source}
              DoctorName={doc.name}
              DoctorTitle={doc.title}
            />
          ))}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default OphtamologyScreen;

const makeStyles = ({ scaleSize }) =>
  StyleSheet.create({
    container: {
      marginTop: scaleSize(10),
      width: "100%",
      alignItems: "center",
    },
    contentContainer: {
      width: "100%",
      alignItems: "center",
      flexGrow: 1,
      paddingBottom: scaleSize(100),
    },
  });
