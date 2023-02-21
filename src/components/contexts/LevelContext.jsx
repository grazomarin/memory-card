import React, { useState, useContext } from 'react';

const LevelContext = React.createContext();
const SetLevelContext = React.createContext();

export const useLevel = () => useContext(LevelContext);
export const useSetLevel = () => useContext(SetLevelContext);

export const LevelProvider = ({ children }) => {
	const [level, setLevel] = useState(0);

	return (
		<LevelContext.Provider value={level}>
			<SetLevelContext.Provider value={setLevel}>
				{children}
			</SetLevelContext.Provider>
		</LevelContext.Provider>
	);
};
