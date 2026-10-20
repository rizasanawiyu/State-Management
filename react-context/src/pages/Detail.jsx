
import { useNavigate } from "react-router-dom";
import { useTodoItem } from "../contexts/ToDoItemContext";
import { useVote } from "../contexts/VoteContext";

export default function Detail() {
  const { selectedTodo } = useTodoItem();
  const { votes } = useVote();

  const navigate = useNavigate();

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
