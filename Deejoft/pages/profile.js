
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";


export default function Profile () {
    return(

    <View style={styles.preofileCard}>
       <Image source={require("../assets/deejoft.png")} style={styles.logo} />
        <Text style={styles.address}>
            <Text style={styles.subHead}>
                Address:   
            </Text> Oppoite Local Goverment, North iworoad</Text>
        <Text style={styles.bio}>
            <Text style={styles.subHead}>Bio:  </Text>
                Deejoft is a dynamic coding school dedicated to transforming lives through technology.
                Based in the vibrant environment of Ibadan State, Deejoft focuses on improving and
                enhancing the reality of tech in our modern world by equipping students with practical 
                and in-demand digital skills.
                The school offers comprehensive training programs in Cybersecurity, Web Development, 
                Application Development, Game Development, UI/UX Design, and Graphics Design with Animation,
                among others. Through hands-on learning, mentorship, and real-world projects, students gain 
                the confidence and technical expertise needed to thrive in today’s digital industry.
                Many of Deejoft’s graduates have gone on to become proficient professionals, contributing 
                their skills to top tech companies and startups, both locally and internationally. Deejoft 
                continues to stand as a beacon of innovation, empowering individuals to turn creativity into
                impact and shaping the future of technology in Ibadan and beyond.
        </Text>
    </View>
    )
}

const styles =StyleSheet.create({
    preofileCard:{
        width: 350,
        // height: 400,
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
    },
    logo:{
        width: 300,
        height: 100,
    },
    address:{
        marginTop: 10,
        textAlign: "center",
        fontSize: 15,
    },
    bio:{
        letterSpacing: 2,
    },
    subHead:{
        fontWeight: "bold",
        letterSpacing: 0,
        marginTop: 10,
    }
})