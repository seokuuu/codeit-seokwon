"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Todo } from "../types/todo";
import { getTodoById, updateTodo, deleteTodo, uploadImage } from "../lib/api";

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
        // 에러 처리 (예: 사용자에게 알림)
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
        // 에러 처리 (예: 사용자에게 알림)
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
        // 에러 처리 (예: 사용자에게 알림)
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
        // 에러 처리 (예: 사용자에게 알림)
      }
    }
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            className="mr-2"
          />
          {name}
        </label>
      </div>
      <div>
        <label htmlFor="memo" className="block mb-1">
          Memo
        </label>
        <textarea
          id="memo"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          className="w-full p-2 border rounded text-black"
        />
      </div>
      <div>
        <label htmlFor="image" className="block mb-1">
          Image
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 border rounded"
        />
        {imageUrl && (
          <img src={imageUrl} alt="Todo" className="mt-2 max-w-full h-auto" />
        )}
      </div>

      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mr-2"
        >
          Update Todo
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 text-white p-2 rounded"
        >
          Delete Todo
        </button>
      </div>
    </form>
  );
}
