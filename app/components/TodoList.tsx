"use client";

import { Todo } from "../types/todo";
import DoneEmpty from "./icons/DoneEmpty";
import TodoEmpty from "./icons/TodoEmpty";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onUpdateTodo: (updatedTodo: Todo) => void;
}

export default function TodoList({ todos, onUpdateTodo }: TodoListProps) {
  const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <div className="flex desktop:flex-row mobile:flex-col gap-5 tablet:flex-col w-full">
      <div className="desktop:w-[50%] mobile:w-[100%] tablet:w-[100%]">
        <h2 className="text-l font-bold mb-2 bg-lime-200 text-green-700 p-1 px-4 rounded-3xl w-fit">
          TO DO
        </h2>
        {incompleteTodos.length > 0 ? (
          incompleteTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onUpdate={onUpdateTodo} />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center">
            <TodoEmpty />
            <p className="text-gray-500 text-center">
              할 일이 없어요. <br /> TODO를 새롭게 추가해주세요!
            </p>
          </div>
        )}
      </div>
      <div className="desktop:w-[50%] mobile:w-[100%] tablet:w-[100%]">
        <h2 className="text-l font-bold mb-2 bg-green-700 text-amber-300 p-1 px-4 rounded-3xl w-fit">
          DONE
        </h2>
        {completedTodos.length > 0 ? (
          completedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onUpdate={onUpdateTodo} />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center">
            <DoneEmpty />
            <p className="text-gray-500 text-center">
              아직 다 한 일이 없어요. <br /> 해야 할 일을 체크해보세요!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
