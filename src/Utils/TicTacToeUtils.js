import Constants from '../constants';
const ROW_SIZE = Constants.ROW_SIZE;
const COLUMN_SIZE = Constants.COLUMN_SIZE;
/**
 * @class TicTacToeUtils
 * @desc Utils class for Tic Tac Toe game
 */
class TicTacToeUtils {
  /**
   * @func checkColumn
   * @desc function to check column if its set
   * @param {Array} game - 2D game array which contains game details
   * @param {Number} column - column number 
   * @param {Char} value - value to check
   * @returns {Boolean}
   */
  static checkColumn(game, column, value) {
    let isColumnSet = true;
    for (let i = 0; i < COLUMN_SIZE; i++) {
      if (game[i][column] != value) {
        isColumnSet = false;
        break;
      }
    }
    return isColumnSet;
  }

   /**
   * @func checkLeftDiagonal
   * @desc function to check left diagonal if its set
   * @param {Array} game - 2D game array which contains game details
   * @param {Char} value - value to check
   * @returns {Boolean}
   */
  static checkLeftDiagonal(game, value) {
    let isDiagonalSet = true;
    for (let i = 0; i < ROW_SIZE; i++) {
      if (game[i][i] !== value) {
        isDiagonalSet = false;
        break;
      }
    }
    return isDiagonalSet;
  }

  /**
   * @func checkRightDiagonal
   * @desc function to check right diagonal if its set
   * @param {Array} game - 2D game array which contains game details
   * @param {Char} value - value to check
   * @returns {Boolean}
   */
  static checkRightDiagonal(game, value) {
    let isDiagonalSet = true;
    for (let i = ROW_SIZE - 1; i >= 0; i--) {
      if (game[i][COLUMN_SIZE - 1 - i] !== value) {
        isDiagonalSet = false;
        break;
      }
    }
    return isDiagonalSet;
  }

  /**
   * @func checkRow
   * @desc function to check row if its set
   * @param {Array} game - 2D game array which contains game details
   * @param {Number} row - column number 
   * @param {Char} value - value to check
   * @returns {Boolean}
   */
  static checkRow(game, row, value) {
    let isRowSet = true;
    for (let i = 0; i < ROW_SIZE; i++){
      if (game[row][i] !== value) {
        isRowSet = false;
        break;
      }
    }
    return isRowSet;
  }
}

export default TicTacToeUtils;