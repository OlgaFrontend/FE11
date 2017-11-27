//task 1
const btnAdd = document.getElementById('add');
const collectBtn = document.getElementById('collect-btn');

const createBox = () => {
	const panel = document.getElementById('panel');
	const box = document.createElement('div');
	box.classList.add('input-group');
	
	const input = document.createElement('input');
	input.type = "text";
	input.name = "input1";
	input.classList.add('input-text');
	
	const removeBtn = document.createElement('button');
	removeBtn.textContent = '-';
	removeBtn.classList.add('remove-button');
	
	box.append(input, removeBtn);
	panel.append(box);

	const removeBox = () => box.remove();
	removeBtn.addEventListener('click', removeBox);
};

const collectData = () => {
	let text = document.getElementById('text');
	let inputText = document.getElementsByName('input1');
	let radioBtn = document.getElementsByName('radio');
	let arr = [];

	const handleData = (elem, i, length) => {
		if(elem.value == "") {
			text.innerHTML = "";
			elem.classList.add('empty');
			alert('Oops, it seems you have empty fields!');
		} else {
			arr.push(elem.value);
			let separator = arr.join('--&&--');
			text.innerHTML = separator;
			elem.classList.remove('empty');
		}
	}

	if (radioBtn[1].checked) {
		for (let i = 0; i < inputText.length; i += 2) {
			handleData(inputText[i], i, inputText.length);
		}
	} else if (radioBtn[2].checked ) {
		for (let i = 1; i < inputText.length; i += 2) {
			handleData(inputText[i], i, inputText.length);
		}
	} else {
		for (let i = 0; i < inputText.length; i++) {
			handleData(inputText[i], i, inputText.length);
		}
	}
};

btnAdd.addEventListener('click', createBox);
collectBtn.addEventListener('click', collectData);

//task 2
const task2 = document.getElementById('task2');
const btn2 = document.getElementById('btn2');
const items = document.getElementsByTagName('li');
const list = document.getElementById('list');
const input2 = document.getElementById('input2');

task2.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName == 'LI') 
  	target.classList.toggle('highlight');
});

const createNewItems = () => {
	let item = document.createElement('li');
	if (input2.value != '') {
		item.innerHTML = input2.value;
		list.appendChild(item);
	} else {
		alert('Please fill in the field');
	}
}

btn2.addEventListener('click', createNewItems);
