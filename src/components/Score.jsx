import React, { useEffect, useState } from 'react';
import { useScore } from './ScoresContext';

const Score = () => {
	const score = useScore();
	const [bestScore, setBestScore] = useState(0);

	useEffect(() => {
		if (score > bestScore) setBestScore(score);
	});

	return (
		<div className="score">
			<h3>BEST SCORE: {bestScore}</h3>
			<h3>SCORE: {score}</h3>
		</div>
	);
};

export default Score;
