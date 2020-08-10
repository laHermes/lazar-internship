import React, {useState} from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  //useState()
  const [personState, setPersonState] = useState({person: [{name: 'Lazar', age:'22'},{name: 'Jovana', age:'23'},{name: 'Misko', age:'135'}]});

  //JSX IS NOT HTML
  return (
    <div className="App">
      <h1>HI THERE</h1>
      <p>This is a paragraph</p>
      <button >Switch name</button>

      <Person name={personState.person[0].name} age={personState.person[0].age} />
      <Person name={personState.person[1].name} age={personState.person[1].age} />
      <Person name={personState.person[2].name} age={personState.person[2].age}>
        My hobbies: Sky Diving
      </Person>
      
      {/* <Person name="Lazar" age="22" />
      <Person name="Jovana" age="23" />
      <Person name="Misko" age="135">
        My hobbies: Sky Diving
      </Person> */}
    </div>
  );

  //NO ONE USES THIS
  //return ( React.createElement('div', {className: App}, React.createElement('h1', null, 'Hi there')));
}

export default App;
