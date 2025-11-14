

// import { navigate } from "expo-router/build/global-state/routing";
import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";


const Suggestion = ({ link1, text1, text2, link2, text3, link4, link5, navigateToSignUp  }) => {

    return (
        <View style={styles.container}>
            <Text styles={styles.descriptiveTxt}>{text3}</Text>
        <View style={styles.suggestionsArea}>

            <Text style={styles.suggestionsTxt}>

            <Text style={styles.suggestionsLink} onPress={navigateToSignUp}>
                {link5}
            </Text>

            {text1}   

            <Text style={styles.suggestionsLink}>{link1}</Text>

           {text2}  

            <Text style={styles.suggestionsLink}>{link2}</Text> </Text>

        </View>

        <Text style={styles.absoluteLink}>{link4}</Text>

    </View>
    )
}

export default Suggestion

const styles = StyleSheet.create({
    container:{
        width: 350,
        marginTop: 10,

    },
    suggestionsArea:{
        // flex: 1,
        // flexWrap: "wrap",
        width: "100%",

    },
    suggestionsLink:{
        color: "#10babaff",
        fontSize: 15,
        textAlign: "center"
    },
    suggestionsTxt:{
        fontSize: 15,
        textAlign: 'center'
    },
    descriptiveTxt:{
        fontSize: 15,
        color: '#000000',
        fontFamily: 'time',
    },
    absoluteLink:{
        position: "absolute",
        color: "#10babaff",
        right: 5,
        top: -10
    }
})