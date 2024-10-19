"use client";

import { useState } from "react";
import { useMobile } from "../lib/hooks/useMobile";
import CustomButton from "./common/CustomButton";
import PlusIcon from "./icons/PlusIcon";

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
    <form onSubmit={handleSubmit} className="flex my-4 w-full">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="할 일을 입력해주세요"
        className="p-2 pl-4 rounded mr-2 desktop:w-[90%] tablet:w-[80%] mobile:w-[85%] common-border  rounded-xl"
      />
      <CustomButton
        type="submit"
        bgColor=""
        textColor="text-black"
        onClick={() => console.log("Button clicked")}
      >
        {isMobile ? (
          <PlusIcon />
        ) : (
          <>
            <PlusIcon /> 추가하기
          </>
        )}
      </CustomButton>
    </form>
  );
}
