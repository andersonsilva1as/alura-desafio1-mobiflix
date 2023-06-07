import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/header";

import CategoryFilter from "./components/categoryfilter";
import { colorsFilter } from "../../style/colors";
import Banner from "./components/banner";


export default function Home(){
    return (
    <View style = {styles.container}>
        <Header/>
        <Banner/>
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