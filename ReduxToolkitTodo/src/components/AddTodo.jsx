import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()



    const addTodoHandler = (e) => {
        e.preventDefault()

        // We use preventDefault() in JavaScript (especially in event handling) to stop the browser’s default behavior for a particular event from happening.


        //dispatch ke anadar hi reducers ko call karna padta hain .
        //dispatch ke andar ak reducer call karna hain orr jho bhi value pass karna han ohh just pass kar denaa hain .

        //dispatch mein value add hota hain .//ehh react-redux ka hota hain ,actually ak wireupp hain .
        
        //dispatch reducer keo used karte huye store ke anadar value store add karta hain .

        dispatch(addTodo(input))
        setInput('')
        //state cleane .
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        //onchage she hoke , input mein jha raha hain,
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo