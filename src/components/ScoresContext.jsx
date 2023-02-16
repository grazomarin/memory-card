import React, { useContext, useState } from 'react';

const ScoreContext = React.createContext();
const IncrementScoreContext = React.createContext();
const ResetScoreContext = React.createContext();

export const useScore = () => useContext(ScoreContext);
export const useIncrementScore = () => useContext(IncrementScoreContext);
export const useResetScore = () => useContext(ResetScoreContext);

export const ScoresProvider = ({ children }) => {
	const [score, setScore] = useState(0);
	const incrementScore = () => setScore((prev) => prev + 1);
	const resetScore = () => setScore(0);

	return (
		<ScoreContext.Provider value={score}>
			<IncrementScoreContext.Provider value={incrementScore}>
				<ResetScoreContext.Provider value={resetScore}>
					{children}
				</ResetScoreContext.Provider>
			</IncrementScoreContext.Provider>
		</ScoreContext.Provider>
	);
};
