import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { voteState, todoItemState } from "../recoil/atoms";

export default function Home(){
    const [vote, setVote] = useRecoilState(voteState)
    const [todoData, setTodoData] = useRecoilState(todoItemState)
    const navigate = useNavigate();

    function addVote(todoId){
        setVote((prev) => ({
        ...prev,
            votes: {
                ...prev.votes,
                [todoId]: prev.votes[todoId] + 1,
            }
        }));
    }

    function openDetail(todo){
        setTodoData((prev) => ({
            ...prev,
            selectedTodo: todo
        }));
        navigate('/detail')
    }
    return (
        <div style={{ maxWidth: "600px", margin: "40px auto" }}>
            <h1>Todo List</h1>

            <label htmlFor="user">Pilih User: </label>

            <select
                id="user"
                value={vote.currentUser}
                onChange={(e) => 
                    setVote((prev) => ({
                        ...prev, 
                        currentUser:e.target.value
                    }))
                }
            >
                <option value="Budi">Budi</option>
                <option value="Bidu">Bidu</option>
                <option value="Bobo">Bobo</option>
            </select>

            <p>User aktif: {vote.currentUser}</p>

            {todoData.todos.map((todo) => (
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

                <p>Vote: {vote.votes[todo.id]}</p>

                <button onClick={() => addVote(todo.id)}>
                    Vote
                </button>
            </div>
        ))}
        </div>
    ) 
}