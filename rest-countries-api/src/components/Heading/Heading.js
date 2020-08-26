import React from "react";
import { HeadingStyle } from "./HeadingStyles";
import { RiMoonLine } from "react-icons/ri";

function Heading() {
  return (
    <HeadingStyle>
      <div className="container">
        <div  className="logo">Where in the world?</div>
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
