import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  //useState()
  const [personState, setPersonState] = useState({
    person: [
      { name: "Lazar", age: "22" },
      { name: "Jovana", age: "23" },
      { name: "Misko", age: "135" },
    ],
    otherState: "some other value",
  });

  console.log(personState);

  const switchName = (newName) => {
    //CANT BE USED
    //WONT OVERWRITE otherState
    setPersonState({
      person: [
        { name: newName, age: "22" },
        { name: "Jean", age: "22" },
        { name: "Jean", age: "22" },
      ],
      otherState: personState.otherState,
    });
  };

  const nameChangedHandler = (e) => {
    setPersonState({
      person: [
        { name: "newName", age: "22" },
        { name: e.target.value, age: "22" },
        { name: "Jacques", age: "22" },
      ],
      otherState: personState.otherState,
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  const [username, setUsername] = useState("asd");
  console.log(username);
  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  //JSX IS NOT HTML
  return (
    <div className="App">
      <h1>HI THERE</h1>
      <p>This is a paragraph</p>
      <button style={style} onClick={() => switchName("Zoki!!")}>
        Switch name
      </button>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      />
      <Person
        changed={nameChangedHandler}
        click={switchName}
        name={personState.person[1].name}
        age={personState.person[1].age}
      />
      <Person name={personState.person[2].name} age={personState.person[2].age}>
        My hobbies: Sky Diving
      </Person>

      <UserInput changeUsername={changeUsername} username={username}/>
      <UserOutput username={username} />
      <UserOutput />
    </div>
  );

  //NO ONE USES THIS
  //return ( React.createElement('div', {className: App}, React.createElement('h1', null, 'Hi there')));
}

export default App;
