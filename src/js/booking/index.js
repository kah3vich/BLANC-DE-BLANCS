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

$(".modelBookingPhoto__close").on("click", () => {
	$(".modelBookingPhoto").addClass("display-n");
	$("body").css("overflow", "visible");
});

$(".modelBookingForm__close").on("click", () => {
	$(".modelBookingForm").addClass("display-n");
	$("body").css("overflow", "visible");
});

for (let i = 1; i <= $(".booking-block__items-block").length; i++) {
	$(
		`.booking-block__items-block:nth-child(${i}) .booking-block__items-title h3,
		.booking-block__items-block:nth-child(${i}) .booking-block__items-photo img`
	).on("click", () => {
		$(".modelBookingPhoto").removeClass("display-n");
		$("body").css("overflow", "hidden");
	});
	$(`.booking-block__items-block:nth-child(${i}) .booking-block__items-btn`).on("click", () => {
		$(".modelBookingForm").removeClass("display-n");
		$("body").css("overflow", "hidden");
	});
}

$(() => {
	$("#phoneFormBooking").mask("+7 (999) 99-99-999");
});

$.datepicker.regional["ru"] = {
	closeText: "Закрыть",
	prevText: "Предыдущий",
	nextText: "Следующий",
	currentText: "Сегодня",
	monthNames: [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь",
	],
	monthNamesShort: [
		"Янв",
		"Фев",
		"Мар",
		"Апр",
		"Май",
		"Июн",
		"Июл",
		"Авг",
		"Сен",
		"Окт",
		"Ноя",
		"Дек",
	],
	dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
	dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
	dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
	weekHeader: "Не",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "",
};
$.datepicker.setDefaults($.datepicker.regional["ru"]);

$(() => {
	$("#datepickerFormBooking").datepicker();
});

const numbers = [
	"#datepickerFormBooking",
	"#timeFormBooking",
	"#countFormBooking",
	"#nameFormBooking",
	"#surnameFormBooking",
	"#phoneFormBooking",
	"#emailFormBooking",
];

$(".modelBookingForm__btn").on("click", () => {
	const btns = numbers.map((num) => {
		if ($(`${num}`).val() == "") {
			$(`${num}`).closest("li").css("border", "2px solid red");
		} else {
			$(`${num}`).closest("li").css("border", "2px solid rgba(0, 56, 128, 0.6)");
		}
	});
});
