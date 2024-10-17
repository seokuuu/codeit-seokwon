import axios from "axios";
import { Todo } from "../types/todo";

const API_BASE_URL = "https://assignment-todolist-api.vercel.app/api";
const TENANT_ID = "seokwon";

const api = axios.create({
  baseURL: `${API_BASE_URL}/${TENANT_ID}`,
});

export const getTodos = async (page = 1, pageSize = 10) => {
  const response = await api.get<Todo[]>(
    `/items?page=${page}&pageSize=${pageSize}`
  );
  return response.data;
};

export const getTodoById = async (id: number) => {
  const response = await api.get<Todo>(`/items/${id}`);
  return response.data;
};

export const createTodo = async (name: string) => {
  const response = await api.post<Todo>("/items", { name });
  return response.data;
};

export const updateTodo = async (id: number, data: Partial<Todo>) => {
  const response = await api.patch<Todo>(`/items/${id}`, data);
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await api.delete(`/items/${id}`);
  return response.data;
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);
  const response = await api.post<{ url: string }>("/images/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
