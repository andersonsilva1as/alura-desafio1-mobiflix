import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Header(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>MOBFLIX</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 0,
        height: 86,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,
    },
    text: {
        marginTop: 38,
        color: '#2478DF',
        fontFamily: 'BebasNeue-Regular',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 38,        
    }
})