import React, { useContext, useState } from 'react';
import Board from './components/Board';
import Header from './components/Header';
import { LevelProvider } from './components/contexts/LevelContext';
import { ScoresProvider } from './components/contexts/ScoresContext';

const App = () => {
	return (
		<LevelProvider>
			<ScoresProvider>
				<Header />
				<Board />
			</ScoresProvider>
		</LevelProvider>
	);
};

export default App;
