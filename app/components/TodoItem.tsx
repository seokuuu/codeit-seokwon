"use client";

import Link from "next/link";
import { Todo } from "../types/todo";
import { updateTodo } from "../lib/api";
import { useState } from "react";

interface TodoItemProps {
  todo: Todo;
  onUpdate: (updatedTodo: Todo) => void;
}

export default function TodoItem({ todo, onUpdate }: TodoItemProps) {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const toggleComplete = async () => {
    try {
      const updatedTodo = await updateTodo(todo.id, {
        isCompleted: !isCompleted,
      });
      setIsCompleted(!isCompleted);
      onUpdate(updatedTodo);
    } catch (error) {
      console.error("Failed to update todo:", error);
      // 에러 처리 (예: 사용자에게 알림)
    }
  };

  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={isCompleted}
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
