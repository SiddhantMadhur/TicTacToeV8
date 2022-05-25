import React, { useEffect, useState } from "react";
import Block from "../components/block";

function IndexPage() {
  const [round, setRound] = useState(0);
  const [XPlaces, setXPlaces] = useState([]);
  const [startTime, setStartTime] = useState(0)

  const [OPlaces, setOPlaces] = useState([]);

  useEffect(()=>{
    setStartTime(performance.now())
  },[])

const win = (winner) => {
  alert("won")
}

  const handleGame = (player:string[]) => {
    
    if(player.includes("tl") && player.includes("tm") && player.includes("tr")){
      win(player)
    }else if(player.includes("ml") && player.includes("mm") && player.includes("mr")){
      win(player)
    }else if(player.includes("bl") && player.includes("bm") && player.includes("br")){
      win(player)
    }else if(player.includes("tl") && player.includes("ml") && player.includes("bl")){
      win(player)
    }else if(player.includes("tm") && player.includes("mm") && player.includes("bm")){
      win(player)
    }else if(player.includes("tr") && player.includes("mr") && player.includes("br")){
      win(player)
    }else if(player.includes("tl") && player.includes("mm") && player.includes("br")){
      win(player)
    }else if(player.includes("tr") && player.includes("mm") && player.includes("bl")){
      win(player)
    }
    
  };

  useEffect(() => {
    
  }, [round]);

  return (
    <div>
      <div className="text-center my-4 text-3xl font-semibold font-mono">
        TicTacToeV8
      </div>
      <div className="flex justify-center">
        <table>
          <tr>
            <td>
              <Block
                turn={round}
                CharacterX={XPlaces}
                CharacterY={OPlaces}
                placement="tl"
                setCharacterX={setXPlaces}
                setCharacterY={setOPlaces}
                setRound={setRound}
              />
            </td>
            <td>
              {" "}
              <Block
                turn={round}
                CharacterX={XPlaces}
                CharacterY={OPlaces}
                placement="tm"
                setRound={setRound}
                setCharacterX={setXPlaces}
                setCharacterY={setOPlaces}
              />{" "}
            </td>
            <td>
              {" "}
              <Block
                turn={round}
                CharacterX={XPlaces}
                CharacterY={OPlaces}
                placement="tr"
                setRound={setRound}
                setCharacterX={setXPlaces}
                setCharacterY={setOPlaces}
              />{" "}
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <Block
                turn={round}
                CharacterX={XPlaces}
                CharacterY={OPlaces}
                placement="ml"
                setRound={setRound}
                setCharacterX={setXPlaces}
                setCharacterY={setOPlaces}
              />{" "}
            </td>
            <td>
              {" "}
              <Block
                turn={round}
                CharacterX={XPlaces}
                CharacterY={OPlaces}
                placement="mm"
                setRound={setRound}
                setCharacterX={setXPlaces}
                setCharacterY={setOPlaces}
              />{" "}
            </td>
            <td>
              {" "}
              <Block
                turn={round}
                CharacterX={XPlaces}
                CharacterY={OPlaces}
                placement="mr"
                setRound={setRound}
                setCharacterX={setXPlaces}
                setCharacterY={setOPlaces}
              />{" "}
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <Block
                turn={round}
                CharacterX={XPlaces}
                CharacterY={OPlaces}
                placement="bl"
                setRound={setRound}
                setCharacterX={setXPlaces}
                setCharacterY={setOPlaces}
              />{" "}
            </td>
            <td>
              {" "}
              <Block
                turn={round}
                CharacterX={XPlaces}
                CharacterY={OPlaces}
                placement="bm"
                setRound={setRound}
                setCharacterX={setXPlaces}
                setCharacterY={setOPlaces}
              />{" "}
            </td>
            <td>
              {" "}
              <Block
                turn={round}
                CharacterX={XPlaces}
                CharacterY={OPlaces}
                placement="br"
                setRound={setRound}
                setCharacterX={setXPlaces}
                setCharacterY={setOPlaces}
              />{" "}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default IndexPage;
