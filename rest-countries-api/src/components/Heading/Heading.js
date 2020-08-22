import React from "react";
import { HeadingStyle } from "./Heading.styles";
import { RiMoonLine } from "react-icons/ri";
import { Container } from "../Container/Container";

function Heading() {
  return (
    <HeadingStyle>
      <div className="container">
        <div className="logo">Where in the world?</div>
        <ul>
          <li>
            <RiMoonLine />
          </li>
          <li>Dark Mode</li>
        </ul>
      </div>
    </HeadingStyle>
  );
}

export default Heading;
