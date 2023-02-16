import React, { useState } from 'react';
import { useResetScore, useIncrementScore } from './ScoresContext';

const Card = () => {
	const [clicked, setClicked] = useState(false);
	const incrementScore = useIncrementScore();
	const resetScore = useResetScore();

	const handleClick = () => {
		if (clicked === true) {
			console.log('restart game');
			resetScore();
			return;
		}
		setClicked(true);
		incrementScore();
	};

	return <div className="card" onClick={handleClick}></div>;
};

export default Card;
