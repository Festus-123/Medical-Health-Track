import React, { useState } from "react";
// import { useState, useRef } from "react";
import {
    StyleSheet,
    View,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { SearchBar } from "react-native-elements";

const Search = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const [value, setValue] = useState("");

    const handleSearch = (text) => {
        setValue(text)
        navigation.setParams({ search: text})
    }
    return (
        <View style={styles.container}>

            <SearchBar 
            placeholder="Search Here..."
            lightTheme
            round
            value={value}
            onChangeText={handleSearch}
            autoCorrect={true}
            backgroundColor="white"
            containerStyle={{
                backgroundColor: "transparent",
                borderWidth: 0,
                borderColor: "black",
                borderTopWidth: 0,
                borderBottomWidth: 0,
                padding: 0,
                margin: 0,
                width: "90%",
            }}
            inputContainerStyle={{
                backgroundColor: "white",
                borderRadius: 30,
                margin: 0,
                paddingHorizontal: 5
            }}
            inputStyle={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
            }}
            searchIcon={{size: 24, color: "#00BBD3", transform: [{scaleX: -1}]}}
            clearIcon={{size: 24, color: "black"}}
            cancelIcon={{size: 24, color: "black"}}
            />

    </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        // padding: 10,
        alignItems: "center",
        width: "100%"
    },

})