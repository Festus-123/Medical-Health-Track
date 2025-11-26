import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { imageSource } from "../constants/imageSource";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigateTo } from "../utils/navigateTo";

import ScreenWrapper from "../components/ScreenWrapper";
import DoctorsProfileView from "../components/DoctorsProfileView";
import FIlterView from "../components/FilterView";
import AvatarIcon from "../components/AvatarIcon";

const Doctors = [
  "Cardiology",
  "Dermatology",
  "General Medicine",
  "Gynecology",
  "Odontology",
  "Oncology",
  "Ophtamology",
  "Orthopedics",
];

const doctorsList = Doctors.map((doctor, i) => {
  return {
    i,
    source:
      doctor === "General Medicine"
        ? imageSource.GeneralMedicineIcon
        : imageSource[`${doctor}Icon`],
  };
});

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

const DoctorScreen = () => {
  const NavigateTo = useNavigateTo();
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

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <ScrollView
          horizontal
          // pinchGestureEnabled={true}
          showsHorizontalScrollIndicator={false}
          style={styles.ScrollViewHorizontal}
          contentContainerStyle={{
            paddingVertical: 0,
          }}
        >
          {doctorsList.map((item, i) => (
            <TouchableOpacity key={i}>
              <LinearGradient
                colors={["#00BBD3", "#00BBD3"]}
                style={styles.gradient}
              >
                <Image source={item.source} />
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <FIlterView
          alphabethArrange={filterd ? "Z - A" : "A - Z"}
          seeAll={"Top rating"}
          alphabeticalFIlterAction={handleFIlter}
          newStyles={{
            marginTop: 10,
          }}
          onPress={() => NavigateTo("Top Rating")}
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

export default DoctorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  gradient: {
    width: 100,
    height: 90,
    margin: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  ScrollViewHorizontal: {
    width: 370,
    height: 150,
    borderBottomWidth: 1,
    borderColor: "#00bad336",
    marginTop: 10,
    paddingBottom: 10,
  },
});
