import React from 'react';
import './styles.css';
import Navigation from 'components/Navigation';

export default class Header extends React.Component {
	render() {
		const linkItems =['About', 'Browse', 'Login']; 
		return(
			<header className="Header">
				<h1 className="Header__logo">movie mate</h1>
				<ul className="Navigation">
					<Navigation links={linkItems}/>
				</ul>
			</header>
		);
	}
}
