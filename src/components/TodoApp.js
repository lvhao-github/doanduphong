import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import '../styles/TodoList.css'; 

function TodoApp() {
  const getStoredTodos = () => {
    const todosFromStorage = localStorage.getItem("todos");
    return todosFromStorage ? JSON.parse(todosFromStorage) : [];
  };

  const [todos, setTodos] = useState(getStoredTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    if (task.trim()) {
      const newTodo = { id: Date.now(), task, completed: false, pinned: false };
      setTodos([...todos, newTodo]);
    }
  };

  const handleUpdate = (id, updatedFields) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedFields } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const sortedTodos = [...todos].sort((a, b) => b.pinned - a.pinned);

  return (
    <div>
      <h2 className="text-center my-4">Manage Your Tasks</h2>
      <AddTodo addTodo={addTodo} />
      {todos.length > 0 ? (
        <TodoList
          todos={sortedTodos}
          updateTodo={handleUpdate}
          deleteTodo={handleDelete}
        />
      ) : (
        <p className="text-center mt-3">No tasks available!</p>
      )}
    </div>
  );
}

export default TodoApp;
