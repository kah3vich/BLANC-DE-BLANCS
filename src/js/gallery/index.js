$(() => {
	$(".gallery-block__list").not(".gallery-block__list-v").hide();
	$(".gallery-block__btn").on("click", () => {
		$(".gallery-block__list").not(".gallery-block__list-v").show();
	});
});
