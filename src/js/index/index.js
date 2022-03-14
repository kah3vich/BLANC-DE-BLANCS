var indexHeader = new Swiper(".indexHeader", {
	navigation: {
		nextEl: ".ind-header__slider .swiper-controls .swiper-button-next",
		prevEl: ".ind-header__slider .swiper-controls .swiper-button-prev",
	},
	pagination: {
		el: ".ind-header__slider .swiper-controls .swiper-pagination",
	},
	// mousewheel: true,
	keyboard: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
});

var indexSliders_1 = new Swiper(".indexSliders_1", {
	// spaceBetween: 10,
	slidesPerView: 7,
	// freeMode: true,
	loop: true,
	watchSlidesProgress: true,
	breakpoints: {
		1200: {
			slidesPerView: 7,
		},
		1050: {
			slidesPerView: 6,
		},
		900: {
			slidesPerView: 5,
		},
		750: {
			slidesPerView: 4,
		},
		650: {
			slidesPerView: 3,
		},
		500: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
		},
	},
});
var indexSliders_2 = new Swiper(".indexSliders_2", {
	// spaceBetween: 10,
	loop: true,
	navigation: {
		nextEl: ".ind-slider__wrapper .swiper-controls .swiper-button-next",
		prevEl: ".ind-slider__wrapper .swiper-controls .swiper-button-prev",
	},
	thumbs: {
		swiper: indexSliders_1,
	},
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
});

var indexAdvantageTable = new Swiper(".indexAdvantageTable", {
	navigation: {
		nextEl: ".ind-advantage__table .swiper-controls .swiper-button-next",
		prevEl: ".ind-advantage__table .swiper-controls .swiper-button-prev",
	},
	pagination: {
		el: ".ind-advantage__table .swiper-controls .swiper-pagination",
	},
	// mousewheel: true,
	keyboard: true,
	slidesPerView: 3,
	spaceBetween: 35,
	breakpoints: {
		1050: {
			slidesPerView: 3,
		},
		550: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
	},
});
