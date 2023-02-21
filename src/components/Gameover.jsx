import React, { useState } from 'react';
import { useScore } from './contexts/ScoresContext';

const Gameover = (props) => {
	const score = useScore();

	return (
		<div className="background">
			<div className="gameover">
				<div className="gameover_score">Score: {score}</div>
				<button className="restart" onClick={props.restartGame}>
					Play Again
				</button>
			</div>
		</div>
	);
};

export default Gameover;
