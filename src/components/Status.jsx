import React, { useEffect, useState } from 'react';
import { useLevel } from './contexts/LevelContext';
import { useScore } from './contexts/ScoresContext';

const Status = () => {
	const level = useLevel();
	const score = useScore();
	const [bestScore, setBestScore] = useState(0);

	useEffect(() => {
		if (score > bestScore) setBestScore(score);
	});

	return (
		<div className="status">
			<h3>
				BEST SCORE:{' '}
				<span style={{ color: '#f0f0f0' }}>{bestScore}</span>
			</h3>
			<h3>
				SCORE: <span style={{ color: '#f0f0f0' }}>{score}</span>
			</h3>
			<h3>
				LEVEL: <span style={{ color: '#f0f0f0f0' }}>{level}</span>
			</h3>
		</div>
	);
};

export default Status;
