window.addEventListener("scroll", function () {
	if (pageYOffset >= 100) {
		$('.header__logo img').eq(1).css('display', 'none')
	} else if (pageYOffset <= 100)  {
        $('.header__logo img').eq(1).css('display', 'block')
    }
});
