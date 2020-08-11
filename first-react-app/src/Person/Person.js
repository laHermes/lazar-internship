import React from "react";
import './Person.css'


// ARROW FUNCTION CAN BE USED
function Person(props) {
  return (
    <div className='Person'>
      <p onClick={props.click}>
        ALOHA, I am a person, my name is {props.name} and I am {props.age}!
        {/* I AM A PERSON! AND I AM {Math.floor(Math.random() * 30)} YEARS OLD */}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default Person;
