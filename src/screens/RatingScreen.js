import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { imageSource } from "../constants/imageSource";

import ScreenWrapper from "../components/ScreenWrapper";
import FIlterView from "../components/FilterView";
import ProfessionalDoctorView from "../components/ProfessionalDoctorView";

const Lists = [
  [
    "Dr. Daniel Rodriguez",
    "Dr. Jessica Ramirez",
    "Dr. Michael Chang",
    "Dr. Michael Davidson, M.D.",
    "Dr. Ibamigboye Kolinton",
  ],

  [
    "Cardiologist",
    "Physiologist",
    "Cardiac Imaging Specialist",
    "Cardiology",
    "Intensive Cardiologist",
  ],
  ["MaleDoctor", "FemaleDoctor", "MaleDoctor", "FemaleDoctor", "MaleDoctor"],
];

const details = Lists[0].map((name, i) => {
  // const imgName = name.includes(name.slice(4, 7))
  return {
    name,
    title: Lists[1][i],
    source: imageSource[Lists[2][i]],
  };
});

const RatingScreen = () => {
  const [filterd, setFilter] = useState(false);

  let filteredList;

  if (filterd) {
    filteredList = details.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    filteredList = details.sort((a, b) => a.name.localeCompare(b.name));
  }

  const handleFIlter = () => {
    setFilter(!filterd);
  };

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <FIlterView
          alphabethArrange={filterd ? "Z - A" : "A - Z"}
          alphabeticalFIlterAction={handleFIlter}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            width: 380,
            alignItems: "center",
            flexGrow: 1,
            paddingBottom: 100,
          }}
        >
          {filteredList.map((doc, index) => (
            <ProfessionalDoctorView
              key={index}
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

export default RatingScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
});
