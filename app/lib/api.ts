import axios from "axios";
import { Todo } from "../types/todo";

const API_BASE_URL = "https://assignment-todolist-api.vercel.app/api";
const TENANT_ID = "seokwon";

const api = axios.create({
  baseURL: `${API_BASE_URL}/${TENANT_ID}`,
});

// 할 일 목록 조회
export const getTodos = async (page = 1, pageSize = 10) => {
  const response = await api.get<Todo[]>(
    `/items?page=${page}&pageSize=${pageSize}`
  );
  return response.data;
};

// 할 일 상세 조회
export const getTodoById = async (id: number) => {
  const response = await api.get<Todo>(`/items/${id}`);
  return response.data;
};

// 할 일 생성
export const createTodo = async (name: string) => {
  const response = await api.post<Todo>("/items", { name });
  return response.data;
};

// 할 일 업데이트
export const updateTodo = async (id: number, data: Partial<Todo>) => {
  const response = await api.patch<Todo>(`/items/${id}`, data);
  return response.data;
};

// 할 일 삭제
export const deleteTodo = async (id: number) => {
  const response = await api.delete(`/items/${id}`);
  return response.data;
};

// 이미지 업로드
export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);
  const response = await api.post<{ url: string }>("/images/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
