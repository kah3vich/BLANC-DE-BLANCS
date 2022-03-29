// $(".wine-block__filter-reset").on("click", () => {
// 	$(".wine-block__filter-search input").val("");

// 	let catalog = $(".wine-block__filter-catalog select option").eq(0).text();
// 	let type = $(".wine-block__filter-type .c_select option").eq(0).html();
// 	let typeImg = $(".wine-block__filter-type .c_select option").eq(0).attr("data-icon");
// 	let country = $(".wine-block__filter-country .c_select option").eq(0).html();
// 	let countryImg = $(".wine-block__filter-country .c_select option").eq(0).attr("data-icon");
// 	let volume = $(".wine-block__filter-volume select option").eq(0).text();
// 	let add = $(".wine-block__filter-add select option").eq(0).text();

// 	$(".wine-block__filter-catalog .cart-select-placeholder").html(catalog);

// 	$(".wine-block__filter-volume .cart-select-placeholder").html(volume);
// 	$(".wine-block__filter-add .cart-select-placeholder").html(add);

// 	$(".wine-block__filter-type .c_select-placeholder").html(`<p>${type}</p>`);
// 	$(".wine-block__filter-type .c_select-placeholder").append(
// 		`<img src="${typeImg}" alt='icons' />`
// 	);

// 	$(".wine-block__filter-country .c_select-placeholder").html(`<p>${country}</p>`);
// 	$(".wine-block__filter-country .c_select-placeholder").append(
// 		`<img src="${countryImg}" alt='icons' />`
// 	);
// });

$(() => {
	$(".wine-block__items").not(".wine-block__items-v").hide();
	$(".wine-block__open").on("click", () => {
		$(".wine-block__items").not(".wine-block__items-v").show();
	});
});

// $(() => {
// 	if (window.innerWidth <= 1200) {
// 		$(".wine-block__title-filter").on("click", () => {
// 			if ($(".wine-block__title-filter").hasClass("wine-block__title-filter-a")) {
// 				$(".wine-block__filter").css("display", "none");
// 				$(".wine-block__title-filter").removeClass("wine-block__title-filter-a");
// 			} else {
// 				$(".wine-block__filter").css("display", "flex");
// 				$(".wine-block__title-filter").addClass("wine-block__title-filter-a");
// 			}
// 		});
// 	}
// });

// $(".wine-block__filter-catalog-c__label:checkbox").on("change", () => {
// 	if ($(".wine-block__filter-catalog-c").hasClass("wine-block__filter-catalog-c__a")) {
// 		$(".wine-block__filter-catalog-c").removeClass("wine-block__filter-catalog-c__a");
// 		console.log(1);
// 	} else {
// 		$(".wine-block__filter-catalog-c").addClass("wine-block__filter-catalog-c__a");
// 		console.log(2);
// 	}
// });

const filter__wine = ["catalog", "type", "country", "volume", "product"];

filter__wine.map((item) => {
	for (let i = 1; i <= $(`.wine-block__filter-${item}-c`).length; i++) {
		$(`#wine_${item}_${i}`).change(function () {
			if (this.checked) {
				$(`.wine-block__filter-${item}-c:nth-child(${i})`).addClass(
					`wine-block__filter-${item}-c__a`
				);
			} else {
				$(`.wine-block__filter-${item}-c:nth-child(${i})`).removeClass(
					`wine-block__filter-${item}-c__a`
				);
			}
		});
	}
});

$(".wine-block__filter-search").on("click", () => {
	$(".wine-block__filter-block").removeClass("display-n");
});

$(document).mouseup(function (e) {
	var container = $(".wine-block__filter-block");
	if (container.has(e.target).length === 0) {
		container.addClass("display-n");
	}
});

// for (let i = 1; i <= $(".wine-block__filter-catalog-c").length; i++) {
// 	$(`#wine_c_${i}`).change(function () {
// 		if (this.checked) {
// 			$(`.wine-block__filter-catalog-c:nth-child(${i})`).addClass(
// 				"wine-block__filter-catalog-c__a"
// 			);
// 		} else {
// 			$(`.wine-block__filter-catalog-c:nth-child(${i})`).removeClass(
// 				"wine-block__filter-catalog-c__a"
// 			);
// 		}
// 	});
// }

// for (let i = 1; i <= $(".wine-block__filter-type-c").length; i++) {
// 	$(`#wine_t_${i}`).change(function () {
// 		if (this.checked) {
// 			$(`.wine-block__filter-type-c:nth-child(${i})`).addClass(
// 				"wine-block__filter-type-c__a"
// 			);
// 		} else {
// 			$(`.wine-block__filter-type-c:nth-child(${i})`).removeClass(
// 				"wine-block__filter-type-c__a"
// 			);
// 		}
// 	});
// }
