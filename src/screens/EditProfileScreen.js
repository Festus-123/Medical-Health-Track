import React from "react";
import { View, StyleSheet } from "react-native";

import ScreenWrapper from "../components/ScreenWrapper";
import ProfilePhotoPlaceholder from "../components/ProfilePhotoPlaceholder";
import Input from "../components/input";
import ButtonComponent from "../components/Button";

const EditProfileScreen = () => {
  return (
    <ScreenWrapper scrolll>
      <View style={styles.container}>
        <Input label={"Full Name"} placeholder={"John Doe"} />
        <Input label={"Phone Number"} placeholder={"+234800000000"} />
        <Input label={"Email"} placeholder={"example@gmail.com"} />
        <Input label={"Date of Birth"} placeholder={"DD / MM / YYYY"} />

        <ButtonComponent
          BtnStyleLeft={"#33E4DB"}
          BtnStyleRight={"#00BBD3"}
          title={"Update Profile"}
          newStyles={{
            marginTop: 30,
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
