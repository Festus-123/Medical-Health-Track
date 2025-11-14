import React from 'react'
import { View, StyleSheet } from 'react-native';

// import { StyleSheet} from "react-native";
import { useNavigation } from 'expo-router';


import ModesComponent from './components/ModesComponent';

const ModeScreen = () => {

  const navigation = useNavigation()

  const handleNavigation = (screen) => {
    navigation.navigate(screen)
  }
  return (
    <View style={styles.container}> 
        <ModesComponent  onPress={() => handleNavigation('Calculator')} ModeObject = "Calculator" icon={"calculator"}/>
        <ModesComponent  ModeObject = "Calendar" icon={'calendar'} />
    </View>
  )
}

export default ModeScreen

const styles = StyleSheet.create({
    container:{
      flexDirection: "row",
      marginTop: 10
    }
})
