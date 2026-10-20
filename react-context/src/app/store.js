import { configureStore } from "@reduxjs/toolkit";
import voteReducer from "../features/vote/voteSlice";
import todoItemReducer from "../features/todoItem/todoItemSlice";

export const store = configureStore({
    reducer: {
        vote: voteReducer,
        todoItem: todoItemReducer,
    }
})