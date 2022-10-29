import React, { useState } from "react";

const AddTodo = ({ add }) => {
  const [text, setText] = useState("");
  const [flag, setFlag] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");

  return (
    <>
      <form
        id="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (text.length === 0) {
            setFlag(true);
            setErrorMassage("Please Type Something");
          } else add(text);
          setText("");
        }}
      >
        <input
          id="todo-input"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setFlag(false);
          }}
          className="AddTodoInput"
        />
        <button type="submit" className="AddTodoButton">
          Add
        </button>
      </form>
      {flag ? <div style={{ color: "red" }}>{errorMassage}</div> : ""}
    </>
  );
};

export { AddTodo };
