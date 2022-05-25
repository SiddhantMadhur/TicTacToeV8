import React, { useState } from "react";

function IndexPage() {
  const [round, setRound] = useState(0);
  const XPlaces: string[] = [];
  const OPlaces: string[] = [];

  const handleGame = () => {};

  return (
    <div>
      <div className="text-center my-4 text-3xl font-semibold font-mono">
        TicTacToeV8
      </div>
      <div className="flex justify-center">
        <table>
          <tr>
            <td>
              <button></button>
            </td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default IndexPage;
