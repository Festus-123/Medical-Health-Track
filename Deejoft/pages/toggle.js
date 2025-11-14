import { useState } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"


export default function Toggle(){
    const [light, setLight] = useState(false)

    return(

        <View style={[styles.container, light ? styles.darkMode : styles.lightMode]}>
            <TouchableOpacity style={[styles.outerKnob, light ? styles.lightMode : styles.darkMode]}>
                <TouchableOpacity style={[styles.knob, light ? styles.darkKnob : styles.lightMode]}
                onPress={() => setLight(!light)}>
                </TouchableOpacity>
            </TouchableOpacity>                
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        width: 500,
    },
    lightMode:{
        backgroundColor: "white",
    },
    darkMode:{
        backgroundColor: "black",   
        right: 10,
            
    },

    outerKnob:{
        backgroundColor: "blue",
        width: 90,
        height: 40,
        position: 'relative',
        borderRadius: 20,
    },
    knob:{
        backgroundColor: "white",
        borderRadius: 50,
        width: 30,
        height: 30,
        margin: 0,
        position: "absolute",
        top: 5,
        left: 10,
    },
    darkKnob:{
        backgroundColor: "black",
        borderRadius: 50,
        width: 30,
        height: 30,
        margin: 0,
        position: "absolute",
        top: 5,
        left: 50,      
    }

})