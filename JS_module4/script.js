//Задача 1. Напишите функцию, которая выделяет все параграфы на странице красным цветом фона.

function italicizeItem() {
	var item = document.getElementsByTagName('p');
	for (var i = 0, max = item.length; i < max; i++) {
		item[i].style.backgroundColor = 'red';
	}
}

italicizeItem();

//Задача 2. Напишите функцию, которая добавляет тень всем изображениям на странице.

function addShadow() {
	var item = document.getElementsByTagName('p');
	for (var i = 0, max = item.length; i < max; i++) {
		item[i].style.boxShadow = '2px 2px 3px 4px #ccc';
	}
}

addShadow();

//Задача 3. Напишите функцию, которая нумерует все абзацы страницы и добавляет номер перед текстом абзацев.

function numberItem() {
	var item = document.getElementsByTagName('p');
	for (var i = 0, max = item.length; i < max; i++) {
		var n = i + 1;
		item[i].innerHTML = n + ' ' + item[i].innerHTML;
	}
}

numberItem();

//Задача 4. Используя глобальную переменную напишите функцию, 
//			которая будет подсчитывать количество нажатий на кнопки. Кнопок – две, реализуйте их в HTML.

var buttons = document.getElementsByClassName('clickBtn');
var clicks = document.getElementById('clicks');
var count = 0;

for (var i = 0, max = buttons.length; i < max; i++) {
	buttons[i].addEventListener('click', countEvent);
}

function countEvent() {
    count += 1;
    clicks.innerHTML = count;
}

//Задача 5. Создайте функцию, которая получает два параметра – число и степень числа.
//Используя Math.Pow внутри функции, возведите число в степень и выведите с помощью alert.


var powBtn = document.getElementById('powBtn');

powBtn.addEventListener('click', getPow);

function getPow() {
	var number = document.getElementById('number').value,
	    pow = document.getElementById('pow').value;
	
	alert(Math.pow(number, pow));
}

//Задача 6. Создайте функцию, которая принимает один параметр – строку, которая содержит тег. 
//При вызове функции, она подчеркивает все элементы на странице с данным тегом. 
//Т.е. если пользователь вызвал функцию с параметром ‘p’ – то подчеркиваются абзацы.

var underlineBtn = document.getElementById('underlineBtn');

function underlineText() {
	var tagInput = document.getElementById('tagInput').value,
		tagName = document.getElementsByTagName(tagInput);
	for (var i = 0, max = tagName.length; i < max; i++) {
		tagName[i].style.textDecoration = "underline";
	}
}

underlineBtn.addEventListener('click', underlineText);

//Задача 7. Функция принимает параметр - возраст пользователя. 
//Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

var accessBtn = document.getElementById('accessBtn');
	
function getAccess() {
	var age = document.getElementById('age').value;
	age > 16 ? alert('You are welcome!') : alert ('Sorry, you are too young...');
}

accessBtn.addEventListener('click', getAccess);

//Задача 8. Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. 
//В таком случае выведите сообщение – “Введите возраст”. 
//Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

var accessBtn1 = document.getElementById('accessBtn1');
	
function getAccess1() {
	var age1 = document.getElementById('age1').value;
	if (isNaN(age1) || age1 == "") {
		alert('Please enter your age!');
	}  else if (age1 > 16)  {
		alert('You are welcome!');
	}  else if (age1 <= 16){
		alert ('Sorry, you are too young...');
	}
}

accessBtn1.addEventListener('click', getAccess1);

//Задача 9. Создайте функцию, которая считает длину массива и возвращает ее в виде числа. 
//Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.

var arr = [1, 2, 3],
    arrBtnTrue = document.getElementById('arrBtnTrue'),
    arrBtnFalse = document.getElementById('arrBtnFalse'),
    arrLength = document.getElementById('arrLength');
function getArrayLength(arr) {
    if (arr === undefined) {
        return ('Error');
    } else {
        return (arr.length);
    }
}
arrBtnTrue.onclick = function() {
    arrLength.innerHTML = getArrayLength(arr);
};
arrBtnFalse.onclick = function() {
    arrLength.innerHTML = getArrayLength();
};

//Задача 10. Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа,
//если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8.
//Реализуйте решение с несколькими return.


var btnValue = document.getElementById('btnValue'),
	resultValue = document.getElementById('resultValue');

function getValue() {
	var userNumber = parseInt(document.getElementById('userNumber').value);
	if (userNumber >= 10) {
		return userNumber*userNumber;
	} else if (userNumber < 7) {
		return 'your number is less than 7';
	} else if (userNumber == 7 || userNumber < 10) {
		return userNumber;
	}
}

btnValue.onclick = function() {
	resultValue.innerHTML = getValue();
};

//Задача 11. Напишите игру «Угадай число». При загрузке страницы генерируется случайное число от 0 до 10.
//Пользователю дается три попытки угадать число (число вводиться в input).
//При каждой проверке выдается подсказка: больше или меньше.
//При угадывании, завершении числа попыток выдается оповещение. Количество попыток выводиться на экран.


var btnCheck = document.getElementById('btnCheck'),
	attempts = 3,
	randomNumber;

function getRandomInt(min, max) {										
	randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomNumber;
}

getRandomInt(0, 10);
console.log(getRandomInt(0,10));

btnCheck.addEventListener('click', guessNum);

function guessNum() {
    
    var userValue = parseInt(document.getElementById('userValue').value);
    
    if(attempts == 0) {
        alert('Game over');
        return;
    }

    attempts--;

    if (userValue == randomNumber) {
        alert('You guess!!!');
    } else if (userValue > 10 || userValue < 0) {
        alert('Введите число от 0 до 10. Осталось попыток:' + attempts);
    } else if (userValue > randomNumber) {
        alert('Вы ввели число больше! Осталось попыток:' + attempts);
    } else if (userValue < randomNumber) {
        alert('Вы ввели число меньше!Осталось попыток:' + attempts);
    }

}



