import React from 'react';
import './styles.css';

export default class Navigation extends React.Component {
	render() {
		const {links} = this.props;
		return(
			links.map(link =>
				<li key={link} className="Navigation__item">
					<a href="#" className="Navigation__link">
						{link}
					</a>
				</li>)
		);
	}
}

