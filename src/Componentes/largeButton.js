import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { myColors } from "../style/colors";

const LargeButton = ({label, onPress}) => {
    return (
        <TouchableOpacity style = {styles.container} onPress={onPress}>
            <Text style= {styles.textButton}>{label}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        width: 318,
        height: 48,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
        marginLeft: 36,
        marginTop: '50%',
        backgroundColor: myColors.brightBlue,
    },
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

export default LargeButton;