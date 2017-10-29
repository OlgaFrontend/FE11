//Задание 1. Вычитайте строку из input. Высчитайте ее длину. Выведите результат.

var firstBtn = document.getElementById('firstBtn');

firstBtn.addEventListener('click', function() {
	var firstInput = document.getElementById('firstInput').value;
	console.log(firstInput);
	console.log(firstInput.length);
});

//Задание 2. Создайте массив, который содержит имена изображений в определенной папке.
//Запустите цикл по массиву и выведите все изображения на страницу.
//Подсказка, для вывода изображения используйте тег <img src=”xxxx”> где xxx – путь к файлу.

var images = ['pokemon1', 'pokemon2', 'pokemon3'];
var container = document.getElementById('container');
for (var i = 0; i < images.length; i++) {
	var img = document.createElement("img");
	img.src = "img/"+images[i]+".png";
	img.style.width = '200px';
	img.style.height = '200px';
	container.appendChild(img);
}

//Задание 3. Пользователь вводит URL адрес в input в формате http или https.
//Выведите только имя домена без префиксов http://, https://.

var secondBtn = document.getElementById('secondBtn');

secondBtn.addEventListener('click', function() {
	var secondInput = document.getElementById('secondInput').value;
	var secondItem = document.getElementById('secondItem');
	if(secondInput.indexOf('http://') != -1 ) {
		secondItem.innerHTML = secondInput.substring(7);
	} else if (secondInput.indexOf('https://') != -1 ) {
		secondItem.innerHTML = secondInput.substring(8);
	} else {
		alert('Please enter your URL with "http://" or "https://" formats');
	}
});

//Задание 4. Пользователь может ввести адрес сайта в формате http://site.ua, https://site.ua,
//http://www.site.ua, https://www.site.ua или site.ua.
//Ваша задача используя поиск в подстроке вывести site в виде: site.ua.

var thirdBtn = document.getElementById('thirdBtn');

thirdBtn.addEventListener('click', function() {
	var thirdInput = document.getElementById('thirdInput').value;
	var thirdItem = document.getElementById('thirdItem');
	if (thirdInput.indexOf('https://www.') != -1 ) {
		thirdItem.innerHTML = thirdInput.substring(12);
	} else if (thirdInput.indexOf('https://www.') != -1 ) {
		thirdItem.innerHTML = thirdInput.substring(12);
	} else if (thirdInput.indexOf('http://') != -1 ) {
		thirdItem.innerHTML = thirdInput.substring(7);
	} else if (thirdInput.indexOf('https://') != -1 ) {
		thirdItem.innerHTML = thirdInput.substring(8);
	}  else   {
		alert('Please enter your URL with "http://" or "https://" formats');
	}
});

//Задание 5. Пользователь заполняет форму состоящую из фамилии, имени, пароля и email.
//Используя приведенные методы выполните обработку формы состоящую из удаления пробелов до и после введённых слов,
//пароль не должен быть меньше 5 символов, email должен содержать один символ @ и не содержать пробелов.
//Если форма заполнена корректно, возвращать true.

var submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', submitForm);

function submitForm() {
	var name = document.getElementById('name').value;
	var surname = document.getElementById('surname').value;
	var password = document.getElementById('password').value;
	var email = document.getElementById('email').value;

	name = name.trim();
	surname = surname.trim();
	password = password.trim();
	email = email.trim();

	if (name != '' && surname != '' && password.length > 5 && email.includes('@') != email.lastIndexOf('@') && email.includes('.')) {
		alert(true);
	} else {
		alert(false);
	}
}

//Задание 6. Пользователь вводит символ, выведите его код.

var codeBtn = document.getElementById('codeBtn');

codeBtn.addEventListener('click', findCode); 

function findCode() {
	var symbol = document.getElementById('symbol').value;
	if (symbol != '' && symbol.length === 1) {
		alert(symbol.charCodeAt(0));
	} else {
		alert('Please enter only one symbol to find it\'s code');
	}
}
