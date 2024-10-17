"use client";

import { useState, useEffect } from "react";
import { getTodos } from "../lib/api";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await getTodos();
      setTodos(fetchedTodos);
    };
    fetchTodos();
  }, []);

  const handleTodoUpdate = (updatedTodo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">In Progress</h2>
      {todos
        .filter((todo) => !todo.isCompleted)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={handleTodoUpdate} />
        ))}

      <h2 className="text-xl font-bold mb-2 mt-4">Completed</h2>
      {todos
        .filter((todo) => todo.isCompleted)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={handleTodoUpdate} />
        ))}
    </div>
  );
}
