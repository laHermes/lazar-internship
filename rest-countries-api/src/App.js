import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Heading from './components/Heading/Heading'
import { Container } from "./components/Container/Container";
import Card from './components/Card/Card'

function App() {
  const [data, setData] = useState([]);
  const [region, setRegion] = useState();
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);


const changeToAsia = () =>{
setRegion("Asia");

}

  return (
    <div className="App">
    <Heading/>
    <button onClick={changeToAsia} >Change to asia</button>

{/* <Main> */}


<Container>

<Card/>
      {data.map((country) => {
        if(!region){
          return (
            <div>
              <h2>{country.name}</h2>
              <p>{country.region}</p>
            </div>
          );

        }
        else if (country.region === region) {
          return (
            <div>
              <h2>{country.name}</h2>
              <p>{country.region}</p>
            </div>
          );
        }
      })}
</Container>
    </div>
  );
}

export default App;
