import React, { useState } from "react";
import Constants from "../constants";
import Cell from "./Cell";
import './Grid.css';
const ROW_SIZE = Constants.ROW_SIZE;
const COLUMN_SIZE = Constants.COLUMN_SIZE;

const Grid = ({ gameState, handleCellClick, currentValue, disabled }) => {
  console.log(gameState);
  const handleClick = (e) => {
    console.log(e);
  }
  const gridElements = [];
  for (let i = 0; i < gameState.length; i++) {
    let rowElements = [];
    for (let j = 0; j < gameState[0].length; j++) {
      rowElements.push(
        <Cell 
          value={gameState[i][j]} 
          key={`${i}_${j}`} 
          handleCellClick={handleCellClick} 
          currentValue={currentValue}
          row={i}
          column={j}
        />
      );
    }
    const row = <div key={i} className='grid-row'>{rowElements}</div>;
    gridElements.push(row);
  }
  return <div onClick={handleClick} className={`grid ${disabled ? 'disabled': ''}`}>{gridElements}</div>;
};

export default Grid;