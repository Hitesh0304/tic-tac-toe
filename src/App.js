import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box.js";


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

  // console.log(board.find((x) => x.position === "box1"));

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className={"row"}>
        <Box clickHandler={clickHandler} board={board} id="box1"/>
        <Box clickHandler={clickHandler} board={board} id="box2"/>
        <Box clickHandler={clickHandler} board={board} id="box3"/>
      </div>

      <div className={"row"}>
        <Box clickHandler={clickHandler} board={board} id="box4"/>
        <Box clickHandler={clickHandler} board={board} id="box5"/>
        <Box clickHandler={clickHandler} board={board} id="box6"/>
      </div>

      <div className={"row"}>
        <Box clickHandler={clickHandler} board={board} id="box7"/>
        <Box clickHandler={clickHandler} board={board} id="box8"/>
        <Box clickHandler={clickHandler} board={board} id="box9"/>
      </div>
    </div>
  );
}

export default App;
