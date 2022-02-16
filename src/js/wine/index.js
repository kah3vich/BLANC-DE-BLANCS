$(".wine-block__filter-reset").on("click", () => {
	$(".wine-block__filter-search input").val("");

	let catalog = $(".wine-block__filter-catalog select option").eq(0).text();
	let type = $(".wine-block__filter-type .c_select option").eq(0).html();
	let typeImg = $(".wine-block__filter-type .c_select option").eq(0).attr("data-icon");
	let country = $(".wine-block__filter-country .c_select option").eq(0).html();
	let countryImg = $(".wine-block__filter-country .c_select option").eq(0).attr("data-icon");
	let volume = $(".wine-block__filter-volume select option").eq(0).text();
	let add = $(".wine-block__filter-add select option").eq(0).text();

	$(".wine-block__filter-catalog .cart-select-placeholder").html(catalog);

	$(".wine-block__filter-volume .cart-select-placeholder").html(volume);
	$(".wine-block__filter-add .cart-select-placeholder").html(add);

	$(".wine-block__filter-type .c_select-placeholder").html(`<p>${type}</p>`);
	$(".wine-block__filter-type .c_select-placeholder").append(
		`<img src="${typeImg}" alt='icons' />`
	);

	$(".wine-block__filter-country .c_select-placeholder").html(`<p>${country}</p>`);
	$(".wine-block__filter-country .c_select-placeholder").append(
		`<img src="${countryImg}" alt='icons' />`
	);
});

$(() => {
	$(".wine-block__items").not(".wine-block__items-v").hide();
	$(".wine-block__open").on("click", () => {
		$(".wine-block__items").not(".wine-block__items-v").show();
	});
});
