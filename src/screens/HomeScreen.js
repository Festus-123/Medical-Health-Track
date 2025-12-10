import React from "react";
import { imageSource } from "../constants/imageSource";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigateTo } from "../utils/navigateTo";

import AppIcons from "../components/AppIcons";
import ProfilePhotoPlaceholder from "../components/ProfilePhotoPlaceholder";
import CategoryIcon from "../components/CategoryIcon";
import Dropdown from "../components/Dropdown";
import AvatarIcon from "../components/AvatarIcon";
import Calendar from "../components/Calendar";
import AppointmentTable from "../components/AppointmentTable";

import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";

const HomeScreen = () => {
  const NavigateTo = useNavigateTo();

  const styles = useScaledStyles(makeStyles);

  return (
    // <ScreenWrapper scroll>
      <View style={styles.container}>
        <ScrollView 
        contentContainerStyle={{
          padding: 0,
          // width: "100%",
          // borderWidth: 1
        }}>
          {/* nav view */}
          <View style={styles.navView}>
            <View style={styles.appIconView}>
              <AppIcons IconName={"notifications-outline"} IconSize={25} />
              <AppIcons IconName={"settings-outline"} IconSize={25} />
              <AppIcons
                IconName={"search"}
                IconSize={25}
                newAppIconStyle={{
                  transform: [{ scaleX: -1 }],
                }}
              />
            </View>

            {/* Profile details */}
            <View style={styles.profileDetails}>
              {/* Name and welcome message */}
              <View>
                <Text
                  style={{ textAlign: "right", color: "#00BBD3", fontSize: 16 }}
                >
                  Hi, WelcomeBack
                </Text>
                <Text style={{ textAlign: "right" }}>John Doe</Text>
              </View>
              <ProfilePhotoPlaceholder
                source={imageSource.ProfilePhoto}
                IconSize={24}
                onPress={() => NavigateTo("Profile Screens")}
              />
            </View>
          </View>

          {/* Categories */}
          <View
            style={{
              width: "100%",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Dropdown
              sectionTitle={"Categories"}
              seeAll={"See all"}
              newTxt={{
                color: "#00BBD3",
              }}
              newStyles={{
                borderColor: "#00BBD3",
              }}
            />

            <View
              style={{
                flexDirection: "row",
                gap: 5,
                justifyContent: "space-evenly",
                marginTop: 10,
              }}
            >
              <CategoryIcon
                source={imageSource.Favorite}
                label={"Favorite"}
                onPress={() => NavigateTo("Favorite Screen")}
              />
              <CategoryIcon
                source={imageSource.DoctorsIcon}
                label={"Doctors"}
                onPress={() => NavigateTo("Doctors Screen")}
              />
              <CategoryIcon
                source={imageSource.PharmacyIcon}
                label={"Pharmacy"}
              />
              <CategoryIcon
                source={imageSource.SpecialtiesIcon}
                label={"Specialties"}
                onPress={() => NavigateTo("Specialties Screen")}
              />
              <CategoryIcon
                source={imageSource.RecordsIcon}
                label={"Records"}
                onPress={() => NavigateTo("Record Screens")}
              />
            </View>
          </View>

          {/* Calendar View */}
          <LinearGradient
            colors={["#33E4DB", "#00BBD3"]}
            style={styles.calendarView}
          >
            <Calendar />
            <AppointmentTable />
          </LinearGradient>

          {/* Specialist View */}
          <Dropdown
            sectionTitle={"Specialties"}
            seeAll={"See all"}
            newStyles={{
              borderColor: "#00BBD3",
              alignSelf: "center",
            }}
            newTxt={{
              color: "#00BBD3",
            }}
            onPress={() => NavigateTo("Specialties Screen")}
          />

          {/* Specialist avatar view */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 5,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <AvatarIcon
              source={imageSource.CardiologyIcon}
              title={"Cardiology"}
              onPress={() => NavigateTo("Cardiology Screen")}
            />
            <AvatarIcon
              source={imageSource.DermatologyIcon}
              title={"Dermatology"}
              onPress={() => NavigateTo("Dermatology Screen")}
            />
            <AvatarIcon
              source={imageSource.GeneralMedicineIcon}
              title={"General Medicine"}
              onPress={() => NavigateTo("General Medicine Screen")}
            />
            <AvatarIcon
              source={imageSource.GynecologyIcon}
              title={"Gynecology"}
              onPress={() => NavigateTo("Gynecology Screen")}
            />
            <AvatarIcon
              source={imageSource.OdontologyIcon}
              title={"Odontology"}
              onPress={() => NavigateTo("Odontology Screen")}
            />
            <AvatarIcon
              source={imageSource.OncologyIcon}
              title={"Oncology"}
              onPress={() => NavigateTo("Oncology Screen")}
            />
          </View>
        </ScrollView>
      </View>
    // </ScreenWrapper>
  );
};

export default HomeScreen;

const makeStyles = ({ scaleSize }) =>
  StyleSheet.create({
    container: {
      width: "100%",
      flex: 1,
      alignItems: "center",
      marginTop: scaleSize(30),
      // borderWidth: 1,
      // margin: 0
    },
    appIconView: {
      flexDirection: "row",
    },
    profileDetails: {
      flexDirection: "row",
      gap: scaleSize(10),
      alignItems: "center",
    },
    navView: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: scaleSize(15),
      paddingHorizontal: scaleSize(10),
    },
    calendarView: {
      width: "100%",
      height: scaleSize(350),
      // margin: 0,
    },
  });
