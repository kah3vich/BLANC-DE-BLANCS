for (let i = 1; i <= $(".event-block__questions-items").length; i++) {
	$(`.event-block__questions-items:nth-child(${i})`).on("click", () => {
		if (
			$(`.event-block__questions-items:nth-child(${i})`).hasClass("ind-question__content-i-a")
		) {
			$(`.event-block__questions-items:nth-child(${i})`).removeClass(
				"ind-question__content-i-a"
			);
			$(`.event-block__questions-items:nth-child(${i}) img`).css("transform", "rotate(0deg)");
			$(
				`.event-block__questions-items:nth-child(${i}) .event-block__questions-text`
			).addClass("question-hide");
		} else {
			$(`.event-block__questions-items:nth-child(${i})`).addClass(
				"ind-question__content-i-a"
			);
			$(`.event-block__questions-items:nth-child(${i}) img`).css(
				"transform",
				"rotate(45deg)"
			);
			$(
				`.event-block__questions-items:nth-child(${i}) .event-block__questions-text`
			).removeClass("question-hide");
		}
	});
}
