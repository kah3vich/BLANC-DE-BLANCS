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
	watchSlidesProgress: true,
});
var indexSliders_2 = new Swiper(".indexSliders_2", {
	// spaceBetween: 10,
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
});
