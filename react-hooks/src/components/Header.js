import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../login";

function Header(props) {
  const { value, setValue } = useContext(UserContext);

  return (
    <header>
      <button onClick={props.onLoadAuth}>Auth</button> |{" "}
      <button onClick={props.onLoadTodo}>Todo</button>
      <div>{JSON.stringify(value)}</div>
      {value ? (
        <button
          onClick={() => {
            setValue(null);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const value = await login();
            setValue(value);
          }}
        >
          Login
        </button>
      )}
    </header>
  );
}

export default Header;
