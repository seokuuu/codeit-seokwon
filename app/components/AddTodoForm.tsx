"use client";

import { useState } from "react";
import { useMobile } from "../lib/hooks/useMobile";

interface AddTodoFormProps {
  onAddTodo: (name: string) => Promise<void>;
}

export default function AddTodoForm({ onAddTodo }: AddTodoFormProps) {
  const { isMobile } = useMobile();

  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      await onAddTodo(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 w-full">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="할 일을 입력해주세요"
        className="p-2 pl-4 rounded mr-2 desktop:w-[90%] tablet:w-[80%] mobile:w-[85%] common-border  rounded-xl"
      />
      <button
        type="submit"
        className="gap-1 p-2 px-3 rounded mr-2 min-w-fit text-black common-border  rounded-xl"
      >
        {isMobile ? "+" : "+ 추가하기"}
      </button>
    </form>
  );
}
