import React from 'react';
import Cell from '.Cell';

function Board({ board }) {
  return (
    <div>
      {board.map((row, i) => {
        return (
          <div key={i} className="row">
            {row.map((value, j) => {
              <Cell key={j} value={value}/>
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Board;