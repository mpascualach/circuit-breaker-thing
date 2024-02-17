import React from 'react';

function NumberPicker({ onNumberClick }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="number-picker">
      {numbers.map((number) => {
        <button key={number} onClick={() => onNumberClick(number)}></button>
      })}
    </div>
  )
}

export default NumberPicker;