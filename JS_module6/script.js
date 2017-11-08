//СОБЫТИЯ 

//Задача 1. Выведите координаты мыши относительно блока в момент
//движения курсора мыши внутри блока. Координаты выводить под блоком.

var test =document.getElementById('test');
test.addEventListener('mousemove', function (e) {
	e = e || window.event;
	document.getElementById('offx').innerHTML = e.offsetX;
	document.getElementById('offy').innerHTML = e.offsetY;
});

//Задача 2. Создайте блок div, в качестве изображения фона установите
//ему изображение закрытой папки. Добавьте событие, которое выполняется
//при двойном клике на блоке и заменяет фон блока на изображение открытой папки.

var folder = document.getElementById('folder');
folder.addEventListener('dblclick', changedImage);

function changedImage() {
	folder.classList.toggle('opened');
}

//Задача 3. Добавьте в документ 300-400 блоков div квадратной формы с размерами сторон 30px,
//и цветом фона. Добавление элементов выполните с помощью цикла.  Добавьте событие при наведении мыши,
//которое будет скруглять данные блоки с помощью border-radius до круга.
//(Для замедления эффекта скругления в CSS можно добавить transition).

var btnCreate = document.getElementById('btnCreate');
var container = document.getElementById('container');

btnCreate.addEventListener('click', createBlocks);

function createBlocks() {
	for (var i = 0; i < 300; i++) {
		var el = document.createElement('div');
		el.classList.add('block');
		container.appendChild(el);
	}
	
	var block = document.querySelectorAll('.block');
	block.forEach(function(el) {
		el.addEventListener('mouseover', makeCircle);
		el.addEventListener('mouseout', makeSquare);
	});

	function makeCircle() {
		this.classList.add('circle');
	}

	function makeSquare() {
		this.classList.remove('circle');
	}
}

//Задача 4. Создайте div размерами ширина – 100%, высота 250px.
//Ниже добавьте 4-5 изображений с одинаковыми классами, разного размера.
//Добавьте событие, которое будет при клике на изображении устанавливать
//его фоном блока div со свойством background-size: contain

	var arrayObj = [
	{
		src: 'img/img1.jpeg',
		alt: 'computer'
	},
	{
		src: 'img/img2.jpeg',
		alt: 'flower'
	},
	{
		src: 'img/img3.jpeg',
		alt: 'boat'
	},
	{
		src: 'img/img4.jpeg',
		alt: 'mobile-phone'
	},
	{
		src: 'img/img5.jpeg',
		alt: 'lovers-and-ocean'
	}
];

var parentDiv = document.getElementById('task4');

for (let i = 0; i < arrayObj.length; i++) {
	const img = document.createElement('img');
	img.src = arrayObj[i].src;
	img.alt = arrayObj[i].alt;

	img.onclick = function(){
		var contain = document.getElementById('contain');
		contain.style.backgroundImage = 'url(' + img.src +')';
		contain.style.backgroundRepeat = 'no-repeat';
		contain.style.backgroundSize = '100% 100%';
	}

	parentDiv.appendChild(img);
}

//Задача 5. Создайте блок размерами 50x50px. Добавьте событие клик, так,
//что при каждом клике на блоке он отодвигается на 100px вниз от предыдущего положения. 

var movingBlock = document.getElementById('moving-block');
movingBlock.addEventListener('click', changedPosition);
movingBlock.style.top = '0px';

function changedPosition() {
	var position = parseInt(movingBlock.style.top);
	if (position < 300) {
		movingBlock.style.top = (position + 100) + 'px';
	} else {
		movingBlock.style.top = '0px';
	}
}

//Задача 6. РЕАЛИЗУЙТЕ ТРИГГЕР ПЕРЕКЛЮЧАТЕЛЬ Реализуйте триггер переключатель следующего вида:
//При загрузке переключатель находится в первом положении. При клике, он переходит в положение
//два (средняя картинка), а в консоль выводится цифра 1.  При следующем клике переключатель переходит
//в состояние три (нижняя картинка), а в консоль выводится цифра 2. При следующем клике, переключатель
//переходит в состояние 1 (верхняя картинка), а в консоль выводится 0. 

var trigger = document.getElementById('trigger');
trigger.addEventListener('click', moveTrigger);
trigger.style.marginLeft = '0px';

function moveTrigger() {
	var position = parseInt(trigger.style.marginLeft);
	if (position < 200) {
		trigger.style.marginLeft = (position + 100) + 'px';
		position < 100 ? console.log(1) : console.log(2);
		
	} else {
		trigger.style.marginLeft ='0px';
		console.log(0);
	}
}
