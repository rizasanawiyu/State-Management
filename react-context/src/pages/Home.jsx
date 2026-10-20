import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { selectedTodo } from "../features/todoItem/todoItemSlice";
import { addVote, setCurrentUser } from "../features/vote/voteSlice";

export default function Home(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { todos } = useSelector(
        (state) => state.todoItem
    )

    const { currentUser, votes } = useSelector(
        (state) => state.vote
    )

    function openDetail(todo){
        dispatch(selectedTodo(todo));
        navigate('/detail')
    }
    return (
        <div style={{ maxWidth: "600px", margin: "40px auto" }}>
            <h1>Todo List</h1>

            <label htmlFor="user">Pilih User: </label>

            <select
                id="user"
                value={currentUser}
                onChange={(e) => dispatch(setCurrentUser(e.target.value))}
            >
                <option value="Budi">Budi</option>
                <option value="Bidu">Bidu</option>
                <option value="Bobo">Bobo</option>
            </select>

            <p>User aktif: {currentUser}</p>

            {todos.map((todo) => (
                <div
                key={todo.id}
                style={{
                    border: "1px solid #ccc",
                    padding: "16px",
                    marginTop: "12px",
                    borderRadius: "8px",
                }}
                >
                <h3
                    onClick={() => openDetail(todo)}
                    style={{ cursor: "pointer" }}
                >
                    {todo.title}
                </h3>

                <p>Vote: {votes[todo.id]}</p>

                <button onClick={() => dispatch(addVote(todo.id))}>
                    Vote
                </button>
            </div>
        ))}
        </div>
    ) 
}