var aboutSlider = new Swiper(".aboutSlider", {
	navigation: {
		nextEl: ".about-block__slider .swiper-controls .swiper-button-next",
		prevEl: ".about-block__slider .swiper-controls .swiper-button-prev",
	},
	slidesPerView: 1,
	keyboard: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	loop: true,
});
