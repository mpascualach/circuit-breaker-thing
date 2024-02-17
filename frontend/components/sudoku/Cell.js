import React from 'react';

function Cell({ value }) {
  return (
    <div className="min-w-4 min-h-4 p-4 border-2 border-black">
      { value || 0 }
    </div>
  )
}

export default Cell;