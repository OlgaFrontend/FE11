import React from 'react';
import './styles.css';

export default class MovieCard extends React.Component {
	render() {
		const { title, descr, rating, chips }= this.props;
		const listItem = chips.map(chip => <li className="ChipsList__item" key={chip}>{chip}</li>);
		return(
			<div className = "MovieCard">
				<button className="MovieCard__btn MovieCard__btn--del">Delete</button>
		        <div className = "MovieInfo">
					<h2 className="MovieInfo__title">{title}</h2>
			        <p className="MovieInfo__descr">{descr}</p>
			        <div className="MovieInfo__rating">Rating: {rating}/10</div>
			    </div>
			    <ul className="ChipsList">{listItem}</ul>
		    </div>
		);
	}
}