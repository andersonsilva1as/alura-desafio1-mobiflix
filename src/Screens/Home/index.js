import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/header";

import { myColors } from "../../style/colors";
import CategoryFilter from "./components/categoryfilter";
import Banner from "./components/banner";
import Card from "./components/card";

export default function Home(){
    return (
    <View style = {styles.container}>
        <Header/>
        <Banner/>
        <CategoryFilter/>
        <Card/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.veryDarkGrey
    }
})