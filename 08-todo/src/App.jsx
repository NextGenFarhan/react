import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components"

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      prev.map((prevTodo) => {prevTodo.id === id ? todo : prevTodo});
    });
  };
  const toggleTodo = (id) => {
    setTodos((prev)=> prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  };

  // local storage
  useEffect(()=> {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])
  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}
    >
      <div className="bg-slate-700 min-h-screen py-8 rounded-xl">
        <div className="w-full mx-auto shadow-md text-white">
          <h1 className="font-bold">iTask Todo</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* <TodoItem /> */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;