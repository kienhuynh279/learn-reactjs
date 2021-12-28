import React from "react";
import useMagicColor from "../../hooks/useMagicColor";
import "./MagicBox.scss";

MagicBoxFeature.propTypes = {};

function MagicBoxFeature(props) {
  const color = useMagicColor();

  return <div className="box-color" style={{ backgroundColor: color }}></div>;
}

export default MagicBoxFeature;
