import React from 'react';
import Cell from './Cell';

function Board({ board }) {
  console.log(board);
  return (
    <div className=" grid grid-cols-9 gap-2">
      {board.map((row, i) => {
        return (
          <div key={i} className="row">
            {row.map((value, j) => {
              return <Cell key={j} value={ value || '' } />
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Board;