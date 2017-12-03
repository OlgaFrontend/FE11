const form = document.getElementById('form');
const moviesList =document.querySelector('.movies-list');
const input = document.getElementById('input');

const endpoint = 'https://api.themoviedb.org/3/';
const res = 'search/movie';
const apiKey = 'f24a0fd18f52218851075901c5a108a0';
const apiUrl = `${endpoint}${res}?api_key=${apiKey}`;

const fetchMovies = (searchQuery) =>
	fetch(apiUrl + `&query=${searchQuery}`)
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error (
				'error while fetching: ' + response.statusText
			);
		})
		.then(data => data.results)
		.catch(error => console.log('error'));

const source = document
	.querySelector('#card')
	.textContent
	.trim();

const compiled = _.template(source);

const renderMovies = (items, template, parent) => {
	let htmlString = '';
	items.forEach(item => {
		htmlString += template(item);
	});
	parent.innerHTML = htmlString;
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
    if (input.value !== '') {
    	const movies = fetchMovies(input.value);
    	movies.then(data => { 
    		const movies = data.map(movie => ({
     			rating: movie.vote_average,
				img: movie.poster_path,
				title: movie.title,
				details: movie.overview.slice(0, 99),
				date: movie.release_date
    		})
    		);
    		renderMovies(movies, compiled, moviesList);
    	});
    	input.value = "";
    } else {
  		alert('Please enter a name of the movie');
    }
});

//localStorage task

const link = document.querySelector('#link');
const lightBtn = document.querySelector('#light-btn');
const darkBtn = document.querySelector('#dark-btn');
 
const changeTheme = (theme) => {
	link.setAttribute('href', `css/${theme}.css`);
}

const saveState = (state) => {
	try {
		localStorage.setItem('theme', state);
	} catch (err) {
		console.log('save state error: ', err);
	}
};

window.addEventListener('load', () => {
	localStorage.getItem('theme') === null ?
	changeTheme(light-theme) :
	changeTheme(localStorage.getItem('theme'));
});

darkBtn.addEventListener('click', () => {
	changeTheme('dark-theme');
	saveState('dark-theme');
});

lightBtn.addEventListener('click', () => {
	changeTheme('light-theme');
	saveState('light-theme');
});

