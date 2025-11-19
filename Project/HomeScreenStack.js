import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { useNavigateTo, useGoBack, useReplaceNavigation } from "../Module/NavigateTo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack =  createStackNavigator()

import SpecialtiesScreen from "./MainScreen/mainStackScreens/SpecialtiesScreen";
import HomeScreen from "./MainScreen/HomeScreen";
import CardiologyScreen from "./MainScreen/mainStackScreens/CardiologyScreen";
import DermatologyScreen from "./MainScreen/mainStackScreens/DermatologyScreen";
import GeneralMedicineScreen from "./MainScreen/mainStackScreens/GeneralMedicine";
import GynecologyScreen from "./MainScreen/mainStackScreens/Gynecology";
import OdontologyScreen from "./MainScreen/mainStackScreens/OdontologyScreen";
import OncologyScreen from "./MainScreen/mainStackScreens/OncologyScreen";
import OphtamologyScreen from "./MainScreen/mainStackScreens/OphtamologyScreen";
import OrthopedicsScreen from "./MainScreen/mainStackScreens/OrthopedicsScreen";

import DoctorScreen from "./MainScreen/Doctors/DoctorScreen";
import DoctorProfileScreen from "./MainScreen/Doctors/DoctorProfileScreen";

import RatingScreen from "./MainScreen/Doctors/RatingScreen";
import FavoriteScreen from "./MainScreen/Doctors/FavoriteScreen";


import InfoHeaderView from "../components/InfoHeaderView";
// import DoctorInfoStack from "./MainScreen/DoctorInfoStack";

import Search from "../components/SearchBar";

const GradientHeader = () => (
  <LinearGradient
    colors={["#33E4DB", "#00BBD3"]}
    style={{ flex: 1 }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
)

const BackArrow = () => {
  const goBack = useGoBack()

  return (
  <TouchableOpacity
  onPress={goBack}
   style={{
    paddingHorizontal: 15
   }}>
  <Ionicons 
    name="chevron-back"
    size={28}
    color={'#fff'}/>
    </TouchableOpacity>
)}


const HeaderPlugIn = ({ headerTitle }) => (
    <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 390,
        alignSelf: "center",
        marginRight: 40,
        
    }}>

    <Text style={{
        fontSize: 30,
        color: "#fff"
    }}>{headerTitle}</Text>
    <Text style={{
        color: "#fff",
        marginTop: 10
    }}>Find your Doctor</Text>

    <Search />
    </View>
)

export default function HomeScreenStack() {

    return (

        <Stack.Navigator
        initialRouteName="Home Screen"
            screenOptions={({ route }) =>  ({
                headerShown: true,
                headerLeft: () => <BackArrow />,
                headerLeftContainerStyle:{
                    // paddingLeft: 10
                    marginBottom: 80,
                    marginLeft: 10
                },
                headerBackground: GradientHeader,
                headerTitle: () => {
                    let headerTitle;

                    if( route.name === "Specialties Screen"){
                        headerTitle = "Specialties"
                    }if(route.name === "Cardiology Screen"){
                        headerTitle = "Cardiology"
                    }if(route.name === "Dermatology Screen"){
                        headerTitle = "Dermatology"
                    }if(route.name === "General Medicine Screen"){
                        headerTitle = "General Medicine"
                    }if(route.name === "Gynecology Screen"){
                        headerTitle= "Gynecology"
                    }if(route.name === "Odontology Screen"){
                        headerTitle = "Odontology"
                    }if(route.name === "Oncology Screen"){
                        headerTitle = "Oncology"
                    }if(route.name === "Ophtamology Screen"){
                        headerTitle = "Ophtamology"
                    }if(route.name === "Orthopedics Screen"){
                        headerTitle = "Orthopedics"
                    }if(route.name === 'Doctors Screen'){
                        headerTitle = 'Doctors'
                    }

                return  <HeaderPlugIn headerTitle={headerTitle}/>
                },
                headerStyle: {
                    height: 200,
                    // width: "100%"
                },
                headerTitleContainerStyle: {
                    width: "100%",
                }

            })}>

            <Stack.Screen name="Home Screen" component={HomeScreen}
            options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Specialties Screen" component={SpecialtiesScreen} />
            <Stack.Screen name="Cardiology Screen" component={CardiologyScreen}/>
            <Stack.Screen name="Dermatology Screen" component={DermatologyScreen}/>
            <Stack.Screen name="General Medicine Screen" component={GeneralMedicineScreen}/>
            <Stack.Screen name="Gynecology Screen" component={GynecologyScreen}/>
            <Stack.Screen name="Odontology Screen" component={OdontologyScreen}/>
            <Stack.Screen name="Oncology Screen" component={OncologyScreen}/>
            <Stack.Screen name="Ophtamology Screen" component={OphtamologyScreen}/>
            <Stack.Screen name="Orthopedics Screen" component={OrthopedicsScreen}/>

            <Stack.Screen name="Doctors Screen" component={DoctorScreen}/>
            <Stack.Screen name="Doctor Profile Screen" component={DoctorProfileScreen}
                options={({ route }) => ({
                    headerTitle: () => (
                        <InfoHeaderView 
                            source={route.params?.doctorImg || ""}
                            name={route.params?.doctorName || ""}
                            title={route.params?.doctorTitle || ""}
                            rateCount={40}
                            messageCount={19}
                            experienceCount={20}/>
                    ),
                    headerStyle: {
                        height: 260
                    },
                    headerLeftContainerStyle: {
                        marginBottom: 180
                    }
                })}/>

            <Stack.Screen name="Top Rating" component={RatingScreen}
                options={{
                    headerTitle: "Ratings",
                    headerStyle:{
                        height: 100
                    },
                    headerLeftContainerStyle:{
                        marginBottom: 0
                    },
                    headerTitleStyle:{
                        color: "#ffffff",
                        fontSize: 28,
                        textAlign: "center"
                    }
                }}/>
            <Stack.Screen name="Favorite Screen" component={FavoriteScreen} 
                options={{
                    headerTitle: 'Favorite',
                    headerStyle:{
                        height: 100
                    },
                    headerLeftContainerStyle:{
                        marginBottom: 0
                    },
                    headerTitleStyle:{
                        color: '#ffffff',
                        fontSize: 28,
                        textAlign: "center"
                    }
                }}/>
        </Stack.Navigator>
    )
} 