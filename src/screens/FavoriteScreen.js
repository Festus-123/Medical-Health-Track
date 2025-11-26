import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { imageSource } from "../constants/imageSource";
import { useSelector } from "react-redux";

import ScreenWrapper from "../components/ScreenWrapper";
import FIlterView from "../components/FilterView";
import FavoriteDoctorProfileView from "../components/FavoriteDoctorProfileView";
import FavoriteServices from "../components/FavoriteServices";

export const ActiveBtn = ({ title, onPress, newStyle }) => {
  return (
    <TouchableOpacity style={styles.activeBtnArea} onPress={onPress}>
      <LinearGradient
        colors={["#33E4DB", "#00BBD3"]}
        style={[styles.activeBtn, newStyle]}
      >
        <Text style={{ color: "#ffffff", fontSize: 20 }}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const InActiveBtn = ({ title, onPress, newStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.InactiveBtnArea, newStyle]}
      onPress={onPress}
    >
      <Text style={{ color: "#000000", fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
  );
};

const FavoriteScreen = () => {
  const [current, setCurrent] = useState("Doctors");
  const [isAZ, setIsAZ] = useState(true);

  // get favorite doctor from redux
  const favorites = useSelector((state) => state.favorites.doctors);

  const sortedDoctors = [...favorites].sort((a, b) => {
    return isAZ ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });

  const serviceLists = [
    "Cardiology",
    "Dermatology",
    "General Medicine",
    "Gynecology",
    "Odontology",
    "Oncology",
    "Ophtamology",
    "Orthopedics",
  ];

  const sortedServices = [...serviceLists].sort((a, b) => {
    return isAZ ? a.localeCompare(b) : b.localeCompare(a);
  });

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        {/* Filter button */}
        <FIlterView
          alphabethArrange={isAZ ? "Z - A" : "A - Z"}
          alphabeticalFIlterAction={() => setIsAZ(!isAZ)}
        />
        {/* Tabs */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "90%",
            marginTop: 20,
            marginBottom: 15,
          }}
        >
          {current === "Doctors" ? (
            <ActiveBtn title={"Doctors"} />
          ) : (
            <InActiveBtn
              title={"Doctors"}
              onPress={() => setCurrent("Doctors")}
            />
          )}

          {current === "Services" ? (
            <ActiveBtn title={"Services"} />
          ) : (
            <InActiveBtn
              title={"Services"}
              onPress={() => setCurrent("Services")}
            />
          )}
        </View>
        {/* DOctors list */}
        {current === "Doctors" && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: 380,
              alignItems: "center",
              flexGrow: 1,
              paddingBottom: 100,
            }}
          >
            {sortedDoctors.length === 0 ? (
              <Text
                style={{
                  marginTop: 20,
                  color: "#777",
                  fontSize: 20,
                }}
              >
                No Favorite Doctors yet
              </Text>
            ) : (
              sortedDoctors.map((doc, index) => (
                <FavoriteDoctorProfileView
                  key={index}
                  source={doc.img}
                  DoctorName={doc.name}
                  DoctorTitle={doc.title}
                />
              ))
            )}
          </ScrollView>
        )}{" "}
        ;{/* Service list */}
        {current === "Services" && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              width: 380,
              alignItems: "center",
              flexGrow: 1,
              paddingBottom: 130,
              gap: 10,
            }}
          >
            {sortedServices.map((doc, index) => (
              <FavoriteServices key={index} text={doc} />
            ))}
          </ScrollView>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  activeBtnArea: {},
  activeBtn: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 25,
  },
  InactiveBtnArea: {
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderWidth: 1,
    borderColor: "#00bad3aa",
    borderRadius: 25,
  },
});
