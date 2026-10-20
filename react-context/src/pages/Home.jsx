import { useAppStore } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const todos = useAppStore((state) => state.todos)
    const votes = useAppStore((state) => state.votes)
    const currentUser = useAppStore(
        (state) => state.currentUser
    );

    const setCurrentUser = useAppStore(
        (state) => state.setCurrentUser
    );

    const addVote = useAppStore(
        (state) => state.addVote
    );

    const selectTodo = useAppStore(
        (state) => state.selectTodo
    )

    const navigate = useNavigate();

    function openDetail(todo){
        selectTodo(todo);
        navigate('/detail')
    }
    return (
        <div style={{ maxWidth: "600px", margin: "40px auto" }}>
            <h1>Todo List</h1>

            <label htmlFor="user">Pilih User: </label>

            <select
                id="user"
                value={currentUser}
                onChange={(e) => setCurrentUser(e.target.value)}
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

                <button onClick={() => addVote(todo.id)}>
                    Vote
                </button>
            </div>
        ))}
        </div>
    ) 
}