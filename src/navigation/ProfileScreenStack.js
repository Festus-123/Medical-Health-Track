import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { imageSource } from "../constants/imageSource";
import { GradientHeader, BackArrow } from "./RootNavigator";

import ProfilePhotoPlaceholder from "../components/ProfilePhotoPlaceholder";
import Search from "../components/SearchBar";

import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import PrivacyPolicy from "../screens/PrivacyPolicyScreen";
import PasswordManagerScreen from "../screens/PasswordManagerScreen";
import NotificationSettingsScreen from "../screens/NotificationSettingsScreen";
import HelpScreen from "../screens/HelpScreen";

const HeaderPlugin = ({ headerTitle, name, number, email }) => {
  return (
    <View
      style={{
        alignItems: "center",
        gap: 20,
        padding: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        {headerTitle}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <ProfilePhotoPlaceholder
          source={imageSource.ProfilePhoto}
          newImg={{
            width: 109,
            height: 109,
          }}
          iconSIze={25}
          newIconStyle={{
            width: 30,
            height: 30,
            padding: 0,
            top: 80,
            left: 70,
          }}
        />

        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {name}
          </Text>
          <Text style={{ color: "white" }}>{number}</Text>
          <Text style={{ color: "white" }}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

const ProfileScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile Screen"
      screenOptions={({ route }) => ({
        headerShown: true,
        headerLeft: () => <BackArrow />,
        headerLeftContainerStyle: {
          marginBottom: 130,
        },
        headerTitle: () => {
          let headerTitle;

          if (route.name === "Profile Screen") {
            headerTitle = "My Profile";
          }
          if (route.name === "Edit Profile") {
            headerTitle = "Profile";
          }

          return <HeaderPlugin headerTitle={headerTitle} />;
        },
        headerStyle: {
          height: 250,
        },
        headerTitleAlign: "center",
        headerBackground: GradientHeader,
      })}
    >
      <Stack.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{
          headerTitle: () => (
            <HeaderPlugin
              headerTitle={"My Profile"}
              name={"John Doe"}
              number={"+234 81000000"}
              email={"example@gmail.com"}
            />
          ),
        }}
      />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      <Stack.Screen
        name="Settings Screen"
        component={SettingsScreen}
        options={{
          headerTitle: "Settings",
          headerStyle: {
            height: 100,
          },
          headerTitleStyle: {
            fontSize: 28,
            color: "#ffffff",
            textAlign: "center",
          },
          headerLeftContainerStyle: {
            marginBottom: 0,
          },
        }}
      />
      <Stack.Screen
        name="Privacy Policy Screen"
        component={PrivacyPolicy}
        options={{
          headerTitle: "Privacy Policy",
          headerStyle: {
            height: 100,
          },
          headerTitleStyle: {
            fontSize: 28,
            color: "#ffffff",
            textAlign: "center",
          },
          headerLeftContainerStyle: {
            marginBottom: 0,
          },
        }}
      />
      <Stack.Screen
        name="Password Manager Screen"
        component={PasswordManagerScreen}
        options={{
          headerTitle: "Password Manager",
          headerStyle: {
            height: 100,
          },
          headerTitleStyle: {
            fontSize: 28,
            color: "#ffffff",
            textAlign: "center",
          },
          headerLeftContainerStyle: {
            marginBottom: 0,
          },
        }}
      />
      <Stack.Screen
        name="Notification Settings Screen"
        component={NotificationSettingsScreen}
        options={{
          headerTitle: "Notification Settings",
          headerStyle: {
            height: 100,
          },
          headerTitleStyle: {
            fontSize: 28,
            color: "#ffffff",
            textAlign: "center",
          },
          headerLeftContainerStyle: {
            marginBottom: 0,
          },
        }}
      />
      <Stack.Screen
        name="Help Screen"
        component={HelpScreen}
        options={{
          headerTitle: () => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                width: 350,
                alignSelf: "center",
                // marginRight: 40,
              }}
            >
              <Text
                style={{ fontSize: 28, color: "#ffffff", fontWeight: "bold" }}
              >
                Help Center
              </Text>
              <Text style={{ color: "#ffffff", marginTop: 20 }}>
                {" "}
                How can we help you
              </Text>
              <Search />
            </View>
          ),
          // headerTitleAlign: "center",
          headerLeftContainerStyle: {
            marginBottom: 80,
            marginLeft: 30,
          },
          headerTitleContainerStyle: {
            width: "100%",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreenStack;
