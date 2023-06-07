import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { myColors } from "../style/colors";

const Button = ({label, pressed, large = true, backGround}) => {
    const containerStyle = {
        width: large ? 144 : 94,
        height: 32,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
        marginLeft: large ? 6 : 0,
        marginTop: large ? 28 : 0,
        marginBottom: large ? 28 : 8,
        ...styles.shadowProps,
        backgroundColor: backGround,
      };
    return (
        <TouchableOpacity style = {[styles.container, containerStyle, {backgroundColor: backGround}]} onPress={pressed}>
            <Text style= {styles.textButton}>{label}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    
    shadowProps: {
        elevation: 4,
        shadowColor: myColors.veryDarkGrey
    },
    textButton: {
        fontSize: 16,
        lineHeight: 18.75,
        color: myColors.veryLightGrey
    }
})

export default Button;