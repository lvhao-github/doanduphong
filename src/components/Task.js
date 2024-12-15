import React from "react";
import "../styles/Task.css";

const Task = ({ task, updateTask, deleteTask }) => {
  const toggleComplete = () => {
    updateTask(task.id, { completed: !task.completed });
  };

  const togglePin = () => {
    updateTask(task.id, { pinned: !task.pinned });
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span>{task.name}</span>
      <div className="actions">
        <button onClick={toggleComplete}>
          {task.completed ? "Uncomplete" : "Complete"}
        </button>
        <button onClick={togglePin}>{task.pinned ? "Unpin" : "Pin"}</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
