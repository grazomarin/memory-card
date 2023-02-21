import React, { useState } from 'react';
import { useSetScore } from './contexts/ScoresContext';

const Card = ({ rgb, ...props }) => {
	const [clicked, setClicked] = useState(false);
	const setScore = useSetScore();

	const handleClick = () => {
		if (clicked === true) {
			props.enableGameover();
			setClicked(false);
			return;
		}
		setClicked(true);
		setScore((prev) => prev + 1);
		props.incrementClickedCardNum();
	};

	return (
		<div
			className="card"
			onClick={handleClick}
			style={{
				backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
				borderColor: `rgb(${rgb.r - 40}, ${rgb.g - 40}, ${rgb.b - 40})`,
			}}
		></div>
	);
};

export default Card;
