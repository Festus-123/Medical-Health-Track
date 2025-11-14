import {Text, TouchableOpacity, View, StyleSheet, TextInput, Pressable, Alert} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ActivityIndicator } from "react-native"
import { useState } from "react"


export default function LogIn(){
    const [loading, setLoading] = useState(false);
    const handleLoading = async () => {
        try{
            setLoading(true);

            await new Promise(res => setTimeout(res, 2000))
            setLoading(false)
            Alert.alert("login Successful ✅")
        }catch(error){
            console.error(error)
        }
    }
    return(

<View style={styles.container}>
    
    <Text style={styles.Header}>Log In</Text>


    <View style={styles.inputContainer}>
    <Ionicons name="person-outline" size={20} color="gray" style={styles.icon} />
     <TextInput
        style={styles.input}
        placeholder="Username"
        />
    </View>

    <View style={styles.inputContainer}> 

    <Ionicons name="lock" size={20} color="gray" style={styles.icon} />
     <TextInput
        style={styles.input}
        placeholder="Password"
        />
    </View>

    <TouchableOpacity 
    style={styles.Btn}
    onPress={handleLoading}
    disabled={loading}>
        {loading ? (
            <ActivityIndicator size="small" color="white" />
        ): (
        <Text style={styles.txt}> Log In</Text>
        )}
    </TouchableOpacity>

    <Pressable
    style={styles.msg}
    onPress={() => {
        Alert.alert("Register in Sign up page")
    }}>
    <Text> Dont have an account? Sign-up</Text>
    </Pressable>
</View>
    )
}

const styles = StyleSheet.create({
    container:{
        gap: 10,
    },
    Header:{
        fontSize: 50,
        textAlign: "center",
        fontWeight: "bold",
    },
    inputContainer:{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginTop: 10,
        paddingVertical: 5,
    },
    input:{
        flex: 1,
        // width: 350,
        paddingVertical: 8,
        // paddingHorizontal:150,
        fontSize: 16,
        // position: 'relative',
    },
    Btn:{
        backgroundColor: "blue",
        marginTop: 20,
        paddingVertical: 10,
        width: 380,
    },
    txt:{
        textAlign: "center",
        color: "white",
        fontSize: 20,
    },
    icon:{
        marginRight: 5,
    },
    msg:{
        alignItems: "center",
        marginTop: 40,
    }
})