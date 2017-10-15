var text = document.getElementById('new');
var arr = [];

var submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', submitForm);

function submitForm() {
    var index = document.getElementById('index');
	  var value = document.getElementById('value');
	  var readyIndex = parseInt(index.value);
	  
	  arr[readyIndex] = value.value;
	  text.textContent = arr;
}

var popBtn =  document.getElementById('popBtn');

popBtn.addEventListener('click', popArr);

function popArr() {
  arr.pop();
  text.textContent = arr;
}

var pushBtn =  document.getElementById('pushBtn');

pushBtn.addEventListener('click', pushArr);

function pushArr() {
  var value = document.getElementById('value');
  
  arr.push(value.value);
  text.textContent = arr;
}

var shiftBtn =  document.getElementById('shiftBtn');

shiftBtn.addEventListener('click', shiftArr);

function shiftArr() {
  arr.shift();
  text.textContent = arr;
}

var unshiftBtn =  document.getElementById('unshiftBtn');

unshiftBtn.addEventListener('click', unshiftArr);

function unshiftArr() {
  var value = document.getElementById('value');
  
  arr.unshift(value.value);
  text.textContent = arr;
}