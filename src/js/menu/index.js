$("#btn-menu").on("click", () => {
	$(".menu-block__list").toggleClass("menu-block__list-active");
});

$(() => {
	if (window.innerWidth <= 750) {
		$(".menu-block__title-filter").on("click", () => {
			$(".menu-block__list").css("display", "flex");
			$(".menu-block__list").addClass("menu-block__list-active");
			$(".menu-block__list-arrow img").css("transform", "rotate(180deg)");
			$("body").css("overflow", "hidden");
		});
		$("#btn-menu").on("click", () => {
			$(".menu-block__list").css("display", "none");
			$("body").css("overflow", "visible");
		});
	}

	// for (let i = 0; i <= $(".menu-block__items").length; i++) {
	$(".menu-block__items").not(".menu-block__items-v").hide();
	// }
});

$(".menu-block__btn").on("click", () => {
	$(".menu-block__items").not(".menu-block__items-v").show();
});
