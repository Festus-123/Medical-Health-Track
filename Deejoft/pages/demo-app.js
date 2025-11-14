import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Alert
} from "react-native";
import Toggle from "./toggle";



export default function Demo(){
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);

    const addNote = () => {
        if(note.trim() === "") return Alert.alert("❌ Note cannot be empty");
        setNotes([...notes, note])
        setNote("")
    }

    const deleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index))
    }

    return(
        <>
        <View style={styles.container}>
            <Text style={styles.Header}>📝 My Note</Text>
            <TextInput
             style={styles.noteImput} 
             multiline
             placeholder="Enter notes here"
             value={note}
             onChangeText={setNote} />

        <FlatList 
        style={styles.displayNotes}
        data={notes}
        renderItem={({item, index}) => (
            <View style={styles.noteItem}>
                <Text style={styles.noteText}>{item}</Text>
                <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteNote(index)}>
                    <Text style={styles.delete} >Delete</Text>
                </TouchableOpacity>
            </View>
        )} />

        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.addBtn} onPress={addNote}>
                <Text style={styles.addTxt}>Add</Text>
            </TouchableOpacity>
        </View>

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#dff8f4ff',

        width: "100%"
    },
    noteImput:{
        width: 350,

        maxWidth: 380,
        maxHeight: 200,
        borderBottomWidth: 0.5,
        borderColor: "green",
        padding: 10,
        fontSize: 20,

    },
    Header:{
        fontSize: 50,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20,
    },


    displayNotes:{
        // height: 50,
        maxHeight: 400,
        marginTop: 20,
        width: "90%",
        paddingVertical: 0,

        borderRadius: 20,
    },
    noteItem:{
        backgroundColor: "#98949451",
        padding: 10,
        borderRadius: 20,
        gap: 10,

        marginTop: 10,
    },
    noteText:{
        fontSize: 15,
    },



    btnContainer:{
        marginTop: 20,
        width: "90%",
    },
    addBtn:{
        width: "100%",
        backgroundColor: "blue",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 20,
    },
    addTxt:{
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },

    deleteBtn:{
        backgroundColor: "red",
        // paddingHorizontal: 40,
        paddingVertical: 5,
        color: "white",
        fontSize: 15,    
        borderRadius: 20,   
    },
    delete:{
        textAlign: "center",
        color: "white"
    }

})