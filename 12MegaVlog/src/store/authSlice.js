import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({

    //ishe chaiye hota hain , name , initialstate , reducers,all.
    name: "auth",
    initialState,
    reducers: {

        //action ke pass milta hain playload , jho initial hone ke bad track hote hote update hohh jata hain ..

        login: (state, action) => {

            //koi agar method ko dispatch kara hain.
            state.status = true;
            state.userData = action.payload.userData;
        },
           
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;

//ehh tract karega sare authectication ko..