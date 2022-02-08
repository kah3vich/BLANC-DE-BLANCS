for (let i = 1; i <= $(".promotion-block__nav-items").length; i++) {
	$(`.promotion-block__nav-items:nth-child(${i})`).on("click", () => {
		$(".promotion-block__nav-items").removeClass("promotion-block__nav-active");
		$(`.promotion-block__nav-items:nth-child(${i})`).addClass("promotion-block__nav-active");

		$(".promotion-block__list").addClass("display-n");
		$(".promotion-block__list")
			.eq(i - 1)
			.removeClass("display-n");
	});
}
