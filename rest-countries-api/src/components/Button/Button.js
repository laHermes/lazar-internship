import React from "react";
import { ButtonStyles } from "./ButtonStyles";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <ButtonStyles>
      <Link onClick={() => props.setCode(props.link)} to={`/${props.link}`}>
        {props.text}
      </Link>
    </ButtonStyles>
  );
}

export default Button;
