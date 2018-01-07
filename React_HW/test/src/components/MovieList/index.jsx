import React from 'react';
import MovieCard from 'components/MovieCard';
import movies from 'fakeDataBase';
import './styles.css';

export default class MovieList extends React.Component {
	render() {
		return(
			<div className="MovieList">
        		{movies.map( movie => <MovieCard key={movie.id}{...movie}/>)}
	        </div>
		);
	}
}