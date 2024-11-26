import {configurStore} from "@reduxjs/toolkit"
import todoSlice from "../feature/todo/todoSlice"

export const store = configurStore({
    reducer: todoSlice
})