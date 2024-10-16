import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </main>
  );
}
