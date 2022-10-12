import Constants from '../constants';
const MAX_CHANCES = Constants.MAX_CHANCES;
const ROW_SIZE = Constants.ROW_SIZE;
const COLUMN_SIZE = Constants.COLUMN_SIZE;
const GAME_STATUS = Constants.GAME_STATUS;

console.log(Constants);
console.log(ROW_SIZE);

class GameEngine {
  #game = new Array(ROW_SIZE).fill('').map(_ => new Array(COLUMN_SIZE).fill(''));
  #noOfChancesPlayed = 0;
  #stats = {
    totalGames: 0,
    player1Wins: 0,
    player2Wins: 0,
    tie: 0
  }
  // constructor() {
  //   this.#setDefaultGameState();
  // }

  setDefaultGameState() {
    this.#game = new Array(ROW_SIZE).fill('').map(_ => new Array(COLUMN_SIZE).fill(''));
    this.#noOfChancesPlayed = 0;
  }
  get game() {
    return this.#game;
  }

  #updateCell(row, column, value) {
    if (this.game[row][column] !== '') {
      return;
    }
    this.game[row][column] = value;
  }

  #checkRow(row, value) {
    let isRowSet = true;
    for (let i = 0; i < ROW_SIZE; i++){
      if (this.#game[row][i] !== value) {
        isRowSet = false;
        break;
      }
    }
    return isRowSet;
  }

  #checkColumn(column, value) {
    let isColumnSet = true;
    for (let i = 0; i < COLUMN_SIZE; i++) {
      if (this.#game[i][column] != value) {
        isColumnSet = false;
        break;
      }
    }
    return isColumnSet;
  }

  #checkLeftDiagonal(value) {
    let isDiagonalSet = true;
    for (let i = 0; i < ROW_SIZE; i++) {
      if (this.#game[i][i] !== value) {
        isDiagonalSet = false;
        break;
      }
    }
    return isDiagonalSet;
  }

  #checkRightDiagonal(value) {
    let isDiagonalSet = true;
    for (let i = ROW_SIZE - 1; i >= 0; i--) {
      if (this.#game[i][COLUMN_SIZE - 1 - i] !== value) {
        isDiagonalSet = false;
        break;
      }
    }
    return isDiagonalSet;
  }

  #getGameStatus(row, column, value) {
    // check row
    if (this.#checkRow(row, value) 
      || this.#checkColumn(column, value) 
      || this.#checkLeftDiagonal(value) 
      || this.#checkRightDiagonal(value)) {
      return GAME_STATUS.WIN;
    }
    // check noOfChancesPlayed == MAX_CHANCES
    if (this.#noOfChancesPlayed === MAX_CHANCES) {
      return GAME_STATUS.TIE;
    }
    return GAME_STATUS.CONTINUE;
  }

  getGameStats() {
    return this.#stats;
  }

  updateGame(row, column, value, player) {
    this.#noOfChancesPlayed++;
    this.#updateCell(row, column, value);
    const gameStatus = this.#getGameStatus(row, column, value);
    if (gameStatus === Constants.GAME_STATUS.TIE) {
      this.#stats.totalGames++;
      this.#stats.tie++;
    } else if (gameStatus === Constants.GAME_STATUS.WIN) {
      this.#stats.totalGames++;
      if (player === 1) {
        this.#stats.player1Wins++;
      } else {
        this.#stats.player2Wins++;
      }
    }
    return gameStatus;
  }
}

const gameEngine = new GameEngine();
export default gameEngine;