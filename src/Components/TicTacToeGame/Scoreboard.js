import React, { memo } from 'react';
import './Scoreboard.css';

/**
 * Component for Scoreboard section
 * @param {Object} props - object which contains title and number of a scoreboard section 
 * @returns {JSX} Component
 */
const ScoreboardSection = (props) => {
  const { title, no } = props;
  return (
    <div className='scoreboard-section'>
      <p className='title'>{title}</p>
      <p className='no'>{no}</p>
    </div>
  );
}

/**
 * Component for Scoreboard section
 * @param {Object} props - object which contains title and number of a scoreboard section 
 * @returns {JSX} Component
 */
const Scoreboard = ({stats}) => {
  console.log('re-rendering');
  // console.log(stats);
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
export default memo(Scoreboard);