import { atom } from 'recoil';

export const voteState = atom ({
    key: 'voteState',

    default:{
        currentUser: "Budi",
        votes:{
            1: 3,
            2: 5,
            3: 2,
        }
    }
})

export const todoItemState = atom({
    key: 'todoItemState',

    default: {
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
    }
})