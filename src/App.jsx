import React, { useState } from 'react';
import './App.css';

function App() {
  const [boxs, setBoxs] = useState(Array(9).fill(null));
  const [val, setVal] = useState(true);
  const handlebutton = (i) => {
    if (boxs[i] || winner(boxs)) {
      return;
    }

    const nextBox = boxs.slice();
    if (val) {
      nextBox[i] = 'X';
    } else {
      nextBox[i] = 'O';
    }
    setBoxs(nextBox);
    setVal(!val);
  };
  const winner = (boxs) => {
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
      if (boxs[a] && boxs[a] === boxs[b] && boxs[c] === boxs[a]) return boxs[a];
    }
    return null;
  };
  let result;
  const isDraw = !boxs.includes(null) && !winner(boxs);
  if (isDraw) {
    result = ' Game Over Match Draw';
  } else if (winner(boxs)) {
    result = 'Winner: ' + winner(boxs);
  } else {
    result = 'Next Player: ' + (val ? 'X' : 'O');
  }
  return (
    <div className="container">
      <h2>{result}</h2>
      <div>
        <button value={boxs[0]} onClick={() => handlebutton(0)}>
          {boxs[0]}
        </button>
        <button value={boxs[1]} onClick={() => handlebutton(1)}>
          {boxs[1]}
        </button>
        <button value={boxs[2]} onClick={() => handlebutton(2)}>
          {boxs[2]}
        </button>
      </div>
      <div>
        <button value={boxs[3]} onClick={() => handlebutton(3)}>
          {boxs[3]}
        </button>
        <button value={boxs[4]} onClick={() => handlebutton(4)}>
          {boxs[4]}
        </button>
        <button value={boxs[5]} onClick={() => handlebutton(5)}>
          {boxs[5]}
        </button>
      </div>
      <div>
        <button value={boxs[6]} onClick={() => handlebutton(6)}>
          {boxs[6]}
        </button>
        <button value={boxs[7]} onClick={() => handlebutton(7)}>
          {boxs[7]}
        </button>
        <button value={boxs[8]} onClick={() => handlebutton(8)}>
          {boxs[8]}
        </button>
      </div>
    </div>
  );
}

export default App;
