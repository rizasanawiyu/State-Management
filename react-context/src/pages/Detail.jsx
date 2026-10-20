import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();

  const selectedTodo = useSelector(
    (state) => state.todoItem.selectedTodo
  )

  const votes = useSelector(
    (state) => state.vote.votes
  )

  if (!selectedTodo) {
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

      <h1>{selectedTodo.title}</h1>

      <p>ID: {selectedTodo.id}</p>

      <p>{selectedTodo.description}</p>

      <h3>Jumlah Vote: {votes[selectedTodo.id]}</h3>
    </div>
  );
}
