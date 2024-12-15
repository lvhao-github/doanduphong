import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { AiOutlineCheck, AiOutlineUndo, AiOutlinePushpin, AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';  // Import các icon từ react-icons

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleSave = () => {
    if (editedTask.trim()) {
      updateTodo(todo.id, { task: editedTask.trim() });
      setIsEditing(false);
    } else {
      alert("Task cannot be empty!");
    }
  };

  return (
    <li
      className={classNames(
        "list-group-item d-flex justify-content-between align-items-center",
        {
          "bg-warning": todo.pinned,
          "text-decoration-line-through": todo.completed,
        }
      )}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          className="form-control me-2"
        />
      ) : (
        <span>{todo.task}</span>
      )}
      <div>
        {isEditing ? (
          <>
            <button
              className="btn btn-success btn-sm me-2"
              onClick={handleSave}
            >
              <AiOutlineSave /> Save
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setIsEditing(false)}
            >
              <AiOutlineDelete /> Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={() => updateTodo(todo.id, { completed: !todo.completed })}
            >
              <AiOutlineUndo /> {todo.completed ? "Undo" : "Complete"}
            </button>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => updateTodo(todo.id, { pinned: !todo.pinned })}
            >
              <AiOutlinePushpin /> {todo.pinned ? "Unpin" : "Pin"}
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTodo(todo.id)}
            >
              <AiOutlineDelete /> Delete
            </button>
            <button
              className="btn btn-info btn-sm ms-2"
              onClick={() => setIsEditing(true)}
            >
              <AiOutlineEdit /> Edit
            </button>
          </>
        )}
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    pinned: PropTypes.bool.isRequired,
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
