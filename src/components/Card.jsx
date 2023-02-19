import React, { useState } from 'react';
import { useResetScore, useIncrementScore } from './ScoresContext';

const Card = (props) => {
	const [clicked, setClicked] = useState(false);
	const incrementScore = useIncrementScore();
	const resetScore = useResetScore();

	const handleClick = () => {
		if (clicked === true) {
			props.enableGameover();
			setClicked(false);
			resetScore();
			return;
		}
		setClicked(true);
		incrementScore();
		props.incrementClickedCardNum();
	};

	return (
		<div className="card" onClick={handleClick}>
			{props.id}
		</div>
	);
};

export default Card;
