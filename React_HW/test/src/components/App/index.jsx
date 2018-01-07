import React from 'react';
import Header from 'components/Header';
import MovieList from 'components/MovieList';
import MovieForm from 'components/MovieForm';
import './styles.css';

export default class App extends React.Component {
	render() {
		return(
			<div className="App">
				<Header/>
				<div className="App__body">
					<MovieList />
					<MovieForm />
				</div>
			</div>
		);
	}
}