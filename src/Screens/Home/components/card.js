import React from "react";
import { View, FlatList, Text, StyleSheet, Image} from "react-native"

import Button from "../../../Componentes/button";
import img1 from "../../../assets/image/1.png"
import { myColors } from "../../../style/colors";

const Card = () => {
    const Item = () => {
        return(
            <View style = {styles.container}>  
                <Button
                label={'Anderson'}
                pressed={() => console.log('teste')}
                large={false}
                backGround={myColors.strongRed}
                />
                <Image source={img1}/>
            </View>
        )
    };
    return (
        <FlatList
        renderItem={() => <Item/>}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        // width: 320,
        height: 220,
        marginLeft: 35,
        marginRight: 35,
        top: 312,
        justifyContent: 'center',
    }
})

export default Card;
