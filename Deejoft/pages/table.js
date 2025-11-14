import React from "react";
import {
    StyleSheet,
    Text
} from "react-native";
import { DataTable } from "react-native-paper";

export default function Table(){

    return(
        <DataTable style={styles.container}>

            
            {/* The Time  */}
            <DataTable.Row style={styles.headerRow}>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}></DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 15}}> 9AM-10AM</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 15}}>10AM-11AM</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 15}}>11AM-12PM</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 15}}>12PM-1PM</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 15}}>1PM-2PM</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 15}}>2PM-2:30PM</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 15}}>2:30PM-3:30PM</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 15}}>3:30PM-4:30PM</Text>
                </DataTable.Cell>
            </DataTable.Row>
            {/* mONDAY TIME TABLE */}
            <DataTable.Row style={styles.tableRow}>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>Monday</DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}> Faridah, Busari (Tesla Room) Mr samuel Barakhat (Catalyst) Inioluwa Quadri </Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Jerry(Catalyst Chamber) Tobiloba (Innovation) Abdulazeez Okiki Emmanuel (Tesla) Akeem</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Adewumi (Tesla) Olamide (Catalyst Chamber) Nifemi Cyber</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Olaoluw, Victor, Adebayo (Tesla Room) Micheal (Catalyst)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Al ameen Lekan (Wisdom Hall) Salam&Olamide (Wsdom Hall)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Break</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Mubrak</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}></Text>
                </DataTable.Cell>
            </DataTable.Row>

            {/* TUESDAY TIME TABLE */}
            <DataTable.Row style={styles.tableRow}>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>Tuesday</DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}> Inioluwa Quadri </Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Mubarak Abdulazeez</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Daniel (Python) Fetus (Innovation)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Micheal (Catalyst) Lekan (Wisdom Hall) Adewumi</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Wisdom, Al Ameen</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Break</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Afolabi Francis (Wisdom Hall)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}></Text>
                </DataTable.Cell>
            </DataTable.Row>

            {/* WEDNESSDAY TIME TABLE */}
            <DataTable.Row style={styles.tableRow}>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>Wednessday</DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Pamilerin (catalyst) Nifemi Cyber Barakhat</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Festus (Innovation) Abdulazeez, Tobiloba, Akeem</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Olaoluwa Adebayo, Victor(Tesla Room)  Busari Faridah (Wisdom) Tobiloba (Wisdom Hall)  Jerry(Catalyst)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Olaoluwa, Adebayo, Python (Robotics Lab) Okiki & Emmanuel (Wisdom)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Olamide & Salami</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Break</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Afolabi Francis (Wisdom Hall), Wisdom</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}></Text>
                </DataTable.Cell>
            </DataTable.Row>

            {/* THURSAY TIME TABLE */}
            <DataTable.Row style={styles.tableRow}>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>Thursday</DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Mr samuel (Tesla Room) Barakhat</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Lekan (Tesla),  Festus (Innovation) </Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Olaoluwa Adebayo, Victor(Tesla Room)  Wisdom Abdulazeez Micheal(Wisdom Hall)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Olaoluwa, Adebayo,  Daniel(Wisdom Hall)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Olamide (Catalyst Chamber)  Daniel(Tesla)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Break</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Femi (Robotics Lab) Daniel (Tesla)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Afolabi Francis (Tesla)</Text>
                </DataTable.Cell>
            </DataTable.Row>

            {/* FRIDAY TIME TABLE */}
            <DataTable.Row style={styles.tableRow}>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>Friday</DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Barakhat Quadri</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Jerry (Catalyst)  Nifemi Cyber Mubarak(Innovation) Adewumi  Akeem </Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Okiki & Emmanuel (Tesla)  Salm & Olamide (Wisdom Hall)  Olamide (Tesla[)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Micheal (catalyst Chamber)  Tobiloba</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Daniel(Tesla Room)  Gold</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Break</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Femi (Robotics Lab) Daniel (Tesla room)</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2, margin: 5, borderRightWidth: 0.5,}}>
                    <Text style={{flexWrap: "wrap", fontSize: 10}}>Mr Tunji</Text>
                </DataTable.Cell>
            </DataTable.Row>
            
        </DataTable>
    )
}

const styles = StyleSheet.create({
    container:{
        // padding: 5,
        width: "100%"
    },
    headerRow:{
        backgroundColor: "#6d5c5c64",
        // height: 50,
    },
    tableRow:{
        height: 150,
    },
})