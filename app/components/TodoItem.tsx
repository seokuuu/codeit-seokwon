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

/**
 *
 * @description TodoItem 컴포넌트는 Todo의 각 항목을 보여주는 컴포넌트입니다.
 * @param {TodoItemProps} { todo, onUpdate } - Todo와 onUpdate 함수를 받아옵니다.
 * todo - 할 일 정보
 * onUpdate - 할 일 업데이트 함수
 * @returns {JSX.Element} TodoItem 컴포넌트를 반환합니다.
 */

export default function TodoItem({ todo, onUpdate }: TodoItemProps) {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  // 완료 여부 토글
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
