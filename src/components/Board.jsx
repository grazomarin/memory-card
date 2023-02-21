import React, { useEffect, useState } from 'react';
import { useSetScore } from './contexts/ScoresContext';
import Card from './Card';
import uniqid from 'uniqid';
import Gameover from './Gameover';
import { useLevel, useSetLevel } from './contexts/LevelContext';
import { returnRandomRGB } from '../utils';

const Board = function () {
	const setScore = useSetScore();
	const level = useLevel();
	const setLevel = useSetLevel();
	const [gameover, setGameover] = useState(false);
	const [cards, setCards] = useState([]);
	const [clickedCardNum, setClickedCardNum] = useState(0);

	useEffect(() => {
		renderLevel();
	}, []);

	useEffect(() => {
		if (clickedCardNum === returnNumberOfCards() && !gameover) {
			incrementLevel();
			setClickedCardNum(0);
		}
		shuffleCards();
	}, [clickedCardNum]);

	useEffect(() => {
		if (level === 0) setLevel(1);
		renderLevel();
	}, [level]);

	// setLevel(0) is needed so that if player loses at the first level the component is able to rerender
	function restartGame() {
		setGameover(false);
		setLevel(0);
		setClickedCardNum(0);
		setScore(0);
	}

	function enableGameover() {
		setGameover(true);
	}

	function incrementClickedCardNum() {
		setClickedCardNum((prev) => prev + 1);
	}

	function incrementLevel() {
		setLevel((prev) => prev + 1);
	}

	function returnNumberOfCards() {
		return 2 + level;
	}

	function shuffleCards() {
		let copy = [...cards];
		for (let i = copy.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = copy[i];
			copy[i] = copy[j];
			copy[j] = temp;
		}
		setCards(copy);
	}

	function renderLevel() {
		let card = [];
		for (let i = 0; i < returnNumberOfCards(); i++) {
			card.push(
				<Card
					key={uniqid()}
					id={uniqid()}
					enableGameover={enableGameover}
					incrementClickedCardNum={incrementClickedCardNum}
					rgb={returnRandomRGB()}
				/>
			);
		}
		setCards(card);
	}

	return (
		<div className="board">
			{cards}
			{gameover && <Gameover restartGame={restartGame} />}
		</div>
	);
};

export default Board;
