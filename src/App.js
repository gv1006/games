import React from "react";
import TicTacToe from "./Components/TicTacToeGame/TicTacToe";
import './style.css';

const App = (props) => {

  return (
    <div className="app">
      <TicTacToe />
    </div>
  );
};

export default App;