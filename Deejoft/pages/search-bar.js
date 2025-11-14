import React from "react";
// import { useState, useRef } from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert,
} from "react-native";
import { SearchBar } from "react-native-elements";

const DATA = [
    {id: 1, title: "Data Structures"},
    {id: 2, title: "STL"},
    {id: 3, title: "C++"},
    {id: 4, title: "Java"},
    {id: 5, title: "Python"},
    {id: 6, title: "CP"},
    {id: 7, title: "ReactJs"},
    {id: 8, title: "NodeJS"},
    {id: 9, title: "MongoDB"},
    {id: 10, title: "ExpressJs"},
    {id: 12, title: "PHP"},
    {id: 13, title: "MySQL"},
    {id: 14, title: "Django"},
    {id: 15, title: "React-Native"},
    {id: 16, title: "Go lang"},
]

const Search = () => {
    const deleteFunction = (id) => {
            setData(data.filter((item) => item.id !== id))
            Alert.alert(`successfully deleted this item `)
    }
    
    const Item = ({id, title}) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{title}</Text>
            <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteFunction(id)}>
                <Text style={styles.deleteTxt}>Delete</Text>
            </TouchableOpacity>
        </View>
    )

    const [data, setData] = React.useState(DATA);
    const [searchValue, setSearchValue] = React.useState("");
    const arrayHolder = React.useRef(DATA)

    const searchFunction = (text) => {
        const updateData = arrayHolder.current.filter((item) => {
            const itemData = item.title.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.includes(textData);
        });
        setData(updateData)
        setSearchValue(text)
    }
    return (
        <View style={styles.container}>

        <SearchBar 
        placeholder="Search Here..."
        lightTheme
        round
        value={searchValue}
        onChangeText={searchFunction}
        autoCorrect={true}
        backgroundColor="white"
        containerStyle={{
            backgroundColor: "white",
            borderColor: "black",
            borderTopWidth: 0,
            borderBottomWidth: 0,
            padding: 20
        }}
        inputContainerStyle={{
            backgroundColor: "lightgrey",
            borderRadius: 10,
        }}
        inputStyle={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
        }}
        searchIcon={{size: 24, color: "black"}}
        clearIcon={{size: 24, color: "black"}}
        cancelIcon={{size: 24, color: "black"}}
        />
        <FlatList 
            data={data}
            renderItem={({ item }) => <Item id={item.id} title={item.title} />} 
            keyExtractor={(item) => item.id.toString()}
        />
    </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        padding: 10,
    },
    item:{
        backgroundColor: "blue",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: "row",
       justifyContent: "space-between"
    },
    itemText:{
        color: "white",
        fontSize: 18,
    },
    deleteBtn:{
        backgroundColor: "red",
        width: 50,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderColor: "white",
        borderWidth: 1
    },
    deleteTxt:{
        color: "white"
    }
})