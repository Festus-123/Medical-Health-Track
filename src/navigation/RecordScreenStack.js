import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { GradientHeader, BackArrow } from "./RootNavigator";
import { SearchHeaderPlugIn } from "./HomeScreenStack";

import AddRecordScreen from "../screens/records/AddRecordScreen";
import RecordMenuScreen from "../screens/records/RecordMenuScreen";

const Stack = createStackNavigator();

const RecordScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Record Menu Screen"
      screenOptions={({ route }) => ({
        headerShown: true,
        headerBackground: GradientHeader,
        headerLeft: () => <BackArrow />,
        headerTitleStyle: {
          color: "#fff",
          fontSize: 28,
        },
        headerTitleAlign: "center",
      })}
    >
      <Stack.Screen
        name="Add Record Screen"
        component={AddRecordScreen}
        options={{
          headerTitle: "Add Record",
        }}
      />
      <Stack.Screen
        name="Record Menu Screen"
        component={RecordMenuScreen}
        options={{
          headerTitle: "Medical Record",
        }}
      />
    </Stack.Navigator>
  );
};

export default RecordScreenStack;
