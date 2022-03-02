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
});
