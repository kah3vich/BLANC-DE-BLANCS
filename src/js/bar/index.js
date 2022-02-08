$(() => {
	$("select.cart-select").each(function () {
		var $this = $(this);

		var html =
			'<div class="cart-select-css cart-select-item"><div class="cart-select-placeholder">';
		html += $this.find("option:eq(0)").text();
		html += '</div><div class="cart-select-block display-n"><div class="cart-select-wrapper">';
		$this.find("option:eq(0)").css("display", "none");
		$this.find("option").each(function () {
			html +=
				'<button class="cart-select-element" data-val="' +
				$(this).attr("value") +
				'" type="button">' +
				$(this).text() +
				"</button>";
		});
		html += "</div></div></div></div>";
		$(html).insertAfter($this.hide());

		$('.cart-select-element[data-val="undefined"]').remove();

		var $next = $this.next();
		$next
			.find(".cart-select-placeholder")
			.on("click", function (e) {
				e.preventDefault();
				$next.find(".cart-select-block").toggleClass("display-n"),
					$next.toggleClass("cart-select-item-active");
			})
			.end()
			.find(".cart-select-element")
			.on("click", function (e) {
				e.preventDefault();
				$next.find(".cart-select-placeholder").text($(this).text());
				$this.val($(this).data("val")).trigger("change");
				$next.find(".cart-select-placeholder").trigger("click");
			});
	});
});

$(".bar-block__filter-reset").on("click", () => {
	$(".bar-block__filter-search input").val("");

	let catalog = $(".bar-block__filter-catalog select option").eq(0).text();
	let country = $(".bar-block__filter-country select option").eq(0).text();
	let fortress = $(".bar-block__filter-fortress select option").eq(0).text();

	$(".bar-block__filter-catalog .cart-select-placeholder").html(catalog);
	$(".bar-block__filter-country .cart-select-placeholder").html(country);
	$(".bar-block__filter-fortress .cart-select-placeholder").html(fortress);
});

$(() => {
	$(".bar-block__items").not(".bar-block__items-v").hide();
	$(".bar-block__open").on("click", () => {
		$(".bar-block__items").not(".bar-block__items-v").show();
	});
});
