import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";

import { View, StyleSheet, Pressable, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreenStack from './HomeScreenStack'
import ChatScreenStack from "./ChatScreenStack";
import ProfileScreenStack from "./ProfileScreenStack";

const Tab = createBottomTabNavigator();

export default function MainScreenTab () {

    return (

            <Tab.Navigator
            // initialRouteName="Home Screen"
                screenOptions={ ({ route }) => ({
                    headerShown: false,
                    tabBarButton: (props) => (
                        <Pressable
                        {...props}
                        android_ripple={{
                            color: "#33E4DB", 
                            borderless: true,
                        }}
                        style={({ pressed }) => [
                            props.style,
                            {
                            backgroundColor: pressed
                                ? Platform.OS === "ios"
                                    ? "" 
                                    : "transparent"
                                : "transparent",
                            },
                        ]}
                        />
                    ),
                    tabBarIcon: ({ focused, size, color}) => {
                        let IconName;

                        if(route.name === "Home Screens"){
                            IconName = focused ? "home" : "home-outline"
                        }if(route.name === "Chat Screens"){
                            IconName = focused ? "chatbubbles" : "chatbubbles-outline"
                        }if(route.name === "Profile Screens"){
                            IconName = focused ? 'person' : "person-outline"
                        }

                        return <Ionicons name={IconName} size={26} color={"#13CAD6"}/>
                    },
                    tabBarShowLabel: false,
                })} >

                <Tab.Screen name="Home Screens" component={HomeScreenStack}/>
                <Tab.Screen name="Chat Screens" component={ChatScreenStack}/>
                <Tab.Screen name="Profile Screens" component={ProfileScreenStack}
                    options={{
                        tabBarStyle:{
                            display: "none"
                        }
                    }}/>

            </Tab.Navigator>

    )
}

const styles = StyleSheet.create({

})
