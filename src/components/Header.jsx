import React, { useEffect, useState } from 'react';
import useWindowDimensions from './hooks/WindowDimensionsHook';
import Status from './Status';
import logo from '../assets/images/logo.svg';

const Header = () => {
	const [title, setTitle] = useState();
	const { height, width } = useWindowDimensions();

	useEffect(() => {
		width < 900 && width > 500
			? setTitle('CMC')
			: setTitle('Colors Memory Card');
		width;
	}, [width]);

	return (
		<div id="header">
			<h2 className="title">{title}</h2>
			<Status />
			<a href="https://github.com/grazomarin/memory-card" target="_blank">
				<img src={logo} alt="" className="logo" />
			</a>
		</div>
	);
};

export default Header;
