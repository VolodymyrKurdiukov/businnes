const hamburber = document.querySelector('.hamburger'),
	menu = document.querySelector('.header-menu'),
	closeElem = document.querySelector('.header-menu__close');

hamburber.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();