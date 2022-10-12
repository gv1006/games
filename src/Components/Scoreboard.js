import React, { memo } from 'react';
import './Scoreboard.css';

const ScoreboardSection = (props) => {
  const { title, no } = props;
  console.log(title);
  return (
    <div className='scoreboard-section'>
      <p className='title'>{title}</p>
      <p className='no'>{no}</p>
    </div>
  );
}

const Scoreboard = ({stats}) => {
  console.log(stats);
  console.log('re-rendering scoreboard...');
  return (
    <div className='scoreboard-container'>
      <ScoreboardSection title='player1' no={stats.player1Wins}/>
      <ScoreboardSection title='player2' no={stats.player2Wins}/>
      <ScoreboardSection title='ties' no={stats.tie}/>
      <ScoreboardSection title='total games' no={stats.totalGames}/>
    </div>
  );
}

console.log('scoreboard');
// export default memo(Scoreboard);
export default Scoreboard;