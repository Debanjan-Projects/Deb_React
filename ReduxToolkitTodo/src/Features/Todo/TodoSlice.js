//nanoid make a unique id

import { createSlice , nanoid } from "@reduxjs/toolkit";



//we just make it a object . we can used array also.
const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}


//crate a slice .

//Slice ak reducer ka hi bara version hain ..or reducer  hota hain functionaliy ..


const todoSlice = createSlice({
    name: 'todo',
    initialState,

    //reducers mein ata hain property or function .
    //redux tool kit mein hum log srif declaration nahi likhte hain hum likh te hain pura defination..
    reducers: {
        addTodo: (state ,action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
                //payload ak object  hain .
            }
            state.todos.push(todo)
        },

        removeTodo: (state ,action) => {
            state.todos = state.todos.filter((todo) =>todo.id != action.payload )
        },


        //udate kaishe hoga ,delete kaishe hoga
    }

})


export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
