import React, { useState, useEffect } from "react";
import { FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";

import setCourses from "../../../Hooks/setCourses";

import { colorsFilter } from "../../../style/colors";

// Embaralha a lista de cores
const shuffledColors = [...colorsFilter.list].sort(() => 0.5 - Math.random());

const CategoryFilter = () => {
  const [list] = setCourses();
  const [buttonColors, setButtonColors] = useState([]);

  useEffect(() => {
    setButtonColors(shuffledColors);
  }, []);

  const Item = ({ name, index }) => {
    const colorValue = Object.values(buttonColors[index])[0];

    return (
      <TouchableOpacity style={[styles.button, { backgroundColor: colorValue }]} onPress={ () => console.log('teste ok')}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={list}
      renderItem={({ item, index }) => <Item name={item.name} index={index} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}; 

const styles = StyleSheet.create({
  button: {
    width: 116,
    height: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    marginLeft: 6,
    marginTop: 28,
    marginBottom: 28,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    lineHeight: 18.75,
  },
});

export default CategoryFilter;

