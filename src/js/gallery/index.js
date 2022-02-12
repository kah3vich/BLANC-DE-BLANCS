$(() => {
	$(".gallery-block__list").not(".gallery-block__list-v").hide();
	$(".gallery-block__btn").on("click", () => {
		$(".gallery-block__list").not(".gallery-block__list-v").show();
	});
});

for (let i = 1; i <= $(".gallery-block__items").length; i++) {
	$(`.gallery-block__items:nth-child(${i})`).on("click", () => {
		$("body").css("overflow", "hidden");
		$(".modelGalleryPhoto").removeClass("display-n");
		var modelGalleryPhotos = new Swiper(".modelGalleryPhotos", {
			navigation: {
				nextEl: ".modelGalleryPhoto__block .swiper-controls .swiper-button-next",
				prevEl: ".modelGalleryPhoto__block .swiper-controls .swiper-button-prev",
			},
			slidesPerView: 1,
			spaceBetween: 0,
			initialSlide: i - 1,
		});
	});
}
$(".galleryClose").on("click", () => {
	$("body").css("overflow", "visible");
	$(".modelGalleryPhoto").addClass("display-n");
});
