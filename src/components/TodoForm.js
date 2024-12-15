import React, { useState } from 'react';



function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="form-control mr-2"
        placeholder="Enter a task"
      />
      <button type="submit" className="btn btn-primary">Add Todo</button>
    </form>
  );
}

export default TodoForm;
