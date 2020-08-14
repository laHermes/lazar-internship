import React, { useState, useEffect, useMemo, useReducer, useRef } from "react";
import "./App.css";
import Todo from "./components/Todo";
import axios from "axios";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { UserContext } from "./UserContext";

function App() {
  const [todoItem, setTodoItem] = useState("");
  // const [todoList, setTodoList] = useState([]);
  const [submitted, setSubmitted] = useState(null);
  const [page, setPage] = useState("auth");
  const [value, setValue] = useState(null);
  //Frequent changes
  // const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  
  const todoListReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state.concat(action.payload);
        case 'SET':
          return action.payload;
          case 'REMOVE':
            return state.filter((todoItem) => todoItem.id !== action.payload);
            default:
              return state;
            }
          };
          


          const [todoList, dispatch] = useReducer(todoListReducer, [])
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
        dispatch({type: 'SET', payload: todos});
      });
    return () => {
      console.log("cleanup");
    };
  }, []);

  useEffect(() => {
    if (submitted) {
      dispatch({type: 'ADD', payload: submitted});
    }
    return () => {};
  }, [submitted]);

  const setTodoItemHandler = (e) => {
    console.log(todoItem);
    setTodoItem(e.target.value);
  };

  const setTodoListHandler = () => {
    // setTodoList(todoList.concat(todoItem));
    axios
      .post("https://react-hooks-e9aa2.firebaseio.com/todos.json", {
        item: todoItem,
      })
      .then((res) => {
        const todoName = { id: res.data.item, item: todoItem };
        dispatch({type: 'ADD', payload: todoName});
        // setSubmitted(todoName);
        console.log(todoList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const switchPage = (newPage) => {
    setPage(newPage);
  };

const deleteItem = itemId =>{

axios.delete(`https://react-hooks-e9aa2.firebaseio.com/todos/${itemId}.json`).then(
(res) =>{dispatch({type: 'REMOVE', payload: itemId});}).catch(err => console.log(err));

}

  return (
    <div className="App">
      <UserContext.Provider value={{ value, setValue }}>
        <Header
          onLoadAuth={switchPage.bind(this, "auth")}
          onLoadTodo={switchPage.bind(this, "todo")}
        />
        {page === "auth" ? (
          <Auth />
        ) : (
          <React.Fragment>
            <Todo
              change={setTodoItemHandler}
              click={setTodoListHandler}
              value={todoItem}
            />
            <ul>
              {todoList.map((todo) => (
                <li onClick={deleteItem.bind(this, todo.id)} key={todo.id}>{todo.item}</li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
