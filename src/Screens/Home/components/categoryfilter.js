import React from "react";
import { FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";

import setCourses from "../../../Hooks/setCourses";

import { colorsFilter2 } from "../../../style/colors";


export default function CategoryFilter(){
    const [list] = setCourses()
    // colorsFilter2.forEach( (element) => console.log(element))
    
    // const [cor] = colorsFilter2.forEach((element) => element)
    console.log(colorsFilter2[2])
    
    const Item = ({name}) => (
        <TouchableOpacity style= {styles.button}>
            <Text style = {styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    )
    return(
            <FlatList
            data={list}
            renderItem={({item}) => <Item name={item.name}/>}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator = {false}
            />
    )
}

const styles = StyleSheet.create({
    button:{
        width: 116,
        height: 32,
        borderRadius: 12,
        backgroundColor: '',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
        marginTop: 28,
        marginBottom: 28,
    },
    buttonText:{
        color: '#FFF',
        fontSize: 16,
        lineHeight: 18.75
    }
})