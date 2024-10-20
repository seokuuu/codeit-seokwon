"use client";

import { useState } from "react";
import { useMobile } from "../lib/hooks/useMobile";
import CustomButton from "./common/CustomButton";
import PlusIcon from "./icons/PlusIcon";

interface AddTodoFormProps {
  onAddTodo: (name: string) => Promise<void>;
}

/**
 * 
 * @description AddTodoForm 컴포넌트는 할 일을 추가하는 폼을 보여주는 컴포넌트입니다.
 * @param {AddTodoFormProps} { onAddTodo } - onAddTodo 함수를 받아옵니다.
 * onAddTodo - 할 일 추가 함수
 * @returns {JSX.Element} AddTodoForm 컴포넌트를 반환합니다.

 */

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
        className="p-2 pl-4  rounded mr-2 desktop:w-[90%] tablet:w-[80%] mobile:w-[85%] common-border rounded-xl outline-none"
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
          <div className="flex justify-center items-center">
            <PlusIcon /> 추가하기
          </div>
        )}
      </CustomButton>
    </form>
  );
}
