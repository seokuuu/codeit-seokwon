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
    <div
      className={`flex items-center  mb-2 p-2 rounded border-2 border-black rounded-3xl ${
        isCompleted ? "bg-violet-100" : ""
      }`}
    >
      <div className="relative top-1 mr-2">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={toggleComplete}
          className="appearance-none w-5 h-5 border border-black checked:border-violet-600 rounded-full checked:bg-violet-600 transition-all duration-200 ease-in-out cursor-pointer"
        />
        {isCompleted && (
          <svg
            className="absolute w-3 h-3 text-white top-1 left-1 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
      <Link
        href={`/items/${todo.id}`}
        className={`hover:underline ${isCompleted ? "line-through" : ""}`}
      >
        {todo.name}
      </Link>
    </div>
  );
}
