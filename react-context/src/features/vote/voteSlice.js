import { createSlice, current } from '@reduxjs/toolkit'

const voteSlice = createSlice({
    name: 'vote',

    initialState: {
        currentUser: 'Budi',

        votes: {
            1: 3,
            2: 5,
            3: 2
        }
    },

    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },

        addVote: (state, action) => {
            const todoId = action.payload

            state.votes[todoId] = (state.votes[todoId] || 0) + 1
        }
    }
})

export const {setCurrentUser, addVote} = voteSlice.actions

export default voteSlice.reducer