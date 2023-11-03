import React, { useEffect, useState } from "react";

const TILE_COLORS = ["red", "green", "blue", "yellow"];

export default function Memory() {
  const [board, setBoard] = useState(() =>
    shuffle([...TILE_COLORS, ...TILE_COLORS]),
  );
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [matchedTiles, setMatchedTiles] = useState([]);

  useEffect(() => {
    if (selectedTiles.length < 2) return;

    if (board[selectedTiles[0]] === board[selectedTiles[1]]) {
      setMatchedTiles([...matchedTiles, ...selectedTiles]);
      setSelectedTiles([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedTiles([]), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [board, matchedTiles, selectedTiles]);

  const selectTile = (index) => {
    if (
      selectedTiles.length >= 2 ||
      selectedTiles.includes(index) ||
      matchedTiles.includes(index)
    )
      return;

    setSelectedTiles([...selectedTiles, index]);
  };

  const restartGame = () => {
    setBoard(shuffle([...TILE_COLORS, ...TILE_COLORS]));
    setSelectedTiles([]);
    setMatchedTiles([]);
  };

  const didPlayerWin = matchedTiles.length === board.length;

  return (
    <>
      <h1>{didPlayerWin ? "You Win!" : "Memory"}</h1>
      <div className="board">
        {board.map((titleColor, index) => {
          const isTurnedOver =
            selectedTiles.includes(index) || matchedTiles.includes(index);
          const className = isTurnedOver ? `tile ${titleColor}` : `tile`;
          return (
            <div
              key={index}
              className={className}
              onClick={() => selectTile(index)}
            />
          );
        })}
      </div>
      {didPlayerWin && <button onClick={restartGame}>Restart</button>}
    </>
  );
}

/**
 * Returns the array shuffled into a random order.
 * Do not edit this function.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
