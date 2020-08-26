import React from "react";
import { SelectStyled } from "./SelectorStyles";

function Selector(props) {
  const changeRegion = (e) => {
    props.setRegion(e.target.value);
    console.log(e.target.value);
  };
  return (
    <SelectStyled onClick={changeRegion}>
      <option value="">Filter by Region</option>
      <option value="Europe">Europe</option>
      <option value="Asia">Asia</option>
      <option value="Africa">Africa</option>
      <option value="Oceania">Oceania</option>
      <option value="Americas">Americas</option>
    </SelectStyled>
  );
}

export default Selector;
