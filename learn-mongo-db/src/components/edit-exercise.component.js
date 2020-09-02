import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "./styles";
import axios from "axios";

function EditExercise(props) {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/" + props.match.params.id)
      .then((res) => {
        setUsername(res.data.username);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(new Date(res.data.date));
      });

    axios
      .get("http://localhost:5000/users/")
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data);
          setUsers(res.data.map((user) => user.username));
        }
      })
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  const handelFormSubmit = (e) => {
    e.preventDefault();

    let exercise = {
      username,
      description,
      duration,
      date,
    };
    axios
      .post(`http://localhost:5000/exercises/update/` + props.match.params.id, exercise)
      .then((res) => console.log(res.data))
      .catch();
  };

  const handleChangeDate = (date) => {
    setDate(date);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  return (
    <Container>
      <h3>Edit Exercise Form</h3>
      <form onSubmit={handelFormSubmit}>
        <select>
          {users.map((user) => {
            return (
              <option key={user} value={user}>
                {user}
              </option>
            );
          })}
        </select>
        <label>Desc</label>
        <input
          type="text"
          required
          value={description}
          onChange={handleChangeDescription}
        />
        <label>Duration</label>
        <input
          type="text"
          required
          value={duration}
          onChange={handleChangeDuration}
        />
        <DatePicker selected={date} onChange={handleChangeDate} />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

export default EditExercise;
