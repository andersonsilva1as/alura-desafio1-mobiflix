import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { myColors } from "../style/colors";

export default function Imputs({label, text, placeHolder}){
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{label}</Text>
            <TextInput
            style = {styles.imput}
            placeholder={placeHolder}
            placeholderTextColor={myColors.grey}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 318,
        height: 75,
        marginTop: 32,
        top: 32,
        left: 36,
    },
    text: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 14,
        height: 16,
        color: myColors.white,
        top: '3%',
        },
    imput:{
        marginTop: 12,
        backgroundColor: myColors.brightBlue,
        borderRadius: 8,
        alignItems: 'center',
    }
})