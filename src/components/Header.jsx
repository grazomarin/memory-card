import React, { useState } from 'react';
import Score from './Score';
import logo from '../assets/images/logo.svg';

const Header = () => {
	return (
		<div id="header">
			<h2>Fruits Memory Card</h2>
			<Score />
			<img src={logo} alt="" className="logo" />
		</div>
	);
};

export default Header;
