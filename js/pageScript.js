/*function testPage() {
	window.onload = prompt('Type your name');
}

testPage();*/
//Login/Register Form DOM
//const form = document.getElementsByTagName('form');
const loginBorder = document.getElementById('login');
const regBorder = document.getElementById('register');
const login = document.querySelector('.login');
const register = document.querySelector('.register');
const loginBtn = document.getElementById('btn-login');
const regBtn = document.getElementById('btn-register')

//Login/Register Form Events
loginBorder.addEventListener('click', () => {
	loginBorder.classList.add('button-border');
	regBorder.classList.remove('button-border');
	login.classList.remove('display');
	register.classList.add('display');
});

regBorder.addEventListener('click', () => {
	loginBorder.classList.remove('button-border');
	regBorder.classList.add('button-border');
	login.classList.add('display');
	register.classList.remove('display');
})

register.classList.add('display');
loginBorder.classList.add('button-border');
/*body.style.backgroundColor = 'transparent';*/

//Hamburder Menu DOM
const menuBtn = document.querySelector('.hamburger');
const menus = document.querySelectorAll('.nav-2-item');
const navBar = document.querySelector('.nav-2');
const loginBox = document.querySelector('.login-box');

//Hamburger Menu Events
navBar.style.display = 'none';
menuBtn.addEventListener('click', () => {
	if (navBar.style.display === 'none') {
		navBar.style.display = 'block';
	 
		menus.forEach(menu => {
			//menu.classList.toggle('fade');

			loginBox.style.display = 'block';
		});	
	}
	else {
		navBar.style.display = 'none';	
	}
	
});

//Sign-in and Register Form
regBtn.addEventListener('click', function(e) {
	e.preventDefault();
	const err = validate();
	if (!err) {
		alert("Form Submitted Successfully");
	}
	else {
		alert("Fill all neccessary fields")
	}

});

//Function Declaration
function validate() {
	let isValid = false;

	if (document.getElementById('fname').value === '' ||
		document.getElementById('lname').value === '' ||
		document.getElementById('username').value === '' ||
		document.getElementById('password').value === '' ||
		document.getElementById('email').value === '') {
		isValid = true;
	}

	if ((document.getElementById('password').value).length < 8) {
		isValid = true
	}

	if (!((document.getElementById('password').value).match((document.getElementById('confirm-password').value)))) {
		isValid = true;
	}


	return isValid;
}