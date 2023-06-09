import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import setCourses from "../../../Hooks/setCourses";

import { colorsFilter } from "../../../style/colors";
import Button from "../../../Componentes/button";
//import RandomCor from "../../../Componentes/randomColor";

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
      <Button 
      pressed = {() => console.log('teste label')}
      label={name}
      backGround={colorValue}
      >
      </Button>
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


export default CategoryFilter;

