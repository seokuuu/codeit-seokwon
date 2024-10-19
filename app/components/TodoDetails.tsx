"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { deleteTodo, getTodoById, updateTodo, uploadImage } from "../lib/api";
import { Todo } from "../types/todo";
import CheckboxInput from "./common/CheckboxInput";
import CustomButton from "./common/CustomButton";
import CheckIcon from "./icons/CheckIcon";
import DeleteIcon from "./icons/DeleteIcon";
import ImageSection from "./ImageSection";
import MemoSection from "./MemoSection";

interface TodoDetailsProps {
  itemId: number;
}

export default function TodoDetails({ itemId }: TodoDetailsProps) {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [name, setName] = useState("");
  const [memo, setMemo] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const fetchedTodo = await getTodoById(itemId);
        setTodo(fetchedTodo);
        setName(fetchedTodo.name);
        setMemo(fetchedTodo.memo || "");
        setImageUrl(fetchedTodo.imageUrl || "");
        setIsCompleted(fetchedTodo.isCompleted);
      } catch (error) {
        console.error("Failed to fetch todo:", error);
      }
    };
    fetchTodo();
  }, [itemId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      try {
        const updatedTodo = await updateTodo(todo.id, {
          name,
          memo,
          imageUrl,
          isCompleted,
        });
        setTodo(updatedTodo);
        router.push("/");
      } catch (error) {
        console.error("Failed to update todo:", error);
      }
    }
  };

  const handleDelete = async () => {
    if (todo) {
      try {
        await deleteTodo(todo.id);
        router.push("/");
      } catch (error) {
        console.error("Failed to delete todo:", error);
      }
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const { url } = await uploadImage(file);
        setImageUrl(url);
      } catch (error) {
        console.error("Failed to upload image:", error);
      }
    }
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <div className="h-[90vh] desktop:w-[80%] flex flex-col ml-auto mr-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border bg-bgPrimary flex-grow flex flex-col desktop:px-10 desktop:py-5"
      >
        <div
          className={`flex mb-2 p-2 mt-4 items-center justify-center rounded border-2 border-black rounded-3xl ${
            isCompleted ? "bg-violet-100" : ""
          }`}
        >
          <CheckboxInput
            isChecked={isCompleted}
            onToggle={() => setIsCompleted(!isCompleted)}
          />
          <span className="ml-2 underline underline-offset-2">{name}</span>
        </div>

        <div className="flex desktop:h-[30%] mobile:h-[100%] desktop:flex-row tablet:flex-col mobile:flex-col desktop:space-x-4 border border-red">
          <ImageSection imageUrl={imageUrl} onImageUpload={handleImageUpload} />
          <MemoSection
            memo={memo}
            onMemoChange={(e) => setMemo(e.target.value)}
          />
        </div>

        <div className="flex justify-end space-x-2">
          <CustomButton
            type="submit"
            bgColor="bg-lime-300"
            textColor="text-black"
          >
            <CheckIcon />
            수정 완료
          </CustomButton>
          <CustomButton
            type="button"
            onClick={handleDelete}
            bgColor="bg-rose-500"
            textColor="text-white"
          >
            <DeleteIcon />
            삭제하기
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
