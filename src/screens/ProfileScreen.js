import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigateTo, useReplaceNavigation } from "../utils/navigateTo";

import ScreenWrapper from "../components/ScreenWrapper";
import Profile from "../components/Profile";
import ConfirmLogOut from "../screens/ConfirmLogOutScreen";

const ProfileScreen = () => {
  const NavigateTo = useNavigateTo();
  // const navigateReplace = useReplaceNavigation()
  const [click, setClick] = useState(false);

  const confirm = () => {
    setClick(true);
  };

  // if(click){
  //    return <ConfirmLogOut onPress={() => setClick(false)}/>
  // }

  return (
    <ScreenWrapper >
      <View style={styles.container}>
        <View style={click ? styles.inactive : styles.active}></View>

        <Profile
          title={"Profile"}
          iconName={"person-outline"}
          onPress={() => NavigateTo("Edit Profile")}
        />
        <Profile title={"Favorite"} iconName={"heart-outline"} />
        <Profile title={"Payment Method"} iconName={"wallet-outline"} />
        <Profile
          title={"Privacy Policy"}
          iconName={"lock-closed-outline"}
          onPress={() => NavigateTo("Privacy Policy Screen")}
        />
        <Profile
          title={"Settings"}
          iconName={"settings-outline"}
          onPress={() => NavigateTo("Settings Screen")}
        />
        <Profile
          title={"help"}
          iconName={"help-outline"}
          onPress={() => NavigateTo("Help Screen")}
        />
        <Profile
          title={"Logout"}
          iconName={"log-out-outline"}
          onPress={() => confirm()}
        />

        {click ? <ConfirmLogOut onPress={() => setClick(false)} /> : null}
      </View>
    </ScreenWrapper>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 20,
    // padding: 10,
    // marginTop: 20
  },
  active: {
    display: "none",
    // flex: 1,
    // width: "100%",
    // height: "100%",
  },
  inactive: {
    display: "block",
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#00bad34c",

    position: "absolute",
    zIndex: 1,
  },
});
