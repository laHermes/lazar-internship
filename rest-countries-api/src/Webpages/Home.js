import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../components/Container/Container";
import Card from "../components/Card/Card";
import ViewDetails from "./ViewDetails";
import InputBar from "../components/InputBar/InputBar";

function Home() {
  const [data, setData] = useState([]);
  const [region, setRegion] = useState();
  const [countryName, setCountryName] = useState();

  //Get data from url
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <React.Fragment>
      <InputBar setRegion={setRegion} setCountryName={setCountryName} />
      <Container>
      {/* Prints array for each country */}
        {data.map((country) => {
          if (!region && !countryName) {
            return <Card data={country} />;
          } else if (country.region === region) {
            return <Card data={country} />;
          } else if (
            !region &&
            countryName &&
            country.name.toUpperCase().includes(countryName.toUpperCase())
          ) {
            return <Card data={country} />;
          }
        })}
      </Container>
    </React.Fragment>
  );
}

export default Home;
