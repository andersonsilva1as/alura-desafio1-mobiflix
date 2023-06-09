import React from "react";
import { View, FlatList, StyleSheet, Image } from "react-native";

import Button from "../../../Componentes/button";
import { myColors } from "../../../style/colors";

const DATA = [
  {
    id: 1,
    src: require("../../../assets/image/1.png")
  },
  {
    id: 2,
    src: require("../../../assets/image/2.png")
  },
  {
    id: 3,
    src: require("../../../assets/image/3.png")
  },
];

const renderItem = ({ item }) => 
    (
        <View style={styles.container}>
            <Button
            label={'Anderson'}
            pressed={() => console.log('teste')}
            large={false}
            backGround={myColors.strongRed}
            />
            <Image source={item.src} style={styles.img} />
        </View>
);

const Card = () => {
  return (
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // width: 320,
    height: 220,
    marginLeft: 35,
    marginRight: 35,
    top: 312,
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 100,
  }
});

export default Card;
