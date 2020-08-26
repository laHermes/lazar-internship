import React from "react";
import { InputStyled } from "./InputStyles";
import { FaSearch } from "react-icons/fa";

function Input(props) {
  const searchForCountry = (e) => {
    props.setRegion();
    props.setCountryName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <InputStyled>
      <FaSearch class="icon" />
      <input
        type="text"
        onChange={searchForCountry}
        placeholder="Enter some text"
      />
    </InputStyled>
  );
}
export default Input;
