/*function testPage() {
	window.onload = prompt('Type your name');
}

testPage();*/
//Login/Register Form DOM
const loginBorder = document.getElementById('login');
const regBorder = document.getElementById('register');
const login = document.querySelector('.login');
const register = document.querySelector('.register')

//Login/Register Form Events
loginBorder.addEventListener('click', () => {
	loginBorder.classList.remove('button-border');
	regBorder.classList.add('button-border');
	login.classList.remove('display');
	register.classList.add('display');
});

regBorder.addEventListener('click', () => {
	loginBorder.classList.add('button-border');
	regBorder.classList.remove('button-border');
	login.classList.add('display');
	register.classList.remove('display');
})

register.classList.add('display');
regBorder.classList.add('button-border');
/*body.style.backgroundColor = 'transparent';*/

//Hamburder Menu DOM
const menuBtn = document.querySelector('.hamburger');
const menus = document.querySelector('.nav-2-item');
const navBar = document.querySelector('.nav-2');
const loginBox = document.querySelector('.login-box');

//Hamburger Menu Events
menuBtn.addEventListener('click', () => {
	if (navBar.style.display === 'none') {
		navBar.style.display = 'block';
	 
		menus.forEach(menu => {
			menu.style.display = 'block';
			//menu.classList.toggle('fade');

			loginBox.style.display = 'block';
		});	
	}
	else {
		navBar.style.display = 'none';	
	}
	
});

