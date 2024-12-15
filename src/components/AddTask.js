import React, { useState } from "react";
import './styles/form.css';


const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      addTask({ name: taskName });
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Thêm </button>
    </form>
  );
};

export default AddTask;
