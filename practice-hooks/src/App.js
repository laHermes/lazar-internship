import React, { useContext, useState } from "react";
import "./App.css";
import { NumberContext } from "./NumberContext";
import Counter from "./components/Counter";
import styled from "styled-components";
import { Container } from "./components/Container";
import { SearchInput } from "./components/SearchInput";


function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Container>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <SearchInput>
        <input type="text" placeholder="hello"/>
        </SearchInput>
      </Container>
      <NumberContext.Provider value={{ value, setValue }}>
        <h1 className="Container">{`value is ${value}`}</h1>
        <Counter />
      </NumberContext.Provider>
    </div>
  );
}

export default App;
