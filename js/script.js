var button = document.getElementById('colored-buttons');
var colorName = document.getElementById('color-name');
var sizeButton = document.getElementById('sizes-buttons');
var sizeName = document.getElementById('size-name');

function red() {
	button.innerHTML = "<a class='button size-m color-red' href='#'>Awesome Button</a>";
	colorName.innerHTML = "red";
}

function blue() {
	button.innerHTML = "<a class='button size-m color-blue' href='#'>Awesome Button</a>";
	colorName.innerHTML = "blue";
}

function green() {
	button.innerHTML = "<a class='button size-m color-green' href='#'>Awesome Button</a>";
	colorName.innerHTML = "green";
}

function black() {
	button.innerHTML = "<a class='button size-m color-black' href='#'>Awesome Button</a>";
	colorName.innerHTML = "black";
}

function violet() {
	button.innerHTML = "<a class='button size-m color-violet' href='#'>Awesome Button</a>";
	colorName.innerHTML = "violet";
}

function pink() {
	button.innerHTML = "<a class='button size-m color-pink' href='#'>Awesome Button</a>";
	colorName.innerHTML = "pink";
}

function skyblue() {
	button.innerHTML = "<a class='button size-m color-sky-blue' href='#'>Awesome Button</a>";
	colorName.innerHTML = "sky-blue";
}

function s() {
	sizeButton.innerHTML = "<a class='button size-s color-sky-blue' href='#'>S Button</a>";
	sizeName.innerHTML = "s";
}

function m() {
	sizeButton.innerHTML = "<a class='button size-m color-sky-blue' href='#'>M Button</a>";
	sizeName.innerHTML = "m";
}

function l() {
	sizeButton.innerHTML = "<a class='button size-l color-sky-blue' href='#'>L Button</a>";
	sizeName.innerHTML = "l";
}

function xl() {
	sizeButton.innerHTML = "<a class='button size-xl color-sky-blue' href='#'>XL Button</a>";
	sizeName.innerHTML = "xl";
}
