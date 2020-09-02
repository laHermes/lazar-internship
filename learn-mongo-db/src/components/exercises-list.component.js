import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Exercise = (props) => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={`/edit/` + props.exercise._id}>Edit</Link> |
        <a href="#" onClick={() => props.deleteExercise(props.exercise._id)}>
          Delete
        </a>
      </td>
    </tr>
  );
};

function ExerciseList() {
  const [deleteExercise, setDeleteExercise] = useState();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((res) => {
        setExercises(res.data);
        console.log(res.data);

      })
      .catch();
    return () => {};
  }, []);

  const deleteExerciseHandler = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => {
        console.log(res.data);
        
      })
      .catch((err) => console.log(err));
    setExercises(exercises.filter((el) => el._id !== id));
  };

  const exerciseListHandler = () => {
    return exercises.map((currentexercise) => {
      console.log(currentexercise);
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={deleteExerciseHandler}
          key={currentexercise._id}
        />
      );
    });
  };

  return (
    <div>
      <h3>Logged exercises</h3>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseListHandler()}</tbody>
      </table>
    </div>
  );
}

export default ExerciseList;
