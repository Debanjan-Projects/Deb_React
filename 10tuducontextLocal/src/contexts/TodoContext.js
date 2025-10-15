//import createContext, useContext

import {createContext, useContext} from "react"


//variable ke anadar array mil geya or array ke andar objcet mil geya..

export const TodoContext = createContext({

    //creaate an array .
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],

    //functinalities main defination nahi likh hain,,just ushka name likhta hain ..
 
    //context api , bare project ke liye nahi hota hain , ushke liye redux tool kit , and zustend jaishe state management tools use karte  hain .


    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


//ehh ak method hain just
export const useTodo = () => {
    return useContext(TodoContext)

    //kish chis ke bare mein kar raha hain.// ak context dena padta hain .
}

//export an provider...

export const TodoProvider = TodoContext.Provider