import React from "react";

const Cell = ({value, handleCellClick, row, column}) => {
  const _handleCellClick = () => {
    handleCellClick(row, column, value);
  }
  return (
    <div className="cell" onClick={_handleCellClick}>
      { value }
    </div>
  )
};

export default Cell;