window.addEventListener("scroll", function () {
	if (pageYOffset >= 100) {
		$(".header__logo img").eq(1).css("display", "none");
	} else if (pageYOffset <= 100) {
		$(".header__logo img").eq(1).css("display", "block");
	}
});

let elementBasketCount = 5;
let activeBasketIndex = 0;

for (let i = 1; i <= $(".basket-block__path-i").length; i++) {
	$(`#btnBasketPath_${i}`).on("click", () => {
		changeSlideBasket(i - 1);
	});
}

$(".basket-block__arrows-p").on("click", function () {
	changeSlideBasket("prev");
});

$(".basket-block__arrows-n").on("click", function () {
	changeSlideBasket("next");
});

function closeBasketElement() {
	$(".basket-block__lists").addClass("display-n");
	$(".basket-block__empty").addClass("display-n");
	$(".basket-block__bon").addClass("display-n");
	$(".basket-block__form").addClass("display-n");
	$(".basket-block__confirmation").addClass("display-n");
	$(".basket-block__payment").addClass("display-n");
}

function lineBasketPath() {
	for (let i = 1; i <= $(".basket-block__path-i").length; i++) {
		$(".basket-block__path-i").removeClass("basket-block__path-a");
	}
	for (let i = 1; i <= $(".basket-block__path-l").length; i++) {
		$(".basket-block__path-l").removeClass("basket-block__path-a");
	}
}

function changeSlideBasket(id) {
	if (id === "next") {
		activeBasketIndex++;
		if (activeBasketIndex === elementBasketCount) {
			activeBasketIndex = 0;
		}
	} else if (id === "prev") {
		activeBasketIndex--;
		if (activeBasketIndex < 0) {
			activeBasketIndex = elementBasketCount - 1;
		}
	}
	if (activeBasketIndex == 0) {
		closeBasketElement();
		$(".basket-block__lists").removeClass("display-n");

		lineBasketPath();
		$(".basket-block__path-l").eq(0).addClass("basket-block__path-a");
		$(".basket-block__path-i").eq(0).addClass("basket-block__path-a");
	}
	if (activeBasketIndex == 1) {
		closeBasketElement();
		$(".basket-block__form").removeClass("display-n");

		lineBasketPath();
		for (let i = 0; i <= 1; i++) {
			$(".basket-block__path-l").eq(i).addClass("basket-block__path-a");
			$(".basket-block__path-i").eq(i).addClass("basket-block__path-a");
		}
	}
	if (activeBasketIndex == 2) {
		closeBasketElement();
		$(".basket-block__confirmation").removeClass("display-n");

		lineBasketPath();
		for (let i = 0; i <= 2; i++) {
			$(".basket-block__path-l").eq(i).addClass("basket-block__path-a");
			$(".basket-block__path-i").eq(i).addClass("basket-block__path-a");
		}
	}
	if (activeBasketIndex == 3) {
		closeBasketElement();
		$(".basket-block__payment").removeClass("display-n");

		lineBasketPath();
		for (let i = 0; i <= 3; i++) {
			$(".basket-block__path-l").eq(i).addClass("basket-block__path-a");
			$(".basket-block__path-i").eq(i).addClass("basket-block__path-a");
		}
	}
	if (activeBasketIndex == 4) {
		closeBasketElement();
		$(".basket-block__bon").removeClass("display-n");

		lineBasketPath();
		for (let i = 0; i <= 4; i++) {
			$(".basket-block__path-l").eq(i).addClass("basket-block__path-a");
			$(".basket-block__path-i").eq(i).addClass("basket-block__path-a");
		}
		$(".basket-block__path-l").eq(5).addClass("basket-block__path-a");
	}
	if (id == 0) {
		activeBasketIndex = 0;
		closeBasketElement();
		$(".basket-block__lists").removeClass("display-n");

		lineBasketPath();
		$(".basket-block__path-l").eq(0).addClass("basket-block__path-a");
		$(".basket-block__path-i").eq(0).addClass("basket-block__path-a");
	}
	if (id == 1) {
		activeBasketIndex = 1;
		closeBasketElement();
		$(".basket-block__form").removeClass("display-n");

		lineBasketPath();
		for (let i = 0; i <= 1; i++) {
			$(".basket-block__path-l").eq(i).addClass("basket-block__path-a");
			$(".basket-block__path-i").eq(i).addClass("basket-block__path-a");
		}
	}
	if (id == 2) {
		activeBasketIndex = 2;
		closeBasketElement();
		$(".basket-block__confirmation").removeClass("display-n");

		lineBasketPath();
		for (let i = 0; i <= 2; i++) {
			$(".basket-block__path-l").eq(i).addClass("basket-block__path-a");
			$(".basket-block__path-i").eq(i).addClass("basket-block__path-a");
		}
	}
	if (id == 3) {
		activeBasketIndex = 3;
		closeBasketElement();
		$(".basket-block__payment").removeClass("display-n");

		lineBasketPath();
		for (let i = 0; i <= 3; i++) {
			$(".basket-block__path-l").eq(i).addClass("basket-block__path-a");
			$(".basket-block__path-i").eq(i).addClass("basket-block__path-a");
		}
	}
	if (id == 4) {
		activeBasketIndex = 4;
		closeBasketElement();
		$(".basket-block__bon").removeClass("display-n");

		lineBasketPath();
		for (let i = 0; i <= 4; i++) {
			$(".basket-block__path-l").eq(i).addClass("basket-block__path-a");
			$(".basket-block__path-i").eq(i).addClass("basket-block__path-a");
		}
		$(".basket-block__path-l").eq(5).addClass("basket-block__path-a");
	}
}

for (let i = 1; i <= $(".basket-block__form-s").length; i++) {
	$(`.basket-block__form-s:nth-child(${i})`).on("click", () => {
		$(".basket-block__form-s").removeClass("basket-block__form-s_a");
		$(".basket-block__form-s")
			.eq(i - 1)
			.addClass("basket-block__form-s_a");
		if ($(".basket-block__form-s:nth-child(2)").hasClass("basket-block__form-s_a")) {
			$(".basket-block__form-date").removeClass("display-n");
		} else {
			$(".basket-block__form-date").addClass("display-n");
		}
	});
}

for (let i = 1; i <= $(".basket-block__form-d").length; i++) {
	$(`.basket-block__form-d:nth-child(${i})`).on("click", () => {
		$(".basket-block__form-d").removeClass("basket-block__form-d_a");
		$(".basket-block__form-d")
			.eq(i - 1)
			.addClass("basket-block__form-d_a");
		if ($(".basket-block__form-d:nth-child(2)").hasClass("basket-block__form-d_a")) {
			$(".basket-block__form-street").addClass("display-n");
			$(".basket-block__form-address").addClass("display-n");
			$(".basket-block__form-text").addClass("display-n");
			$(".basket-block__form-title-d").addClass("display-n");
			$(".basket-block__form-texts").removeClass("display-n");
		} else {
			$(".basket-block__form-street").removeClass("display-n");
			$(".basket-block__form-address").removeClass("display-n");
			$(".basket-block__form-texts").addClass("display-n");
			$(".basket-block__form-text").removeClass("display-n");
			$(".basket-block__form-title-d").removeClass("display-n");
		}
	});
}
