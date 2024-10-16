"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Todo } from "../types/todo";
import { getTodos, updateTodo, deleteTodo, uploadImage } from "../lib/api";

interface TodoDetailsProps {
  itemId: number;
}

export default function TodoDetails({ itemId }: TodoDetailsProps) {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [name, setName] = useState("");
  const [memo, setMemo] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchTodo = async () => {
      const todos = await getTodos();
      const foundTodo = todos.find((t: { id: number }) => t.id === itemId);
      if (foundTodo) {
        setTodo(foundTodo);
        setName(foundTodo.name);
        setMemo(foundTodo.memo || "");
      }
    };
    fetchTodo();
  }, [itemId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      await updateTodo(todo.id, { name, memo });
      router.push("/");
    }
  };

  const handleDelete = async () => {
    if (todo) {
      await deleteTodo(todo.id);
      router.push("/");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && todo) {
      const { url } = await uploadImage(file);
      await updateTodo(todo.id, { imageUrl: url });
      setTodo({ ...todo, imageUrl: url });
    }
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded text-black"
        />
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
        {todo.imageUrl && (
          <img
            src={todo.imageUrl}
            alt="Todo"
            className="mt-2 max-w-full h-auto"
          />
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
