import React, { useState } from "react";
const Todo = ({ todo, remove }) => {
  return (
    <div className="todo">
      <div className="todo-title">
        {todo.text}

        <button className="todo-delete" onClick={remove}>
          X
        </button>
      </div>

      {/* <button className="EditTodo" onClick={() => setMode("edit")}>
            Edit
          </button> */}
    </div>
  );
};

export { Todo };
