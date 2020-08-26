import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container } from "../components/Container/Container";

import axios from "axios";
import Button from "../components/Button/Button";

function ViewDetails({ match }) {
  const [item, setItem] = useState([]);
  const [borders, setBorders] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [code, setCode] = useState(match.params.id);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${code}`)
      .then((res) => {
        setItem(res.data);
        setBorders(res.data.borders);
        setLanguages(res.data.languages);
        console.log(res.data.languages);
      })
      .catch((err) => console.log(err));
    return () => {};
  }, [code]);

  return (
    <Container>
      <p>{item.name}</p>
      <p>{item.nativeName}</p>
      <img src={item.flag} alt="flag" />
      <ul>
        <li>Languages: 
          {languages.map((language) => (
            <h4>{language.name}</h4>
          ))}
        </li>
      </ul>
      <br />
      <ul>
        {borders.map((border) => (
          <li>
            <Button
              setCode={setCode}
              link={border}
              text={border}
            ></Button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default ViewDetails;
