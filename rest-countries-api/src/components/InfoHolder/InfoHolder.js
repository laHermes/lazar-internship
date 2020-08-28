import React from "react";
import { InfoHolderStyles } from "./InfoHolderStyles";
import Button from "../Button/Button";
function InfoHolder(props) {
  return (
    <InfoHolderStyles>
      <div className="flag-holder">
        <img src={props.data.flag} alt="flag" />
      </div>
      <div className="info-holder">
        <h1>{props.data.name}</h1>
        <div className="text-holder">
          <ul>
            <li>Native name: {props.data.nativeName}</li>
            <li>Population: {props.data.population}</li>
            <li>Region: {props.data.region}</li>
            <li>Subregion: {props.data.subregion}</li>
            <li>Capital: {props.data.capital}</li>
          </ul>
          <ul>
            <li>Top Level Domain: {props.data.topLevelDomain}</li>
            <li>
              Currencies: 
              {props.currencies.map((currency) => (
                <p>{currency.name}</p>
              ))}
            </li>
            <li>
              Languages : 
              {props.languages.map((language) => (
                <p>{language.name}  &nbsp;</p>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <ul>
        {props.borders.map((border) => (
          <li>
            <Button
              setCode={props.setCode}
              link={border}
              text={border}
            ></Button>
          </li>
        ))}
      </ul>
    </InfoHolderStyles>
  );
}

export default InfoHolder;
