import {createSlice} from '@reduxjs/toolkit'

const todoItemSlice = createSlice({
    name: 'todoItem',

    initialState:{
        todos: [
            {
                id: 1,
                title: "State Management 1",
                description: "React Context",
            },
            {
                id: 2,
                title: "State Management 2",
                description: "Redux Toolkit",
            },
            {
                id: 3,
                title: "State Management 3",
                description: "Recoil",
            }
        ],
        selectedTodo: null,
    },
    reducers: {
        selectedTodo: (state, action) => {
            state.selectedTodo = action.payload;
        }
    }
})

export const {selectedTodo} = todoItemSlice.actions

export default todoItemSlice.reducer