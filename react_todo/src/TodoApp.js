import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
    console.log(todos);
  };

  return (
    <div>
      <h2>Todo App</h2>
      <div>
        {todos.length ? (
          <ol>
            {todos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        ) : (
          <h3>No todo yet. Try adding new todo.</h3>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="add new todo"
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default TodoApp;
