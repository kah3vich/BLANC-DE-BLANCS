$("#btn-menu").on("click", () => {
	$(".menu-block__list").toggleClass("menu-block__list-active");
});

$(() => {
	if (window.innerWidth <= 750) {
		$(".menu-block__title-filter").on("click", () => {
			$(".menu-block__list").css("display", "flex");
			$(".menu-block__list").addClass("menu-block__list-active");
			$(".menu-block__list-arrow img").css("transform", "rotate(180deg)");
		});
		$("#btn-menu").on("click", () => {
			$(".menu-block__list").css("display", "none");
		});
	}
});
