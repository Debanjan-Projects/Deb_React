import React from 'react'
import { useState } from 'react'
import {useTodo} from "../contexts/TodoContext"

function TodoForm() {
  //define the state for individual todos ,
    const [todo, setTodo] = useState(" ")

    
//from use todo .
    const {addTodo} = useTodo()


    //create a method for add todo.

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        //object pass karna hain. kiu ki array ke andar obj hain.
        addTodo({todo, completed: false})
        setTodo("")
    }




  return (
    <form onSubmit={add} className='flex'>
        <input type="text" 
        placeholder='Write Todo...'
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        //wriring value and on chnage function.
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit"
        className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
        >Add</button>
    </form>
  )
}

export default TodoForm