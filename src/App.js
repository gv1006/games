import React, { useState } from "react";
import Grid from "./Components/Grid";
import Constants from "./constants";
import gameEngine from "./Engine/gameEngine";
import Scoreboard from "./Components/Scoreboard";
import './style.css';
const players = [1, 2];
const values = ['X', 'O'];

const App = (props) => {
  const gameState = gameEngine.game;
  console.log(gameState);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [gameStatus, setGameStatus] = useState(Constants.GAME_STATUS.CONTINUE);
  const gameStats = gameEngine.getGameStats();

  const handleCellClick = (row, column, cellValue) => {
    if (gameStatus === Constants.GAME_STATUS.TIE
      || gameStatus === Constants.GAME_STATUS.WIN) {
        gameEngine.setDefaultGameState();
        setCurrentPlayer(0);
        setGameStatus(Constants.GAME_STATUS.CONTINUE)
        return;
    }
    if (cellValue !== '') {
      return;
    }
    const currentValue = values[currentPlayer];
    const newGameStatus = gameEngine.updateGame(row, column, currentValue, players[currentPlayer]);
    setGameStatus(newGameStatus);
    if (newGameStatus === Constants.GAME_STATUS.CONTINUE) {
      const nextPlayer = currentPlayer ^ 1;
      setCurrentPlayer(nextPlayer);
    }
  }

  const getTitle = () => {
    switch(gameStatus) {
      case Constants.GAME_STATUS.TIE:
        return `Tie!!`;
      case Constants.GAME_STATUS.WIN:
        return `Player ${players[currentPlayer]} Wins`;
      default:
        return `Current Player: ${players[currentPlayer]} (${values[currentPlayer]})`;
    }
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Scoreboard stats={gameStats}/>
      <p className="title">{ getTitle() }</p>
      <Grid 
        disabled={ gameStatus !== Constants.GAME_STATUS.CONTINUE } 
        gameState={gameState} 
        handleCellClick={handleCellClick}
      />
    </div>
  );
};

export default App;