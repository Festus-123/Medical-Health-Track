import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
import { imageSource } from "../constants/imageSource";
import { useNavigateTo } from "../utils/navigateTo";
import { useState } from "react";

import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";

import Input from "../components/input";
import ButtonComponent from "../components/Button";
import Logo from "../components/Logo";
import Link from "../components/Link";

const SignUp = () => {
  const [form, setForm] = useState({
    fullname: "",
    password: "",
    email: "",
    phone: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!form.password.trim() || form.password.length < 8)
      newErrors.password = "password must be at least 8 characters";

    if (!form.email.trim()) {
      newErrors.email = " email field cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "invalid email";
    }

    if (!form.phone.trim() || form.phone < 11) {
      newErrors.phone = "field cannot be empty";
    }
    if (!form.dob.trim()) newErrors.dob = "field cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigateTo = useNavigateTo();
  const [loading, setLoading] = useState(false);

  const newBtnTxt = <ActivityIndicator size="large" color="#0e7272ff" />;

  const handleSubmit = () => {
    if (validateForm()) {
      setLoading(!loading);
      setTimeout(() => {
        console.log("userData", form);
        navigateTo("Log In");
      }, 3000);
    } else {
      Alert.alert("❌ Form has invalid input");
    }
  };

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const styles = useScaledStyles(makeStyles);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input
          label="Full Name"
          placeholder="John Doe"
          IconName="person-outline"
          IconSize={20}
          value={form.fullname}
          onChangeText={(val) => handleChange("fullname", val)}
          error={errors.fullname}
          instruction={"(fullname) -surname then first name"}
        />

        <Input
          label="password"
          placeholder="*************"
          Bool={true}
          IconName="eye"
          IconSize={20}
          value={form.password}
          onChangeText={(val) => handleChange("password", val)}
          error={errors.password}
          instruction={"password must be 8 characters or more"}
        />

        <Input
          label="Email"
          placeholder="example$you@gmail.com"
          IconName="mail"
          IconSize={20}
          value={form.email}
          onChangeText={(val) => handleChange("email", val)}
          error={errors.email}
          instruction={"must include an '@gmail.com' symbol"}
        />

        <Input
          label="Mobile Number"
          placeholder="+234 000000001"
          IconName="person"
          IconSize={20}
          value={form.phone}
          onChangeText={(val) => handleChange("phone", val)}
          error={errors.phone}
          instruction={"not less than 11-digits "}
        />

        <Input
          label="D.O.B"
          placeholder="DD/MM/YYYY"
          IconName="calendar"
          IconSize={20}
          value={form.dob}
          onChangeText={(val) => handleChange("dob", val)}
          error={errors.dob}
          instruction={"include a '/' after each MM/DD/YYYY"}
        />

        <Text style={styles.termsCondition}>
          By Continuing, you agree to
          <Link title={" Terms and Condition "} />
          <Text> and </Text>
          <Link title={"Privacy Policy"} />
        </Text>

        <ButtonComponent
          BtnStyleLeft={"#33E4DB"}
          BtnStyleRight={"#00BBD3"}
          title={"Sign Up"}
          onPress={() => handleSubmit()}
        />

        <Text
          style={{
            marginVertical: 15,
          }}
        >
          or SignUp with{" "}
        </Text>

        <View style={styles.siteAreaView}>
          <Logo
            source={imageSource.UseGoogle}
            svg={{
              width: 60,
              height: 60,
            }}
          />
          <Logo
            source={imageSource.UseFacebook}
            svg={{
              width: 60,
              height: 60,
            }}
          />
          <Logo
            source={imageSource.UseBiometrics}
            svg={{
              width: 60,
              height: 60,
            }}
          />
        </View>

        <Text
          style={{
            marginVertical: 30,
          }}
        >
          Already have an account?
          <Link title={"Log In"} onPress={() => navigateTo("Sign In")} />
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const makeStyles = ({ scaleSize }) =>
  StyleSheet.create({
    container: {
      marginTop: scaleSize(10),
      alignItems: "center",
      justifyContent: "center",
    },
    siteAreaView: {
      flexDirection: "row",
      gap: scaleSize(20),
    },
    termsCondition: {
      flexWrap: "wrap",
      textAlign: "center",
      width: scaleSize(200),
      padding: scaleSize(10),
      marginVertical: scaleSize(10),
    },
  });
