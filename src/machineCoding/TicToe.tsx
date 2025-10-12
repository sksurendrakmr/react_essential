import React, { useState } from "react";

export const TicToe = () => {
  const [board, setBoard] = useState<string[] | null>(Array(9).fill(null));
  const [isXTurned, setIsXTurned] = useState(true);

  const calculateWinner = (board: string[] | null) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board && board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  if (winner) {
    return <h1>Winner is: {winner}</h1>;
  }

  if (board && board.every((cell) => cell !== null)) {
    return <h1>It's a Draw!</h1>;
  }

  const handleCellClick = (index: number) => {
    if (!board || board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurned ? "X" : "O";
    setBoard(newBoard);
    setIsXTurned(!isXTurned);
  };

  return (
    <div>
      <h1>TicToe</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gap: "5px",
          marginTop: "20px",
        }}
      >
        {board?.map((cell, index) => (
          <div
            key={index}
            style={{
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
              fontSize: "24px",
              cursor: cell ? "not-allowed" : "pointer",
            }}
            onClick={() => handleCellClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};
