import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { GradientHeader, BackArrow } from "./RootNavigator";

const Stack = createStackNavigator();

import SpecialtiesScreen from "../screens/SpecialtiesScreen";
import HomeScreen from "../screens/HomeScreen";
import CardiologyScreen from "../screens/CardiologyScreen";
import DermatologyScreen from "../screens/DermatologyScreen";
import GeneralMedicineScreen from "../screens/GeneralMedicineScreen";
import GynecologyScreen from "../screens/Gynecology";
import OdontologyScreen from "../screens/OdontologyScreen";
import OncologyScreen from "../screens/OncologyScreen";
import OphtamologyScreen from "../screens/OphtamologyScreen";
import OrthopedicsScreen from "../screens/OrthopedicsScreen";

import DoctorScreen from "../screens/DoctorScreen";
import DoctorInfoScreen from "../screens/DoctorInfoScreen";

import RatingScreen from "../screens/RatingScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import RecordScreenStack from "./RecordScreenStack";

import InfoHeaderView from "../components/InfoHeaderView";
import Search from "../components/SearchBar";

export const SearchHeaderPlugIn = ({ headerTitle }) => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: 390,
      alignSelf: "center",
      marginRight: 40,
    }}
  >
    <Text
      style={{
        fontSize: 30,
        color: "#fff",
      }}
    >
      {headerTitle}
    </Text>
    <Text
      style={{
        color: "#fff",
        marginTop: 10,
      }}
    >
      Find your Doctor
    </Text>

    <Search />
  </View>
);

export default function HomeScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home Screen"
      screenOptions={({ route }) => ({
        headerShown: true,
        headerLeft: () => <BackArrow />,
        headerLeftContainerStyle: {
          // paddingLeft: 10
          marginBottom: 80,
          marginLeft: 10,
        },
        headerBackground: GradientHeader,
        headerTitle: () => {
          let headerTitle;

          if (route.name === "Specialties Screen") {
            headerTitle = "Specialties";
          }
          if (route.name === "Cardiology Screen") {
            headerTitle = "Cardiology";
          }
          if (route.name === "Dermatology Screen") {
            headerTitle = "Dermatology";
          }
          if (route.name === "General Medicine Screen") {
            headerTitle = "General Medicine";
          }
          if (route.name === "Gynecology Screen") {
            headerTitle = "Gynecology";
          }
          if (route.name === "Odontology Screen") {
            headerTitle = "Odontology";
          }
          if (route.name === "Oncology Screen") {
            headerTitle = "Oncology";
          }
          if (route.name === "Ophtamology Screen") {
            headerTitle = "Ophtamology";
          }
          if (route.name === "Orthopedics Screen") {
            headerTitle = "Orthopedics";
          }
          if (route.name === "Doctors Screen") {
            headerTitle = "Doctors";
          }

          return <SearchHeaderPlugIn headerTitle={headerTitle} />;
        },
        headerStyle: {
          height: 200,
          // width: "100%"
        },
        headerTitleContainerStyle: {
          width: "100%",
        },
      })}
    >
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* Specialties screen */}
      <Stack.Screen name="Specialties Screen" component={SpecialtiesScreen} />
      <Stack.Screen name="Cardiology Screen" component={CardiologyScreen} />
      <Stack.Screen name="Dermatology Screen" component={DermatologyScreen} />
      <Stack.Screen
        name="General Medicine Screen"
        component={GeneralMedicineScreen}
      />
      <Stack.Screen name="Gynecology Screen" component={GynecologyScreen} />
      <Stack.Screen name="Odontology Screen" component={OdontologyScreen} />
      <Stack.Screen name="Oncology Screen" component={OncologyScreen} />
      <Stack.Screen name="Ophtamology Screen" component={OphtamologyScreen} />
      <Stack.Screen name="Orthopedics Screen" component={OrthopedicsScreen} />

      {/* Doctors screen */}
      <Stack.Screen name="Doctors Screen" component={DoctorScreen} />
      <Stack.Screen
        name="Doctor Info Screen"
        component={DoctorInfoScreen}
        options={({ route }) => ({
          headerTitle: () => (
            <InfoHeaderView
              source={route.params?.doctorImg || ""}
              name={route.params?.doctorName || ""}
              title={route.params?.doctorTitle || ""}
              rateCount={40}
              messageCount={19}
              experienceCount={20}
            />
          ),
          headerStyle: {
            height: 260,
          },
          headerLeftContainerStyle: {
            marginBottom: 180,
          },
        })}
      />

      {/* Top Rating Doctors and Favorite doctor */}
      <Stack.Screen
        name="Top Rating"
        component={RatingScreen}
        options={{
          headerTitle: "Ratings",
          headerStyle: {
            height: 100,
          },
          headerLeftContainerStyle: {
            marginBottom: 0,
          },
          headerTitleStyle: {
            color: "#ffffff",
            fontSize: 28,
            textAlign: "center",
          },
        }}
      />
      <Stack.Screen
        name="Favorite Screen"
        component={FavoriteScreen}
        options={{
          headerTitle: "Favorite",
          headerStyle: {
            height: 100,
          },
          headerLeftContainerStyle: {
            marginBottom: 0,
          },
          headerTitleStyle: {
            color: "#ffffff",
            fontSize: 28,
            textAlign: "center",
          },
        }}
      />
      <Stack.Screen
        name="Record Screens"
        component={RecordScreenStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
