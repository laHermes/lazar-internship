import React from "react";

// ARROW FUNCTION CAN BE USED
function Person(props) {
  return (
    <div>
      <p>
        ALOHA, I am a person, my name is {props.name} and I am {props.age}!
        {/* I AM A PERSON! AND I AM {Math.floor(Math.random() * 30)} YEARS OLD */}
      </p>
      <p>{props.children}</p>
    </div>
  );
}

export default Person;
