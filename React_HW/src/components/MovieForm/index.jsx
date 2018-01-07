import React from 'react';
import './styles.css';

export default class MovieForm extends React.Component {
	render() {
		return(
			<form className="MovieForm">
        		<label className="MovieForm__label">Title
        			<input className="MovieForm__input" type="text" />
        		</label>
        		<label className="MovieForm__label">Description
        			<textarea className="MovieForm__textarea" rows="8"></textarea>
        		</label>
        		<label className="MovieForm__label">
        			<select className="MovieForm__input">
        			</select>
        		</label>
                        <button className="MovieForm__submit" type="submit">submit</button>
	        </form>
		);
	}
}