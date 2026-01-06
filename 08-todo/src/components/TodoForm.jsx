import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault();

    if(!todo) {
      return 
    } else {
      addTodo({todo, completed: false})
      setTodo("")
    }
  }

  return (
    <>
      <form 
      onSubmit={add}
      className='flex m-5 gap-2'>
        <input 
        type="text"
        placeholder='Write Todo...'
        className='w-full border border-black rounded-lg px-3 bg-white text-black py-1.5'
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        />
        <button
        type='submit'
        className='rounded-lg px-3 py-1 bg-green-600 text-white shrink-0'
        >
            Add
        </button>
      </form>
    </>
  )
}

export default TodoForm;
