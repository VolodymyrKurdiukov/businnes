// const hamburber = document.querySelector('.hamburger'),
// 	menu = document.querySelector('.header'),
// 	closeElem = document.querySelector('.header-menu__close');

// hamburber.addEventListener('click', () => {
// 	menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
// 	menu.classList.remove('active');
// });

$('.nav-header__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.nav-header__menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});

function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();