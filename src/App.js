import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";

function App() {
  const todoList = [
    { text: "Picar la Cepibolla", completed: false },
    { text: "Picar el Tomate", completed: true },
    { text: "Licuar el Tomate", completed: true },
    { text: "Comer", completed: true },
  ];

  return (
    <>
      <TodoCounter completed={3} total={5} />
      <TodoSearch />

      <TodoList>
        {todoList.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
