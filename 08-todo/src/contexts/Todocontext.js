import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos: [
        { id:1, todo:"Todo mgs", completed:"false" }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleTodo: (id) => {}
});
export const useTodo = () => {
    return useContext(Todocontext)
}
export const TodoProvider = Todocontext.Provider;