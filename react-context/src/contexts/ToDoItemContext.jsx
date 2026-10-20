
import { createContext, useContext, useState } from "react";

const TodoItemContext = createContext();

const initialTodos = [
  {
    id: 1,
    title: "State Management 1",
    description: "React Context",
  },
  {
    id: 2,
    title: "State Management 2",
    description: "Redux Toolkit",
  },
  {
    id: 3,
    title: "State Management 3",
    description: "Recoil",
  },
];

export function ToDoItemProvider({ children }) {
  const [todos] = useState(initialTodos);
  const [selectedTodo, setSelectedToDo] = useState(null);

  return (
    <TodoItemContext.Provider
      value={{
        todos,
        selectedTodo,
        setSelectedToDo,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
}

export function useTodoItem() {
  return useContext(TodoItemContext);
}
