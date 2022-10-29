import React, { useState } from "react";

const AddTodo = ({ add }) => {
  const [text, setText] = useState("");

  return (
    <form
      id="todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        add(text);
        setText("");
      }}
    >
      <input
        id="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="AddTodoInput"
      />
      <button type="submit" className="AddTodoButton">
        Add
      </button>
    </form>
  );
};

export { AddTodo };
