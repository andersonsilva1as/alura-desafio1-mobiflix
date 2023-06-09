import React from "react";
import { View,Image, StyleSheet, TouchableOpacity, Text } from "react-native";

import imgBanner from "../../../assets/image/Banner.png"

export default function Banner(){
    return(
        <View style = {styles.container}>
            <Image source={imgBanner} style = {styles.imageBanner}/>
            <TouchableOpacity style = {styles.buttonBanner} onPress={() => console.log('teste banner')}>
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
        left: 129,
        top: 74.54,
        end: 21.15,
    },
    textButtonBanner:{
        fontFamily: 'Roboto',
        fontSize: 18,
        lineHeight: 21.09,
        color: '#FFFFFF'
    }
})

