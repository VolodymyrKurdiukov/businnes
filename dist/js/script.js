const hamburber = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburber.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counter = document.querySelectorAll('.skills__rating-counter'),
	lines = document.querySelectorAll('.skills__rating-line span');

counter.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});
