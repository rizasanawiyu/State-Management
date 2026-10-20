
import { createContext, useContext, useState } from "react";

const VoteContext = createContext();

export function VoteProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("Budi");

  const [votes, setVotes] = useState({
    1: 3,
    2: 5,
    3: 2,
  });

  function addVote(todoId) {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [todoId]: prevVotes[todoId] + 1,
    }));
  }

  return (
    <VoteContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        votes,
        addVote,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
}

export function useVote() {
  return useContext(VoteContext);
}
