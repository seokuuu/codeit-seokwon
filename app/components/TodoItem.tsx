"use client";

import Link from "next/link";
import { Todo } from "../types/todo";
import { updateTodo } from "../lib/api";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const toggleComplete = async () => {
    await updateTodo(todo.id, { isCompleted: !todo.isCompleted });
    // TODO: Update todo list
  };

  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={toggleComplete}
        className="mr-2"
      />
      <Link
        href={`/items/${todo.id}`}
        className="text-blue-300 hover:underline"
      >
        {todo.name}
      </Link>
    </div>
  );
}
