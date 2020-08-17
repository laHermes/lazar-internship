import React, { useState, useContext } from "react";
import { NumberContext } from "../NumberContext";
import styled from "styled-components";

function Counter() {
  const [count, setCount] = useState(0);
  const { value, setValue } = useContext(NumberContext);

  const increaseCount = () => {
    let newPlusValue = count + 1;
    setCount(newPlusValue);
    setValue(newPlusValue);
  };

  const decreaseCount = () => {
    let newMinusValue = count - 1;
    setCount(newMinusValue);
    setValue(newMinusValue);
  };

  const Button = styled.button`
    width: 128px;
    min-width: 128px;
    margin: 0 auto;
    border: 1px solid black;
    padding: 15px;
  `;

  return (
    <div>
      <button onClick={increaseCount}>Increase</button>
      <h2>{count}</h2>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default Counter;
