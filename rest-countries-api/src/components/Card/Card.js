import React from "react";
import {CardStyles} from './Card.styles'

function Card(props) {
  return (
    <CardStyles>
      <div className="hero">
        <img src="" alt="" />
      </div>
      <h3>Country</h3>
      <ul>
        <li>
          <h2>Population:</h2>
        </li>
        <li>
          <h2>Region:</h2>
        </li>
        <li>
          <h2>Capital:</h2>
        </li>
      </ul>
    </CardStyles>
  );
}

export default Card;
