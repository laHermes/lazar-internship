import React from "react";
import { CardStyles } from "./CardStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Card(props) {
  console.log(props.data);
  return (
    <React.Fragment>
    <Link to={`/${props.data.alpha3Code}`}>

    <CardStyles>
      <div className="hero">
        <img src={props.data.flag} alt="" />
      </div>
      <div className="info-holder">
        <h3>{props.data.name}</h3>
        <ul>
          <li>
            <h5>Population:</h5>&nbsp;
            {props.data.population.toLocaleString()}
          </li>
          <li>
            <h5>Region:</h5>&nbsp;
            {props.data.region}
          </li>
          <li>
            <h5>Capital:</h5>&nbsp;
            {props.data.capital}
          </li>
        </ul>
      </div>
    </CardStyles>
    </Link>
    </React.Fragment>
  );
}

export default Card;
