var sliderDish = new Swiper(".sliderDish", {
	navigation: {
		nextEl: ".dish-block .swiper-controls .swiper-button-next",
		prevEl: ".dish-block .swiper-controls .swiper-button-prev",
	},
	pagination: {
		el: ".dish-block .swiper-controls .swiper-pagination",
	},
	keyboard: true,
});
