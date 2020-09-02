import React, { useState } from "react";
import axios from 'axios';

function CreateUser() {
  const [username, setUsername] = useState("");

  const handelFormSubmit = (e) => {
    e.preventDefault();

    let user = {
      username,
    };


axios.post('http://localhost:5000/users/add', user).then(res => console.log(res.data)).catch();

    setUsername("");
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handelFormSubmit}>
        <label>Username</label>
        <input
          type="text"
          required
          value={username}
          onChange={handleChangeUsername}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateUser;
