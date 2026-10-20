import { create } from "zustand";

export const useAppStore = create((set) =>({
    currentUser: 'Budi',

    votes: {
        1: 3,
        2: 5,
        3: 2,
    },

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
        },
    ],

    selectedTodo: null,

    setCurrentUser: (user) =>
        set({currentUser: user}),

    addVote: (todoId) =>
        set((state) => ({
            votes: {
                ...state.votes,
                [todoId]: (state.votes[todoId]) + 1
            }
        })),

    selectTodo: (todo) =>
        set({selectedTodo: todo}),
}))