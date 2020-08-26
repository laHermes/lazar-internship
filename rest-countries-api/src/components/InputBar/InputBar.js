import React from "react";
import Input from "./Input/Input";
import { Container } from "../Container/Container";
import { InputBarStyled } from "./InputBar.styles";
import Selector from "./Selector/Selector";

function InputBar(props) {
  return (
    <div>
      <InputBarStyled>
        <div className="container">
          <Input
            setCountryName={props.setCountryName}
            setRegion={props.setRegion}
          />
        <Selector setRegion={props.setRegion}/>
        </div>
      </InputBarStyled>
    </div>
  );
}

export default InputBar;
