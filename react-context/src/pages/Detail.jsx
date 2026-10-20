import { useAppStore } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const todo = useAppStore(
    (state) => state.selectedTodo
  );

  const votes = useAppStore(
    (state) => state.votes
  )

  const navigate = useNavigate();

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

      <h3>Jumlah Vote: {votes[todo.id]}</h3>
    </div>
  );
}
