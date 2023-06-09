import React from "react";
import { Text, StyleSheet, View } from "react-native";
import color from "../Hooks/color";
import { myColors } from "../style/colors";

export default function Title({label}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        width: 318,
        height: 38,
        left: 36,
        top: 36,
        marginTop: 32,
        bottom: 32,
        fontFamily: ''
    },
    text:{
        fontSize: 32,
        lineHeight: 37.5,
        fontWeight: 700,
        color: myColors.white,
        
    }
})