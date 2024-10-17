"use client";

import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onUpdateTodo: (updatedTodo: Todo) => void;
}

export default function TodoList({ todos, onUpdateTodo }: TodoListProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">In Progress</h2>
      {todos
        .filter((todo) => !todo.isCompleted)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={onUpdateTodo} />
        ))}

      <h2 className="text-xl font-bold mb-2 mt-4">Completed</h2>
      {todos
        .filter((todo) => todo.isCompleted)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={onUpdateTodo} />
        ))}
    </div>
  );
}
