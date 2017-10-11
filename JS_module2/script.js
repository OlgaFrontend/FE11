//task 1
// Задание 1. Пользователь вводит год рождения в input. 
// Пользователь может ввести год рождения в двух форматах: 1988 или 02 (имеется ввиду 2002). 
// Программа должна вывести количество лет которое исполнилось пользователю. 
function yourAge() {
	var btn = document.getElementById('btn');
	var c = new Date();
	var date = c.getFullYear();
	var dateShort = parseInt(date.toString().substring(2, 4));
	var input = document.getElementById('one').value;
	var inputNum = parseInt(input);
	var age;
	var inp;
    if (input.length == 2) {
    	if (inputNum > dateShort) {
    		inp = '19' + input;
    	} else {
    		inp = '20' + input;
    	}
    	age = date - inp;
    	alert('Your age is'+' '+age);
    } else {
		age = date - input;
		alert('Your age is'+' '+age);
	}
}
btn.addEventListener('click', yourAge);

//task 2
// Задание 2. Пользователь вводит 2 числа. 
// Найти и вывести максимальное из данных двух чисел. 
// Учтите вариант равенства чисел.
function compare() {
	var btnCompare = document.getElementById('btnCompare');
	var first= parseInt(document.getElementById('fisrt').value);
	var second = parseInt(document.getElementById('second').value);
	if (first >= second) {
		alert(first);
	} else if (first < second){
		alert(second);
	}
}
btnCompare.addEventListener('click', compare);

//task 3
// Задание 3. В первом подъезде номера квартир от 1 до 20, во втором от 21 до 64,  в третьем от 65 до 80. 
// Пользователь вводит номер квартиры, необходимо указать в каком она подъезде. 
	
function findEntrance() {
	var btnFindEntr = document.getElementById('btnFindEntr');
	var flatNum= parseInt(document.getElementById('flatNum').value);
	if (flatNum >= 1 && flatNum <= 20) {
		alert('Your entrance is first');
	} else if (flatNum >= 21 && flatNum <= 64) {
		alert('Your entrance is second');
	} else if (flatNum >= 65 && flatNum <= 80){
		alert('Your entrance is third');
	} else {
		alert('Sorry there are no flats with such numbers');
	}
}

btnFindEntr.addEventListener('click', findEntrance);

//task 4
// Задача 4. Два поля ввода: Логин и пароль. Есть 3 пользователя:
// ivan ->  333
// ssss-> 777
// gibs ->0000
// Если введен правильный логин и пароль вывести “Добро пожаловать”, в противном случае - вывести “ошибка”.


var usersData = [
	{login:"ivan", password:"333"},
	{login:"ssss", password:"777"},
	{login:"gibs", password:"0000"}
]

function checkUser() {
    var btnCheck = document.getElementById('btnCheck');
	var log = document.getElementById('login').value;
	var pass = document.getElementById('password').value;
	for (var i = 0, max = usersData.length; i < max;  i++) {
		if (log === usersData[i].login && pass === usersData[i].password) {
			alert('Welcome');
			return;
		}
	}
	alert('Sorry, incorrect login or password! Try again please!');
}

btnCheck.addEventListener('click', checkUser);

// task 5
// Задание 5. Пользователь вводит 3 числа. Найти и вывести максимальное из данных трех чисел.

function getBiggestNum() {
	var btnFindBigNum = document.getElementById('btnFindBigNum');
	var uno = parseInt(document.getElementById('uno').value);
	var dos = parseInt(document.getElementById('dos').value);
	var tres = parseInt(document.getElementById('tres').value);

	if ( uno >= dos && uno >= tres) {
		alert(uno);
	} else if (dos > uno && dos >= tres) {
		alert(dos);
	} else {
		alert(tres);
	}
}

btnFindBigNum.addEventListener('click', getBiggestNum);

//task loop for
// 1. Вывести четные числа от 0 до 101.

for (var i = 1; i < 101; i++) {
	if (i%2 == 0) {
		console.log(i);
	}
}

//2. Вывести числа в следущей последовательности: 200 199 198 ... 0.

for (var i = 200; i >= 0; i--) {
	console.log(i);
}

//3. Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).
var result = 0;
for  (var i = 0; i <= 100; i++) {
	result += i;
}
console.log(result);

//4. Задайте два input. В первый вводится число, во второе его степень.
//   С помощью цикла возведите число в степень. Напечатайте результат. 

var btnPow = document.getElementById('btnPow');

function getPow() {
	var num = parseInt(document.getElementById('num').value);
	var pow = parseInt(document.getElementById('pow').value);
	var res = num;
	for (var i = pow - 1; i > 0; i--) {
		res *= num;
	}
	alert(res);
}

btnPow.addEventListener('click', getPow);

//5. С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
//Т.е.: 
//1*7=7  
//2*7=14 
//3*7=21...

for (var i = 1; i <= 9; i++) {
	var val = 7;
	var res = 1;
	res = val * i;
	console.log(i.toString() + '*' + val.toString() + "=" + res.toString());
}

//1. С помощью цикла вывести произведение чисел от 1 до 50.

var count = 1;
for (var i = 1; i <= 50; i++) {
	count =  count * i;
	console.log(count);
}

//2. Выведите с помощью цикла коды спецсимволов от 1000 до 2000.
//   Напомню, что спецсимвол получается комбинацией &#число;  Например &#1222;

for (var i = 1000; i <= 2000; i++) {
	console.log(String.fromCharCode(i));
}