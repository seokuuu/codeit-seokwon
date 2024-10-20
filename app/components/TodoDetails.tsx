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

/**
 *
 * @description TodoDetails 컴포넌트는 할 일의 상세 정보를 보여주는 컴포넌트입니다.
 * @param {TodoDetailsProps} { itemId } - itemId를 받아옵니다.
 * @returns {JSX.Element} TodoDetails 컴포넌트를 반환합니다.
 *
 */

export default function TodoDetails({ itemId }: TodoDetailsProps) {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [originalTodo, setOriginalTodo] = useState<Todo | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const fetchedTodo = await getTodoById(itemId);
        setTodo(fetchedTodo);
        setOriginalTodo(fetchedTodo);
      } catch (error) {
        console.error("Failed to fetch todo:", error);
      }
    };
    fetchTodo();
  }, [itemId]);

  // todo와 originalTodo가 변경될 때마다 isEdit 상태를 변경합니다.
  useEffect(() => {
    if (originalTodo && todo) {
      setIsEdit(JSON.stringify(originalTodo) !== JSON.stringify(todo));
    }
  }, [todo, originalTodo]);

  // todo의 필드를 변경하는 함수입니다.
  const handleChange = (field: keyof Todo, value: string | boolean) => {
    setTodo((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  // 수정 완료 버튼 클릭 시 todo를 업데이트합니다.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      try {
        const updatedTodo = await updateTodo(todo.id, {
          name: todo.name,
          memo: todo.memo,
          imageUrl: todo.imageUrl,
          isCompleted: todo.isCompleted,
        });
        setTodo(updatedTodo);
        setOriginalTodo(updatedTodo);
        setIsEdit(false);
        router.push("/");
      } catch (error) {
        console.error("Failed to update todo:", error);
      }
    }
  };

  // 할 일 삭제 버튼 클릭 시 todo를 삭제합니다.
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

  // 이미지를 업로드하는 함수입니다.
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target; // 파일 인풋을 참조
    const file = fileInput.files?.[0];

    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB > 5) {
        alert("파일 크기가 5MB를 초과합니다. 작은 파일을 업로드해주세요.");
        fileInput.value = ""; // 파일 인풋을 리셋해 이전 파일을 초기화
        return;
      }

      const fileName = file.name;
      const isEnglish = /^[a-zA-Z._-]+$/.test(fileName);

      if (!isEnglish) {
        alert("파일 이름은 영어로만 구성되어야 합니다.");
        fileInput.value = ""; // 파일 인풋을 리셋해 이전 파일을 초기화
        return;
      }

      try {
        const { url } = await uploadImage(file);
        handleChange("imageUrl", url);
      } catch (error) {
        console.error("이미지 업로드 실패:", error);
      }
    }

    fileInput.value = ""; // 성공하든 실패하든 파일 인풋을 초기화
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <div className="h-[calc(100vh-45px)] desktop:w-[80%] flex flex-col ml-auto mr-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-1 desktop:border desktop:bg-bgPrimary mobile:bgGrey flex-grow flex flex-col desktop:px-10 desktop:py-5"
      >
        <div
          className={`flex p-2 mt-2 desktop:mb-2 items-center justify-center rounded border-2 border-black rounded-3xl ${
            todo.isCompleted ? "bg-violet-100" : ""
          }`}
        >
          <CheckboxInput
            isChecked={todo.isCompleted}
            onToggle={() => handleChange("isCompleted", !todo.isCompleted)}
          />
          {isEditing ? (
            <input
              type="text"
              value={todo.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => setIsEditing(false)}
              autoFocus
              className="p-2 border border-gray-300 rounded"
            />
          ) : (
            <span
              className="text-xl ml-2 underline underline-offset-2"
              onClick={() => setIsEditing(true)}
            >
              {todo.name}
            </span>
          )}
        </div>

        <div className="flex desktop:h-[30%] mobile:h-[100%] desktop:flex-row tablet:flex-col mobile:flex-col desktop:space-x-4 border border-red">
          <ImageSection
            imageUrl={todo.imageUrl || ""}
            onImageUpload={handleImageUpload}
          />
          <MemoSection
            memo={todo.memo || ""}
            onMemoChange={(e) => handleChange("memo", e.target.value)}
          />
        </div>

        <div className="flex desktop:justify-end tablet:justify-center mobile:justify-center space-x-2">
          <CustomButton
            type="submit"
            bgColor={isEdit ? "bg-lime-300" : "bg-slate-200"}
            textColor="text-black"
            disabled={!isEdit}
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
