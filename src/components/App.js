import React, { useReducer } from "react";
import { todoReducer } from "../reducers/todo";
import "../styles/App.css";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";
import { initialState } from "../reducers/todo";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div id="main">
      <AddTodo add={(text) => dispatch({ type: "add", text: text })} />
      {state.todos.map((value) => (
        <Todo
          key={value.id}
          todo={value}
          remove={() => dispatch({ type: "remove", id: value.id })}
        />
      ))}
    </div>
  );
};

export default App;
