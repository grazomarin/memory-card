import React, { useState } from 'react';
import Card from './Card';

const Board = () => {
	return (
		<div className="board">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default Board;
