import React, { useState } from "react";
const Todo = ({ todo, remove }) => {
  return (
    <div className="todo">
      <div className="todo-title">{todo.text}</div>
      <button className="todo-delete" onClick={remove}>
        X
      </button>

      {/* <button className="EditTodo" onClick={() => setMode("edit")}>
            Edit
          </button> */}
    </div>
  );
};

export { Todo };
