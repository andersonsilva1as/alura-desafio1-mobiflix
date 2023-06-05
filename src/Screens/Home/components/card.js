import React from "react";
import { View,Image, StyleSheet, TouchableOpacity, Text } from "react-native";

import Banner from "../../../assets/image/Banner.png"

export default function Card(){
    return(
        <View style = {styles.container}>
            <Image source={Banner} style = {styles.imageBanner}/>
            <TouchableOpacity style = {styles.buttonBanner}>
                <Text style = {styles.textButtonBanner}>Assista Agora</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    imageBanner:{
        width: '100%',
        height: 138,
    },
    buttonBanner: {
        width: 128,
        height: 42.31,
        borderRadius: 8,
        position: 'absolute',
        backgroundColor:'#2478DF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 129,
        marginTop: 74.54,
        marginEnd: 21.15,
    },
    textButtonBanner:{
        fontFamily: 'Roboto',
        fontSize: 18,
        lineHeight: 21.09,
        color: '#FFFFFF'
    }
})