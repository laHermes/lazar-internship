import React, { useContext, useRef } from "react";
import { UserContext } from "../UserContext";

function Todo(props) {
  const { value, setValue } = useContext(UserContext);
  const todoInputRef = useRef();
  const todoName = todoInputRef.current.value;

  return (
    <div>
      <div>{JSON.stringify(value, null, 2)}</div>
      <input onChange={props.change} type="text" ref={todoInputRef} />
      <button disabled={!props.value} type="button" onClick={props.click}>
        Add me
      </button>
      <button onClick={() => setValue("Dobar Dan svima zelim")}>
        changevalue
      </button>
    </div>
  );
}

export default Todo;
