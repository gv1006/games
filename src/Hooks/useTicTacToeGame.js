import react, { useState, useEffect } from 'react';
import Constants from '../constants';
import TicTacToeUtils from '../Utils/TicTacToeUtils';
const MAX_CHANCES = Constants.MAX_CHANCES;
const ROW_SIZE = Constants.ROW_SIZE;
const COLUMN_SIZE = Constants.COLUMN_SIZE;
const GAME_STATUS = Constants.GAME_STATUS;

let noOfChancesPlayed = 0;
let currentPlayer = 1;
let gameStatus = GAME_STATUS.CONTINUE;

const VALUES = ['X', 'O'];

/**
 * @func updateGameStatus
 * @desc function to update Game
 */
const updateGameStatus = (game, row, column, value) => {
  if (TicTacToeUtils.checkRow(game, row, value) 
    || TicTacToeUtils.checkColumn(game, column, value) 
    || TicTacToeUtils.checkLeftDiagonal(game, value) 
    || TicTacToeUtils.checkRightDiagonal(game, value)) {
      gameStatus =  GAME_STATUS.WIN;
      return;
  }

  if (noOfChancesPlayed === MAX_CHANCES) {
    gameStatus = GAME_STATUS.TIE;
    return;
  }
  gameStatus = GAME_STATUS.CONTINUE;
};

/**
 * @func useTicTacToeGame
 * @desc custom hooks to be used for tic tac toe game
 */
const useTicTacToeGame = () => {
  const [gameState, setGameState] = useState(new Array(ROW_SIZE).fill('').map(_ => new Array(COLUMN_SIZE).fill('')));
  const [gameStats, setGameStats] = useState({
    totalGames: 0,
    player1Wins: 0,
    player2Wins: 0,
    tie: 0
  });
  

  /**
   * @func setDefaultGameState
   * @desc function to set default game state
   */
  const setDefaultGameState = () => {
    setGameState(new Array(ROW_SIZE).fill('').map(_ => new Array(COLUMN_SIZE).fill('')));
    currentPlayer = 1;
    noOfChancesPlayed = 0;
    gameStatus = GAME_STATUS.CONTINUE;
  };

  /**
   * @func setNewGameState
   * @desc function to set new game state
   * @param {number} row - row number changed
   * @param {*} column - column number changed
   */
  const setNewGameState = (row, column) => {
    noOfChancesPlayed++;
    const newState = gameState.map(row => [...row]);
    newState[row][column] = VALUES[currentPlayer - 1];
    updateGameStatus(newState, row, column, VALUES[currentPlayer - 1]);
    if (gameStatus === GAME_STATUS.WIN) {
      let key = 'player1Wins';
      if (currentPlayer === 2) {
        key = 'player2Wins';
      }
      setNewGameStats(key);
    }
    else if (gameStatus === GAME_STATUS.TIE) {
      setNewGameStats('tie');
    } else {
      currentPlayer = (currentPlayer == 1) ? 2 : 1;
    }
    setGameState(newState);
  };

  /**
   * @func setNewGameStats
   * @desc function to update the game stats based on the result
   * @param {*} key  - key to get updated.
   */
  const setNewGameStats = (key) => {
    const newGameStats = { ...gameStats };
    newGameStats[key]++;
    newGameStats.totalGames++;
    setGameStats(newGameStats);
  };

  return [
    currentPlayer,
    VALUES[currentPlayer - 1],
    gameState,
    gameStats,
    gameStatus,
    setDefaultGameState,
    setNewGameState
  ];
};

export default useTicTacToeGame;