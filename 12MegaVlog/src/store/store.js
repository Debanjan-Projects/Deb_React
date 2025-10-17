import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;

//configure jho haota hain ohh store banata hain ,or ushko sare ,reducers ke bare mein batana padta hain .
