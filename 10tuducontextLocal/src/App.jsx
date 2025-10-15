import { useState } from 'react'

import './App.css'
import {TodoProvider} from "./contexts"
import { useEffect } from 'react'
import { TodoForm, TodoItem } from './components'

//store rakhenge state mein .
function App() {
  const [todos, setTodos] = useState([])



   //add todo function.
   //todo apne ap ak object hain , ak unique id bhi add kar diya hain .
  const addTodo = (todo) => {
    setTodos((prev) => [ {id: Date.now(), ...todo} , ...prev])
  }


//update toddo function.
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo )))
  }



//delete todo function.
//sare value ane doin lekin ak value na hi ane do.


  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }



//toggle complette function.
  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
      )
    )
  }


  //localstorage ki functionality ..

//react ka local storeg or js ka local storage same hota hain ,ehh actually browser ka hi storage hota hain 


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  //another local storage.

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])




  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

      <div className="bg-[#172842] min-h-screen py-8">
               <div className="min-h-screen w-full max-w-4xl mx-auto bg-gradient-to-br from-[#172842] to-[#0f1a2a] flex flex-col items-center p-6 rounded-lg shadow-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-wide drop-shadow-lg text-center">
                Manage Your Todos
                </h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here..ish, ke andar prop bhi pass karenge or call bhi karenge. */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App

//har ak div unique hai eya nahi hain , ehh check karenge map lagake .