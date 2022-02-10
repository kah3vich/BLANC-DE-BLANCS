for (let i = 1; i <= $(".booking-block__nav-items").length; i++) {
	$(`.booking-block__nav-items:nth-child(${i})`).on("click", () => {
		$(".booking-block__nav-items").removeClass("booking-block__nav-active");
		$(`.booking-block__nav-items:nth-child(${i})`).addClass("booking-block__nav-active");

		$(".booking-block__items").addClass("display-n");
		$(".booking-block__items")
			.eq(i - 1)
			.removeClass("display-n");
	});
}
