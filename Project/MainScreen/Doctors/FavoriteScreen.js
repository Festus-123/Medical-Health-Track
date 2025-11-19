import React  from 'react';
import { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { imageSource } from '../../../components/vectors';

import FIlterView from '../../../components/FilterView';
import FavoriteDoctorProfileView from '../../../components/FavoriteDoctorProfileView';
import FavoriteServices from '../../../components/FavoriteServices';

const ActiveBtn = ({ title, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.activeBtnArea}
            onPress={onPress}>
            <LinearGradient
                colors={['#33E4DB', '#00BBD3']}
                style={styles.activeBtn}>
                <Text style={{ color: '#ffffff', fontSize: 20}}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const InActiveBtn = ({ title, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.InactiveBtnArea}
            onPress={onPress}>
                <Text style={{ color: '#000000', fontSize: 20}}>
                    {title}
                </Text>
        </TouchableOpacity>
    )
}

   const Lists = [[
        "Dr. Daniel Rodriguez",
        "Dr. Jessica Ramirez",
        "Dr. Michael Chang",
        "Dr. Michael Davidson, M.D.",
        "Dr. Ibamigboye Kolinton"
    ],

    [
        "Interventional Cardiologist",
        "Electrophysiologist",
        "Cardiac Imaging Specialist",
        "Cardiology",
        "Intensive Cardiologist"
    ],
    [
        "MaleDoctor",
        "FemaleDoctor",
        "MaleDoctor",
        "FemaleDoctor",
        "MaleDoctor"
    ],
    [
        "Cardiology",
        "Dermatology",
        "General Medicine",
        "Gynecology",
        "Odontology",
        "Oncology",
        "Ophtamology",
        "Orthopedics"
    ]]


const details = Lists[0].map((name, i) => {
    // const imgName = name.includes(name.slice(4, 7))
    return {
        name,
        title: Lists[1][i],
        source: imageSource[Lists[2][i]],
    }
})

const Services = Lists[3].map((doc, index) => {
    return {
        doc,
        index
    }
})


const FavoriteScreen = () => {
    const [current, setCurrent] = useState("Doctors")
    const [active, setActive] = useState()
    // const [inactive, setInactive] = useState()
     const [filterd, setFilter] = useState(false)
    
        let filteredList;
        let filteredService;
    
        if(filterd){
            filteredList = details.sort((a, b) => 
                b.name.localeCompare(a.name)
            )
            filteredService = Services.sort((a, b) =>
                b.doc.localeCompare(a.doc)
            )
        }else{
            filteredList = details.sort((a, b) => 
                a.name.localeCompare(b.name)
            )
            filteredService = Services.sort((b, a) =>
                a.doc.localeCompare(b.doc)
            )
        }
        
        const handleFIlter = () => {
            setFilter(!filterd)
        }


    const onClickEvent1 = () => {
        setCurrent('Doctors')

        if(current === "Doctors"){
            setActive(!active)
            // setCurrent("Services")
        }
    }

  return (
    <View style={styles.container}>
        <FIlterView 
            alphabethArrange={filterd ? 'Z - A' : 'A - Z'}
            alphabeticalFIlterAction={handleFIlter}/>

        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "90%",
                marginTop: 20,
                marginBottom: 15
            }}>
                
                { current === "Doctors" ? 
                    active ? 
                    (<ActiveBtn 
                        title={'Doctors'}
                       />) :
                    ( <InActiveBtn 
                        title={'Doctors'}
                        onPress={onClickEvent1}/>)
                 : null   
                }

                { current === "Doctors" ? 
                    !active ? 
                    (<ActiveBtn 
                        title={'Services'}
                        />) :
                    ( <InActiveBtn 
                        title={'Services'}
                        onPress={onClickEvent1}/>)
                 : null   
                }
        </View>

        <View>
            { current === 'Doctors' && active ? 
                (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='handled'
                        contentContainerStyle={{
                            width: 380,
                            alignItems: "center",
                            flexGrow: 1,
                            paddingBottom: 100
                        }}>
                            { filteredList.map( (doc, index) => (
                                <FavoriteDoctorProfileView 
                                    key={index}
                                    source={doc.source}
                                    DoctorName={doc.name}
                                    DoctorTitle={doc.title}/>
                            ))}
                    </ScrollView>
                ) : (
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='handled'
                        contentContainerStyle={{
                            width: 380,
                            alignItems: "center",
                            flexGrow: 1,
                            paddingBottom: 130,
                            gap: 10
                        }}>

                        { filteredService.map( (doc, index) => (
                            <FavoriteServices 
                                key={index}
                                text={doc.doc}/>
                        ))}
                    </ScrollView>
                )}
        </View>

    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    activeBtnArea:{

    },
    activeBtn:{
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 25
    },
    InactiveBtnArea:{
        backgroundColor: "#ffffff",
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderWidth: 1,
        borderColor: '#00bad3aa',
        borderRadius: 25
    }
})