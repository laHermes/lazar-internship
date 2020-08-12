import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";
import axios from "axios";
import Header from './components/Header'
import Auth from './components/Auth'

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
const [page, setPage] = useState('auth');

  useEffect(() => {
    axios
      .get("https://react-hooks-e9aa2.firebaseio.com/todos.json")
      .then((result) => {
        console.log(result);

        const todoData = result.data;
        const todos = [];
        for (const key in todoData) {
          todos.push({ id: key, item: todoData[key].item });
        }
        setTodoList(todos);
      });
    return () => {
      console.log('cleanup');
    };
  }, [todoItem]);

  const setTodoItemHandler = (e) => {
    console.log(todoItem);
    setTodoItem(e.target.value);
  };
  const setTodoListHandler = () => {
    setTodoList(todoList.concat(todoItem));
    axios
      .post("https://react-hooks-e9aa2.firebaseio.com/todos.json", {
        item: todoItem,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };


const switchPage = (newPage) =>{
setPage(newPage);

}




  return (
    <div className="App">
      <Header onLoadAuth={switchPage.bind(this, 'auth')} onLoadTodo={switchPage.bind(this, 'todo')} />
      {page === 'auth' ? <Auth /> :   
      <React.Fragment>
      <Todo
        change={setTodoItemHandler}
        click={setTodoListHandler}
        value={todoItem}
      />
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.item}</li>
        ))}
      </ul>
      
      </React.Fragment>
      }

    
    </div>
  );
}

export default App;
