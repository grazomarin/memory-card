import React, { useContext, useState } from 'react';
import Board from './components/Board';
import Header from './components/Header';
import { ScoresProvider } from './components/ScoresContext';

const App = () => {
	return (
		<>
			<ScoresProvider>
				<Header />
				<Board />
			</ScoresProvider>
		</>
	);
};

export default App;
