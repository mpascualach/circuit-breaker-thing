import React, { useState } from 'react';
import Board from '../components/sudoku/Board';
import NumberPicker from '../components/sudoku/NumberPicker';

function SudokuPage() {
  const [board, setBoard] = useState(generateInitialBoard());
  const [selectedCell, setSelectedCell] = useState(null);

  function generateInitialBoard() {
    const board = Array(9).fill(null).map(() => Array(9).fill(null)); // generate nine rows + nine columns for each

    // fill in with some initial values

    return board;
  }

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  }

  const handleNumberClick = (number) => {
    if (selectedCell) {
      const newBoard = [...board];
      newBoard[selectedCell.row][selectedCell.col] = number;
      setBoard(newBoard);
    }
  };

  return (
    <div className="sudoku-page flex justify-center items-center h-screen bg-gray-200">
      <div className="game-board bg-white shadow-md rounded p-4">
        <Board board={board} onCellClick={handleCellClick} />
        <NumberPicker onNumberClick={handleNumberClick} />
      </div>
    </div>
  )
}

export default SudokuPage;