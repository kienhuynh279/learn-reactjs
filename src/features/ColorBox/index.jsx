import React from "react";
import { useState } from "react";
import "./ColorBox.scss";

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "blue", "red", "white"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setcolor] = useState(() => {
    const initColor = localStorage.getItem("color_box") || "deepink";
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setcolor(newColor);
    localStorage.setItem("color_box", newColor);
  }
  return (
    <div
      className="color_box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
