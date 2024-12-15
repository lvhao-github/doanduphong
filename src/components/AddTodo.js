import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form d-flex my-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
