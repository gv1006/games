import React, { useState } from "react";
import Grid from "./Grid";
import Constants from "../../constants";
import Scoreboard from "./Scoreboard";
import useTicTacToeGame from "../../Hooks/useTicTacToeGame";
const GAME_STATUS = Constants.GAME_STATUS;

const TicTacToe = (props) => {
  const [
    currentPlayer,
    currentValue,
    gameState,
    gameStats,
    gameStatus,
    setDefaultGameState,
    setNewGameState
  ] = useTicTacToeGame();

  const handleCellClick = (row, column, cellValue) => {
    if (gameStatus !== GAME_STATUS.CONTINUE) {
        setDefaultGameState();
        return;
    }
    if (cellValue !== '') {
      return;
    }
    setNewGameState(row, column);
  }

  const getTitle = () => {
    switch(gameStatus) {
      case Constants.GAME_STATUS.TIE:
        return `Tie!!`;
      case Constants.GAME_STATUS.WIN:
        return `Player ${currentPlayer} Wins`;
      default:
        return `Current Player: ${currentPlayer} (${currentValue})`;
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

export default TicTacToe;