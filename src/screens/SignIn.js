import { StyleSheet, View, Text, Alert, ActivityIndicator } from "react-native";
import { imageSource } from "../constants/imageSource";
import { useNavigateTo, useReplaceNavigation } from "../utils/navigateTo";
import { useState } from "react";

import Input from "../components/input";
import Logo from "../components/Logo";
import ButtonComponent from "../components/Button";
import Link from "../components/Link";

import ScreenWrapper from "../components/ScreenWrapper";
import { useScaledStyles } from "../utils/styleHelpers";

const SignIn = () => {
  const navigateTo = useNavigateTo();
  const navigateReplace = useReplaceNavigation();

  const [form, setForm] = useState({
    password: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.password.trim() || form.password.length < 8)
      newErrors.password = "password must be at least 8 characters";

    if (!form.email.trim()) {
      newErrors.email = " email field cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "invalid email";
    }

    // if(!form.phone.trim() || form.phone < 11){
    //     newErrors.phone = "field cannot be empty";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [loading, setLoading] = useState(false);

  const newBtnTxt = <ActivityIndicator size="large" color="#0e7272ff" />;

  const handleSubmit = () => {
    setLoading(!loading);
    setTimeout(() => {
      console.log("userData", form);
      Alert.alert("you have successfully ✅, logged in");
      setLoading(loading);
      navigateReplace("AppNavigator");
    }, 3000);
    // if ( validateForm() ) {

    // }else{
    //     Alert.alert("❌ Form has invalid input")
    // }
  };

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const [state, setState] = useState(true);
  const reviewPassword = () => {
    setState(!state);
  };

  const styles = useScaledStyles(makeStyles);

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <View
          style={{
            width: 380,
            gap: 10,
            marginBottom: 60,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#13CAD6",
              fontSize: 40,
            }}
          >
            Welcome
          </Text>
          <Text
            style={{
              lineHeight: 20,
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eos
            ipsam possimus enim assumenda nihil nostrum. Similique iste, quia
            iure
          </Text>
        </View>

        <Input
          label="Email or Mobile Number"
          placeholder="example4you@gmail.com"
          IconName="person"
          IconSize={20}
          value={form.email}
          onChangeText={(val) => handleChange("email", val)}
          error={errors.email}
          instruction={"enter email address or phone number"}
        />

        <Input
          label="password"
          placeholder="************"
          IconName="eye-outline"
          IconSize={20}
          Bool={state ? true : false}
          value={form.password}
          onChangeText={(val) => handleChange("password", val)}
          error={errors.password}
          instruction={"password must be at least 8 characters"}
          onPress={reviewPassword}
        />

        <Link
          title={"Forget Password?"}
          onPress={() => navigateTo("Reset Password")}
          newArea={{
            marginBottom: 40,
            marginLeft: 280,
            marginTop: 5,
          }}
        />

        <ButtonComponent
          title={!loading ? "Log in" : newBtnTxt}
          BtnStyleLeft={"#33E4DB"}
          BtnStyleRight={"#00BBD3"}
          onPress={() => handleSubmit()}
        />

        <Text
          style={{
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          or Sign In with
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
            marginVertical: 40,
          }}
        >
          Don't have an account?
          <Link title={" Sign up"} onPress={() => navigateTo("New Account")} />
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default SignIn;

const makeStyles = ({ scaleSize }) =>
  StyleSheet.create({
    container: {
      marginTop: scaleSize(30),
      alignItems: "center",
      justifyContent: "center",
    },
    siteAreaView: {
      flexDirection: "row",
      gap: scaleSize(20),
    },
    welcomeAreView: {
      marginBottom: scaleSize(40),
    },
    siteAndSuggestionAreaView: {
      marginTop: 0,
      alignItems: "center",
    },
  });
