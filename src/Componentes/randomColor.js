import React, { useState, useEffect } from "react";
import { myColors } from "../style/colors";

const shuffledColors = [...myColors.list].sort(() => 0.5 - Math.random());

const RandomColor = () => {
  const [buttonColors, setButtonColors] = useState([]);
  const index = 0; // Atribua um valor a 'index' aqui

  useEffect(() => {
    setButtonColors(shuffledColors);
  }, []);

  const colorValue = Object.values(buttonColors[index])[0];

  return colorValue;
};

export default RandonColor;
