import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { imageSource } from "../constants/imageSource";
import { useNavigateTo } from "../utils/navigateTo";
import { useRoute } from "@react-navigation/native";
import ScreenWrapper from "../components/ScreenWrapper";

import AvatarIcon from "../components/AvatarIcon";
import FIlterView from "../components/FilterView";

const items = [
  "Cardiology",
  "Dermatology",
  "General Medicine",
  "Gynecology",
  "Odontology",
  "Oncology",
  "Ophtamology",
  "Orthopedics",
];

const SpecialtiesScreen = () => {
  const [filtered, setFiltered] = useState(false);
  const route = useRoute();
  const navigateTo = useNavigateTo();
  const searchText = route.params?.search?.toLowerCase() || "";

  const List = items.map((item, i) => {
    return {
      item,
      source:
        imageSource[
          item === "General Medicine" ? "GeneralMedicineIcon" : `${item}Icon`
        ],
      i,
    };
  });

  let filteredList = List.filter((doc) =>
    doc.item.toLowerCase().includes(searchText)
  );

  if (filtered) {
    filteredList = [...filteredList].sort((a, b) =>
      b.item.localeCompare(a.item)
    );
  } else {
    filteredList = [...filteredList].sort((a, b) =>
      a.item.localeCompare(b.item)
    );
  }

  const handleFilter = () => {
    setFiltered(!filtered);
  };

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <FIlterView
          seeAll={"Doctors"}
          alphabethArrange={filtered ? "Z - A" : "A - Z"}
          alphabeticalFIlterAction={handleFilter}
          onPress={() => navigateTo("Doctors Screen")}
        />

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 40,
            width: "100%",
            height: "115%",
            padding: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {filteredList.map((ListItem, index) => (
            <AvatarIcon
              key={index}
              title={ListItem.item}
              source={ListItem.source}
              onPress={() => navigateTo(`${ListItem.item} Screen`)}
              newStyles={{
                width: 150,
                height: 150,
                alignSelf: "center",
                margin: 0,
                alignItem: "center",
                justifyContent: "center",
              }}
            />
          ))}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default SpecialtiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
});
