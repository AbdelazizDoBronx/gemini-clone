import { configureStore } from "@reduxjs/toolkit";
import chatSlice from '../redux/chatSlice'


const store = configureStore({
    reducer : {
        chat : chatSlice
    }
})

export default store