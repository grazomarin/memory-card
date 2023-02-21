import React, { useContext, useState } from 'react';

const ScoreContext = React.createContext();
const SetScoreContext = React.createContext();

export const useScore = () => useContext(ScoreContext);
export const useSetScore = () => useContext(SetScoreContext);

export const ScoresProvider = ({ children }) => {
	const [score, setScore] = useState(0);

	return (
		<ScoreContext.Provider value={score}>
			<SetScoreContext.Provider value={setScore}>
				{children}
			</SetScoreContext.Provider>
		</ScoreContext.Provider>
	);
};
