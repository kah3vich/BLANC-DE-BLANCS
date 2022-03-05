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
