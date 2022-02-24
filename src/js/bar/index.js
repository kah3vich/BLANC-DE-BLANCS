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
	let country = $(".bar-block__filter-country select option").eq(0).html();
	let countryImg = $(".bar-block__filter-country .c_select option").eq(0).attr("data-icon");
	let fortress = $(".bar-block__filter-fortress select option").eq(0).text();

	$(".bar-block__filter-catalog .cart-select-placeholder").html(catalog);
	$(".bar-block__filter-country .c_select-placeholder").html(`<p>${country}</p>`);
	$(".bar-block__filter-country .c_select-placeholder").append(
		`<img src="${countryImg}" alt='icons' />`
	);
	$(".bar-block__filter-fortress .cart-select-placeholder").html(fortress);
});

$(() => {
	$(".bar-block__items").not(".bar-block__items-v").hide();
	$(".bar-block__open").on("click", () => {
		$(".bar-block__items").not(".bar-block__items-v").show();
	});
});

$(() => {
	$("select.c_select").each(function () {
		var $this = $(this);

		var html = '<div class="c_select"><div class="c_select-placeholder"><p>';
		html += $this.find("option:eq(0)").text();
		html += "</p>";
		html += '<img src="';
		html += $this.find("option:eq(0)").attr("data-icon");
		html += '" alt="icons" />';
		html += '</div><div class="c_select-block display-n"><div class="c_select-wrapper">';
		$this.find("option:eq(0)").css("display", "none");
		$this.find("option").each(function () {
			html +=
				'<button class="c_select-element" data-val="' +
				$(this).attr("value") +
				'" type="button">' +
				"<p>" +
				$(this).text() +
				"</p>" +
				'<img src="' +
				$(this).attr("data-icon") +
				'" alt="icons"' +
				"</button>";
		});
		html += "</div></div></div></div>";
		$(html).insertAfter($this.hide());

		$(".c_select-element:eq(0)").addClass("c_select-element-active");

		var $next = $this.next();
		$next
			.find(".c_select-placeholder")
			.on("click", function (e) {
				e.preventDefault();
				$next.find(".c_select-block").toggleClass("display-n"),
					$next.toggleClass("c_select-item-active");
			})
			.end()
			.find(".c_select-element")
			.on("click", function (e) {
				e.preventDefault();
				$(".c_select-element").removeClass("c_select-element-active");
				$(this).addClass("c_select-element-active");
				$next.find(".c_select-placeholder").html($(this).html());
				$this.val($(this).data("val")).trigger("change");
				$next.find(".c_select-placeholder").trigger("click");
			});
	});
});

$(() => {
	if (window.innerWidth <= 1200) {
		$(".bar-block__title-filter").on("click", () => {
			if ($(".bar-block__title-filter").hasClass("bar-block__title-filter-a")) {
				$(".bar-block__filter").css("display", "none");
				$(".bar-block__title-filter").removeClass("bar-block__title-filter-a");
			} else {
				$(".bar-block__filter").css("display", "flex");
				$(".bar-block__title-filter").addClass("bar-block__title-filter-a");
			}
		});
	}
});
