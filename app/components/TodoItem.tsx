"use client";
import Link from "next/link";
import { Todo } from "../types/todo";
import { updateTodo } from "../lib/api";
import { useState } from "react";
import CheckboxInput from "./common/CheckboxInput";

interface TodoItemProps {
  todo: Todo;
  onUpdate: (updatedTodo: Todo) => void;
}

export default function TodoItem({ todo, onUpdate }: TodoItemProps) {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const toggleComplete = async () => {
    const previousState = isCompleted;
    setIsCompleted(!isCompleted); // 즉시 상태 업데이트

    try {
      const updatedTodo = await updateTodo(todo.id, {
        isCompleted: !isCompleted,
      });
      onUpdate(updatedTodo);
    } catch (error) {
      console.error("Failed to update todo:", error);
      setIsCompleted(previousState); // 에러 시 상태 복구
      // 사용자에게 에러 알림
    }
  };

  return (
    <div
      className={`flex items-center mb-2 p-2 rounded border-2 border-black rounded-3xl ${
        isCompleted ? "bg-violet-100" : ""
      }`}
    >
      <CheckboxInput isChecked={isCompleted} onToggle={toggleComplete} />
      <Link
        href={`/items/${todo.id}`}
        className={`hover:underline ${isCompleted ? "line-through" : ""}`}
      >
        {todo.name}
      </Link>
    </div>
  );
}
