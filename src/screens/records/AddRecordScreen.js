import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { useSelector, useDispatch } from "react-redux";
import {
  setGender,
  setAge,
  setWeight,
  setHeight,
  setBloodType,
  resetRecord,
} from "../../redux/slices/recordSlice";

import { ActiveBtn, InActiveBtn } from "../FavoriteScreen";
import Input from "../../components/input";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useNavigateTo } from "../../utils/navigateTo";

const AddRecordScreen = () => {
  const NavigateTo = useNavigateTo();
  const dispatch = useDispatch();
  const { gender, age, weight, height, bloodType } = useSelector(
    (state) => state.record
  );

  console.log("SCREEN RENDERED");

  return (
    <ScreenWrapper scroll={true}>
      <View style={styles.container}>
        <Text style={styles.txt}>What is your gender</Text>

        {/* gender Tabs */}
        <View style={styles.gender}>
          {gender === "Male" ? (
            <ActiveBtn title={"Male"} newStyle={styles.new} />
          ) : (
            <InActiveBtn
              title={"Male"}
              newStyle={styles.new}
              onPress={() => dispatch(setGender("Male"))}
            />
          )}

          {gender === "Female" ? (
            <ActiveBtn title={"Female"} newStyle={styles.new} />
          ) : (
            <InActiveBtn
              title={"Female"}
              newStyle={styles.new}
              onPress={() => dispatch(setGender("Female"))}
            />
          )}

          {gender === "Other" ? (
            <ActiveBtn title={"Other"} newStyle={styles.new} />
          ) : (
            <InActiveBtn
              title={"Other"}
              newStyle={styles.new}
              onPress={() => dispatch(setGender("Other"))}
            />
          )}
        </View>

        {/* age slider */}
        <View style={styles.slider}>
          <Text style={styles.txt}>WHat is your Age: {age}</Text>

          <Slider
            style={{ width: "100%", height: 50 }}
            minimumValue={5}
            maximumValue={75}
            step={1}
            minimumTrackTintColor="#00bbd3"
            maximumTrackTintColor="#7b7a7aff"
            thumbTintColor="#00bbd3"
            value={age}
            onSlidingComplete={(value) => dispatch(setAge(value))}
          />
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignItems: "center",
              justifyContent: "space-between",
              alignSelf: "center",
              marginTop: -20,
            }}
          >
            <Text>5</Text>
            <Text>40</Text>
            <Text>75</Text>
          </View>
        </View>

        {/* weight slider */}
        <View style={styles.slider}>
          <Text style={styles.txt}>What is your Weight: {weight}kg</Text>

          <Slider
            style={{ width: "100%", height: 50 }}
            minimumValue={25}
            maximumValue={200}
            step={1}
            minimumTrackTintColor="#00bbd3"
            maximumTrackTintColor="#7b7a7aff"
            thumbTintColor="#00bbd3"
            value={weight}
            onSlidingComplete={(value) => dispatch(setWeight(value))}
          />
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignItems: "center",
              justifyContent: "space-between",
              alignSelf: "center",
              marginTop: -20,
            }}
          >
            <Text>25kg</Text>
            <Text>105kg</Text>
            <Text>200kg</Text>
          </View>
        </View>

        {/* height slider */}
        <View style={styles.slider}>
          <Text style={styles.txt}>What is your Height: {height}m</Text>

          <Slider
            style={{ width: "100%", height: 50 }}
            minimumValue={6}
            maximumValue={66}
            step={1}
            minimumTrackTintColor="#00bbd3"
            maximumTrackTintColor="#7b7a7aff"
            thumbTintColor="#00bbd3"
            value={height}
            onSlidingComplete={(value) => dispatch(setHeight(value))}
          />
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignItems: "center",
              justifyContent: "space-between",
              alignSelf: "center",
              marginTop: -20,
            }}
          >
            <Text>6m</Text>
            <Text>36m</Text>
            <Text>66m</Text>
          </View>
        </View>

        {/* Enter Blood type */}
        <View style={{ marginTop: 30 }}>
          <Input
            label={"What is your blood type"}
            placeholder={"AB+"}
            value={bloodType}
            onChangeText={(text) => dispatch(setBloodType(text))}
          />
        </View>

        <InActiveBtn
          title={"Save"}
          newStyle={styles.saveBtn}
          onPress={() => {
            console.log({ gender, age, weight, height, bloodType });
            NavigateTo("Record Menu Screen");
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default AddRecordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  txt: {
    width: "90%",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
  },
  gender: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-evenly",
    width: "90%",
    gap: 20,
    marginTop: 20,
  },
  new: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  slider: {
    width: "90%",
  },
  saveBtn: {
    marginTop: 30,
    paddingHorizontal: 60,
  },
});
