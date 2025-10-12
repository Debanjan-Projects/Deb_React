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
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


//ehh ak method hain just
export const useTodo = () => {
    return useContext(TodoContext)

    //kish chis ke bare mein kar raha hain.
}

//export an provider...

export const TodoProvider = TodoContext.Provider