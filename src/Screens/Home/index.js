import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/header";
import Card from "./components/card";
import CategoryFilter from "./components/categoryfilter";
import { colorsFilter } from "../../style/colors";


export default function Home(){
    return (
    <View style = {styles.container}>
        <Header/>
        <Card/>
        <CategoryFilter/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsFilter.veryDarkGreyBlack
    }
})