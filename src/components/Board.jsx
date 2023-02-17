import React, { useEffect, useState } from 'react';
import Card from './Card';
import uniqid from 'uniqid';
import Gameover from './Gameover';

const Board = () => {
	const [level, setLevel] = useState(1);
	const [gameover, setGameover] = useState(false);

	const restartGame = () => {
		setGameover(false);
	};

	const enableGameover = () => {
		setGameover(true);
	};

	const renderLevel = () => {
		let card = [];
		for (let i = 0; i < 2 + 2 * level; i++) {
			card.push(
				<Card
					key={uniqid()}
					id={uniqid()}
					enableGameover={enableGameover}
				/>
			);
		}
		return card;
	};

	return (
		<div className="board">
			{renderLevel()}
			{gameover && <Gameover restartGame={restartGame} />}
		</div>
	);
};

export default Board;
