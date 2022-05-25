import React from "react";

function Block({
  turn,
  CharacterX,
  CharacterY,
  placement,
  setCharacterX,
  setCharacterY,
  setRound,
}) {
  return (
    <>
      <div>{CharacterX.includes(placement) ? "X" : undefined}</div>
      <div>{CharacterY.includes(placement) ? "O" : undefined}</div>
      <div>
        {(CharacterX.includes(placement) || CharacterY.includes(placement)) ===
        false ? (
          <button
            onClick={() => {
                
              if (turn % 2 === 0) {
                setCharacterX(CharacterX.concat(placement));
              } else {
                setCharacterY(CharacterY.concat(placement));
              }
              setRound(turn + 1);
            }}
            className="opacity-0 hover:opacity-50"
          >
            {turn % 2 === 0 ? "X" : "O"}
          </button>
        ) : undefined}
      </div>
    </>
  );
}

export default Block;
