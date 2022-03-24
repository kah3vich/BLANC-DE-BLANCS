var businessClientSlider = new Swiper(".businessClientSlider", {
	navigation: {
		nextEl: ".business-block__client-w .swiper-controls .swiper-button-next",
		prevEl: ".business-block__client-w .swiper-controls .swiper-button-prev",
	},
	pagination: {
		el: ".business-block__client-w .swiper-controls .swiper-pagination",
	},
	keyboard: true,
	slidesPerView: 7,
	breakpoints: {
		1430: {
			slidesPerView: 7,
		},
		1160: {
			slidesPerView: 6,
		},
		900: {
			slidesPerView: 5,
		},
		750: {
			slidesPerView: 4,
		},
		550: {
			slidesPerView: 3,
		},
		0: {
			slidesPerView: 2,
		},
	},
});

$(() => {
	if (window.innerWidth >= 1430 && $('.businessClientSlider .swiper-slide').length > 7) {
		$('.business-block__client-w .swiper-controls').removeClass('opacity')
	} else if (window.innerWidth >= 1160 && $('.businessClientSlider .swiper-slide').length > 6) {
		$('.business-block__client-w .swiper-controls').removeClass('opacity')
	}  else if (window.innerWidth >= 900 && $('.businessClientSlider .swiper-slide').length > 5) {
		$('.business-block__client-w .swiper-controls').removeClass('opacity')
	}  else if (window.innerWidth >= 750 && $('.businessClientSlider .swiper-slide').length > 4) {
		$('.business-block__client-w .swiper-controls').removeClass('opacity')
	}  else if (window.innerWidth >= 550 && $('.businessClientSlider .swiper-slide').length > 3) {
		$('.business-block__client-w .swiper-controls').removeClass('opacity')
	} else if (window.innerWidth < 550 && $('.businessClientSlider .swiper-slide').length > 2) {
		$('.business-block__client-w .swiper-controls').removeClass('opacity')
	} else {
		$('.business-block__client-w .swiper-controls').addClass('opacity')
	}
})