import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container } from "../components/Container/Container";
import InfoHolder from "../components/InfoHolder/InfoHolder";
import axios from "axios";
import Button from "../components/Button/Button";

function ViewDetails({ match }) {
  const [item, setItem] = useState([]);
  const [borders, setBorders] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [code, setCode] = useState(match.params.id);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${code}`)
      .then((res) => {
        setItem(res.data);
        setBorders(res.data.borders);
        setLanguages(res.data.languages);
        setCurrencies(res.data.currencies);
        console.log(res.data.languages);
      })
      .catch((err) => console.log(err));
    return () => {};
  }, [code]);

  return (
    <Container>
      <InfoHolder
        data={item}
        currencies={currencies}
        setCode={setCode}
        borders={borders}
        languages={languages}
      />
    </Container>
  );
}

export default ViewDetails;
