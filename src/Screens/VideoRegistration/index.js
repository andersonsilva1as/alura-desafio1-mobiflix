import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import Title from "../../Componentes/Title";
import Imputs from "../../Componentes/Imputs";
import { myColors } from "../../style/colors";
import LargeButton from "../../Componentes/largeButton";

export default function RegistrationVideo(){
    return(
        <View style={styles.container}>
            <Title
            label = "Cadastre um vídeo"
            />
            <Imputs
            label={'URL:'}
            placeHolder={'#Bas34sdHERDsR'}/>
            <Imputs
            label={'Categoria:'}
            placeHolder={'Mobile, BackEnd'}/>
            <Title
            label={"Preview"} />
            <Image
            style = {styles.img}
            source={require('../../assets/image/Rectangle 2.png')}/>
            <LargeButton
            label={'Cadastrar'}
            onPress={() => console.log('Teste large Button')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: myColors.veryDarkGreyBlack
    },
    img: {
        position: 'absolute',
        width: 318,
        height: 180,
    }
})