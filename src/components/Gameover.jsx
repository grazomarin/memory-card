import React, { useState } from 'react';

const Gameover = (props) => {
	return (
		<div className="background">
			<div className="gameover">
				<button className="restart" onClick={props.restartGame}>
					Restart Game
				</button>
			</div>
		</div>
	);
};

export default Gameover;
