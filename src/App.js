import React, { useState } from "react";
import "./App.css";

function App() {
  let player1 = "X";
  let player2 = "O";

  const [board, setBoard] = useState([]);
  console.log(board);
  const [currentPlayer, setCurrentPlayer] = useState(player1);

  const clickHandler = (event) => {
    if (!board.find((x) => x.position === event.target.id)) {
      setBoard((prevArrayValue) => [
        ...prevArrayValue,
        { position: event.target.id, player: currentPlayer },
      ]);

      if (currentPlayer === player1) {
        setCurrentPlayer(player2);
      } else {
        setCurrentPlayer(player1);
      }
    }
  };

  console.log(board.find((x) => x.position === "box1"));

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className={"row"}>
        <div className={"column"} id="box1" onClick={clickHandler}>
          {board.find((x) => x.position === "box1") ? board.find((x) => x.position === "box1").player : ""}
        </div>
        <div className={"column"} id="box2" onClick={clickHandler}></div>
        <div className={"column"} id="box3" onClick={clickHandler}></div>
      </div>

      <div className={"row"}>
        <div className={"column"} id="box4" onClick={clickHandler}></div>
        <div className={"column"} id="box5" onClick={clickHandler}></div>
        <div className={"column"} id="box6" onClick={clickHandler}></div>
      </div>

      <div className={"row"}>
        <div className={"column"} id="box7" onClick={clickHandler}></div>
        <div className={"column"} id="box8" onClick={clickHandler}></div>
        <div className={"column"} id="box9" onClick={clickHandler}></div>
      </div>
    </div>
  );
}

export default App;
