import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Button from "./components/button-component";
import Commands from "./components/commands";
import Display from "./components/Display";

const Calculator = () => {
    const [Expressing, setExpressing] = useState("")
    const [Result, setResult] = useState(null)



    const displayChar = (char) => {

        const isNumber = /[0-9.]/.test(char);

        if(!display){
            if(isNumber){
                setExpressing(char);
                setResult(null)
                setDisplay(true)
            }else{
                setExpressing(String(Result) + char);
                setDisplay(true)
                setResult(null)
            }
        }else{
            setExpressing(prev => prev + char)
        }
    }
    const calculate = () => {
        try{
            setDisplay(false)
            const safeExpr = Expressing.replace(/%/g, "/100");
            setResult(eval(safeExpr))
            // setExpressing("")
        }catch(error){
            setResult("Error")
        }
    }
    const Clear = () => {
        setResult(null)
        setExpressing("")
    }
    const handleBackSpace = () => {
        if(display){
            setExpressing(prev => prev.slice(0, -1))
        }else{
            setResult(prev => String(prev).slice(0, -1))
        }
    }
    const handleNegativeExpression = () => {
        if(display){
            setExpressing(prev => -prev)
        }else{
            setResult(prev => String(-prev))
        }
    }

    const [bracket, setBrackets] = useState(true)
    const [display, setDisplay] = useState(false)
    return (

        <View style={styles.container}>

            <Display result={display ? Expressing : Result} />


            <View style={styles.commandArea}>
            <Commands iconName={"backspace-outline"} position={"right"} onPress={() => handleBackSpace()}/>
            </View>

            <View style={styles.keysContainer}>
            <Button Char={"C"} onPress={() => Clear()}/>
            <Button Char={"()"} onPress={() => displayChar([bracket ? '(' : ')'], setBrackets(!bracket))} />
            <Button Char={"%"} onPress={() => displayChar("%")}/>
            <Button Char={"/"} onPress={() => displayChar("/")}/>
            <Button Char={"7"} onPress={() => displayChar("7")}/>
            <Button Char={"8"} onPress={() => displayChar("8")}/>
            <Button Char={"9"} onPress={() => displayChar("9")}/>
            <Button Char={"*"} onPress={() => displayChar("*")}/>
            <Button Char={"4"} onPress={() => displayChar("4")}/>
            <Button Char={"5"} onPress={() => displayChar("5")}/>
            <Button Char={"6"} onPress={() => displayChar("6")}/>
            <Button Char={"-"} onPress={() => displayChar("-")}/>
            <Button Char={"1"} onPress={() => displayChar("1")}/>
            <Button Char={"2"} onPress={() => displayChar("2")}/>
            <Button Char={"3"} onPress={() => displayChar("3")}/>
            <Button Char={"+"} onPress={() => displayChar("+")}/>
            <Button Char={"+/-"} onPress={() => handleNegativeExpression()}/>
            <Button Char={"0"} onPress={() => displayChar("0")}/>
            <Button Char={"."} onPress={() => displayChar(".")}/>
            <Button Char={"="} operate={"operate"} onPress={calculate}/>
            </View>
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        bottom: 40,
        left: 20,
    },
    keysContainer :{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 15,
    },
    commandArea:{
        borderBottomWidth: 0.5,
        marginBottom: 20,
        borderColor: "#a3a2a2ff",
        width: 380
    }
})