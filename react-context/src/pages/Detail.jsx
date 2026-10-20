import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { voteState, todoItemState } from "../recoil/atoms";

export default function Detail() {
  const vote = useRecoilValue(voteState)
  const todoData = useRecoilValue(todoItemState)

  const navigate = useNavigate();
  const todo = todoData.selectedTodo

  if (!todo) {
    return (
      <div style={{ padding: "24px" }}>
        <p>Tidak ada Todo yang dipilih.</p>
        <button onClick={() => navigate("/")}>
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <button onClick={() => navigate("/")}>
        Kembali
      </button>

      <h1>{todo.title}</h1>

      <p>ID: {todo.id}</p>

      <p>{todo.description}</p>

      <h3>Jumlah Vote: {vote.votes[todo.id]}</h3>
    </div>
  );
}
