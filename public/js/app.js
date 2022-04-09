"use strict";

$(function () {
  $("select.js-select-langs").each(function () {
    var $this = $(this);
    var html = '<div class="js-select-lang lang-select-item"><div class="lang-select-placeholder">';
    html += $this.find("option:eq(0)").text();
    html += '</div><div class="lang-select-block display-n"><div class="lang-select-wrapper">';
    $this.find("option:eq(0)").css("display", "none");
    $this.find("option").each(function () {
      html += '<button class="lang-select-element" data-val="' + $(this).attr("value") + '" type="button">' + $(this).text() + "</button>";
    });
    html += "</div></div></div></div>";
    $(html).insertAfter($this.hide());
    $('.lang-select-element[data-val="undefined"]').remove();
    var $next = $this.next();
    $next.find(".lang-select-placeholder").on("click", function (e) {
      e.preventDefault();
      $next.find(".lang-select-block").toggleClass("display-n"), $next.toggleClass("lang-select-item-active");
    }).end().find(".lang-select-element").on("click", function (e) {
      e.preventDefault();
      $next.find(".lang-select-placeholder").text($(this).text());
      $this.val($(this).data("val")).trigger("change");
      $next.find(".lang-select-placeholder").trigger("click");
    });
  });
});
$(".header__menu").on("click", function () {
  $(".menus").removeClass("display-n"); // $('body').css('overflow', 'hidden')

  gsap.to($(".menus"), 0.5, {
    delay: 0.3,
    opacity: 1,
    ease: "Expo.easeInOut"
  });
  gsap.to($(".menus__wrapper"), 2, {
    delay: 0.3,
    left: "0",
    ease: "Expo.easeInOut"
  });
});
$('.menus__close').on('click', function () {
  gsap.to($(".menus"), 1, {
    delay: 0.3,
    opacity: 0,
    ease: "Expo.easeInOut"
  });
  gsap.to($(".menus__wrapper"), 0.5, {
    delay: 0.5,
    left: "-100%",
    ease: "Expo.easeInOut"
  });
  setTimeout(function () {
    $(".menus").addClass("display-n"); // $('body').css('overflow', 'visible')
  }, 1400);
});

var _loop = function _loop(i) {
  $(".menus__items:nth-child(".concat(i, ")")).hover(function () {
    $(".menus__items:nth-child(".concat(i, ")")).addClass('hover__menu-items');
  }, function () {
    $(".menus__items:nth-child(".concat(i, ")")).removeClass('hover__menu-items');
  });
};

for (var i = 1; i <= $('.menus__items').length; i++) {
  _loop(i);
}

;
var indexHeader = new Swiper(".indexHeader", {
  navigation: {
    nextEl: ".ind-header__slider .swiper-controls .swiper-button-next",
    prevEl: ".ind-header__slider .swiper-controls .swiper-button-prev"
  },
  pagination: {
    el: ".ind-header__slider .swiper-controls .swiper-pagination"
  },
  // mousewheel: true,
  keyboard: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  }
});
var indexSliders_1 = new Swiper(".indexSliders_1", {
  // spaceBetween: 10,
  slidesPerView: 7,
  // freeMode: true,
  loop: true,
  watchSlidesProgress: true,
  breakpoints: {
    1200: {
      slidesPerView: 7
    },
    1050: {
      slidesPerView: 6
    },
    900: {
      slidesPerView: 5
    },
    750: {
      slidesPerView: 4
    },
    650: {
      slidesPerView: 3
    },
    500: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }
});
var indexSliders_2 = new Swiper(".indexSliders_2", {
  // spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".ind-slider__wrapper .swiper-controls .swiper-button-next",
    prevEl: ".ind-slider__wrapper .swiper-controls .swiper-button-prev"
  },
  thumbs: {
    swiper: indexSliders_1
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true
  }
});
var indexAdvantageTable = new Swiper(".indexAdvantageTable", {
  navigation: {
    nextEl: ".ind-advantage__table .swiper-controls .swiper-button-next",
    prevEl: ".ind-advantage__table .swiper-controls .swiper-button-prev"
  },
  pagination: {
    el: ".ind-advantage__table .swiper-controls .swiper-pagination"
  },
  // mousewheel: true,
  keyboard: true,
  slidesPerView: 3,
  spaceBetween: 35,
  breakpoints: {
    1050: {
      slidesPerView: 3
    },
    550: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 15
    }
  }
});

var checkModelFormIndexDisabled = function checkModelFormIndexDisabled() {
  $('.modelIndexForm__btn').attr('disabled', 'disabled');
};

var checkModelFormIndexNoDisabled = function checkModelFormIndexNoDisabled() {
  $('.modelIndexForm__btn').removeAttr('disabled');
};

var checkModelFormIndex = function checkModelFormIndex() {
  if ($('.modelIndexForm__name input').val() == '') {
    $('.modelIndexForm__name').css('border', '1px solid red');
    checkModelFormIndexDisabled();
  } else {
    $('.modelIndexForm__name').css('border', '1px solid #003F80');
    checkModelFormIndexNoDisabled();
  }

  if ($('.modelIndexForm__email input').val() == '') {
    $('.modelIndexForm__email').css('border', '1px solid red');
    checkModelFormIndexDisabled();
  } else {
    $('.modelIndexForm__email').css('border', '1px solid #003F80');
    checkModelFormIndexNoDisabled();
  }

  if ($('.modelIndexForm__phone input').val() == '') {
    $('.modelIndexForm__phone').css('border', '1px solid red');
    checkModelFormIndexDisabled();
  } else {
    $('.modelIndexForm__phone').css('border', '1px solid #003F80');
    checkModelFormIndexNoDisabled();
  }

  if ($('.modelIndexForm__message textarea').val() == '') {
    $('.modelIndexForm__message').css('border', '1px solid red');
    checkModelFormIndexDisabled();
  } else {
    $('.modelIndexForm__message').css('border', '1px solid #003F80');
    checkModelFormIndexNoDisabled();
  }
};

$(function () {
  $('.modelIndexForm__block input').on('keyup', function () {
    checkModelFormIndex();
  });
  $('.modelIndexForm__block textarea').on('keyup', function () {
    checkModelFormIndex();
  });
});
$('.footer__contact-btn').on('click', function () {
  $('.modelIndexForm').removeClass('display-n');
  $('body').css('overflow', 'hidden');
});
$('.modelIndexForm__btn').on('click', function (e) {
  e.preventDefault();
  $('.modelIndexThx').removeClass('display-n');
  $('.modelIndexForm').addClass('display-n');
  $('body').css('overflow', 'hidden');
});
$('.modelIndexThx__close').on('click', function () {
  $('.modelIndexThx').addClass('display-n');
  $('.modelIndexForm').removeClass('display-n');
});
$('.modelIndexForm__close').on('click', function () {
  $('.modelIndexForm').addClass('display-n');
  $('body').css('overflow', 'visible');
});
var aboutSlider = new Swiper(".aboutSlider", {
  navigation: {
    nextEl: ".about-block__slider .swiper-controls .swiper-button-next",
    prevEl: ".about-block__slider .swiper-controls .swiper-button-prev"
  },
  slidesPerView: 1,
  keyboard: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  loop: true
});
;
$("#btn-menu").on("click", function () {
  $(".menu-block__list").toggleClass("menu-block__list-active");
});
$(function () {
  if (window.innerWidth <= 750) {
    $(".menu-block__title-filter").on("click", function () {
      $(".menu-block__list").css("display", "flex");
      $(".menu-block__list").addClass("menu-block__list-active");
      $(".menu-block__list-arrow img").css("transform", "rotate(180deg)");
      $("body").css("overflow", "hidden");
    });
    $("#btn-menu").on("click", function () {
      $(".menu-block__list").css("display", "none");
      $("body").css("overflow", "visible");
    });
  } // for (let i = 0; i <= $(".menu-block__items").length; i++) {


  $(".menu-block__items").not(".menu-block__items-v").hide(); // }
});
$(".menu-block__btn").on("click", function () {
  $(".menu-block__items").not(".menu-block__items-v").show();
});
; // $(() => {
// 	$("select.cart-select").each(function () {
// 		var $this = $(this);
// 		var html =
// 			'<div class="cart-select-css cart-select-item"><div class="cart-select-placeholder">';
// 		html += $this.find("option:eq(0)").text();
// 		html += '</div><div class="cart-select-block display-n"><div class="cart-select-wrapper">';
// 		$this.find("option:eq(0)").css("display", "none");
// 		$this.find("option").each(function () {
// 			html +=
// 				'<button class="cart-select-element" data-val="' +
// 				$(this).attr("value") +
// 				'" type="button">' +
// 				$(this).text() +
// 				"</button>";
// 		});
// 		html += "</div></div></div></div>";
// 		$(html).insertAfter($this.hide());
// 		$('.cart-select-element[data-val="undefined"]').remove();
// 		var $next = $this.next();
// 		$next
// 			.find(".cart-select-placeholder")
// 			.on("click", function (e) {
// 				e.preventDefault();
// 				$next.find(".cart-select-block").toggleClass("display-n"),
// 					$next.toggleClass("cart-select-item-active");
// 			})
// 			.end()
// 			.find(".cart-select-element")
// 			.on("click", function (e) {
// 				e.preventDefault();
// 				$next.find(".cart-select-placeholder").text($(this).text());
// 				$this.val($(this).data("val")).trigger("change");
// 				$next.find(".cart-select-placeholder").trigger("click");
// 			});
// 	});
// });
// $(".bar-block__filter-reset").on("click", () => {
// 	$(".bar-block__filter-search input").val("");
// 	let catalog = $(".bar-block__filter-catalog select option").eq(0).text();
// 	let country = $(".bar-block__filter-country select option").eq(0).html();
// 	let countryImg = $(".bar-block__filter-country .c_select option").eq(0).attr("data-icon");
// 	let fortress = $(".bar-block__filter-fortress select option").eq(0).text();
// 	$(".bar-block__filter-catalog .cart-select-placeholder").html(catalog);
// 	$(".bar-block__filter-country .c_select-placeholder").html(`<p>${country}</p>`);
// 	$(".bar-block__filter-country .c_select-placeholder").append(
// 		`<img src="${countryImg}" alt='icons' />`
// 	);
// 	$(".bar-block__filter-fortress .cart-select-placeholder").html(fortress);
// });

$(function () {
  $(".bar-block__items").not(".bar-block__items-v").hide();
  $(".bar-block__open").on("click", function () {
    $(".bar-block__items").not(".bar-block__items-v").show();
  });
}); // $(() => {
// 	$("select.c_select").each(function () {
// 		var $this = $(this);
// 		var html = '<div class="c_select"><div class="c_select-placeholder"><p>';
// 		html += $this.find("option:eq(0)").text();
// 		html += "</p>";
// 		html += '<img src="';
// 		html += $this.find("option:eq(0)").attr("data-icon");
// 		html += '" alt="icons" />';
// 		html += '</div><div class="c_select-block display-n"><div class="c_select-wrapper">';
// 		$this.find("option:eq(0)").css("display", "none");
// 		$this.find("option").each(function () {
// 			html +=
// 				'<button class="c_select-element" data-val="' +
// 				$(this).attr("value") +
// 				'" type="button">' +
// 				"<p>" +
// 				$(this).text() +
// 				"</p>" +
// 				'<img src="' +
// 				$(this).attr("data-icon") +
// 				'" alt="icons"' +
// 				"</button>";
// 		});
// 		html += "</div></div></div></div>";
// 		$(html).insertAfter($this.hide());
// 		$(".c_select-element:eq(0)").addClass("c_select-element-active");
// 		var $next = $this.next();
// 		$next
// 			.find(".c_select-placeholder")
// 			.on("click", function (e) {
// 				e.preventDefault();
// 				$next.find(".c_select-block").toggleClass("display-n"),
// 					$next.toggleClass("c_select-item-active");
// 			})
// 			.end()
// 			.find(".c_select-element")
// 			.on("click", function (e) {
// 				e.preventDefault();
// 				$(".c_select-element").removeClass("c_select-element-active");
// 				$(this).addClass("c_select-element-active");
// 				$next.find(".c_select-placeholder").html($(this).html());
// 				$this.val($(this).data("val")).trigger("change");
// 				$next.find(".c_select-placeholder").trigger("click");
// 			});
// 	});
// });
// $(() => {
// 	if (window.innerWidth <= 1200) {
// 		$(".bar-block__title-filter").on("click", () => {
// 			if ($(".bar-block__title-filter").hasClass("bar-block__title-filter-a")) {
// 				$(".bar-block__filter").css("display", "none");
// 				$(".bar-block__title-filter").removeClass("bar-block__title-filter-a");
// 			} else {
// 				$(".bar-block__filter").css("display", "flex");
// 				$(".bar-block__title-filter").addClass("bar-block__title-filter-a");
// 			}
// 		});
// 	}
// });

var filter__bar = ["catalog", "type", "country", "volume", "product"];
filter__bar.map(function (item) {
  var _loop2 = function _loop2(_i) {
    $("#bar_".concat(item, "_").concat(_i)).change(function () {
      if (this.checked) {
        $(".bar-block__filter-".concat(item, "-c:nth-child(").concat(_i, ")")).addClass("bar-block__filter-".concat(item, "-c__a"));
      } else {
        $(".bar-block__filter-".concat(item, "-c:nth-child(").concat(_i, ")")).removeClass("bar-block__filter-".concat(item, "-c__a"));
      }
    });
  };

  for (var _i = 1; _i <= $(".bar-block__filter-".concat(item, "-c")).length; _i++) {
    _loop2(_i);
  }
});
$(".bar-block__filter-search").on("click", function () {
  $(".bar-block__filter-block").removeClass("display-n");
});
$(document).mouseup(function (e) {
  var container = $(".bar-block__filter-block");

  if (container.has(e.target).length === 0) {
    container.addClass("display-n");
  }
});
; // $(".wine-block__filter-reset").on("click", () => {
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

$(function () {
  $(".wine-block__items").not(".wine-block__items-v").hide();
  $(".wine-block__open").on("click", function () {
    $(".wine-block__items").not(".wine-block__items-v").show();
  });
}); // $(() => {
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

var filter__wine = ["catalog", "type", "country", "volume", "product"];
filter__wine.map(function (item) {
  var _loop3 = function _loop3(_i2) {
    $("#wine_".concat(item, "_").concat(_i2)).change(function () {
      if (this.checked) {
        $(".wine-block__filter-".concat(item, "-c:nth-child(").concat(_i2, ")")).addClass("wine-block__filter-".concat(item, "-c__a"));
      } else {
        $(".wine-block__filter-".concat(item, "-c:nth-child(").concat(_i2, ")")).removeClass("wine-block__filter-".concat(item, "-c__a"));
      }
    });
  };

  for (var _i2 = 1; _i2 <= $(".wine-block__filter-".concat(item, "-c")).length; _i2++) {
    _loop3(_i2);
  }
});
$(".wine-block__filter-search").on("click", function () {
  $(".wine-block__filter-block").removeClass("display-n");
});
$(document).mouseup(function (e) {
  var container = $(".wine-block__filter-block");

  if (container.has(e.target).length === 0) {
    container.addClass("display-n");
  }
}); // for (let i = 1; i <= $(".wine-block__filter-catalog-c").length; i++) {
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

; // $(".wine-block__filter-reset").on("click", () => {
// 	$(".wine-block__filter-search input").val("");
// 	let catalog = $(".wine-block__filter-catalog select option").eq(0).text();
// 	let type = $(".wine-block__filter-type select option").eq(0).text();
// 	let country = $(".wine-block__filter-country select option").eq(0).text();
// 	let volume = $(".wine-block__filter-volume select option").eq(0).text();
// 	let add = $(".wine-block__filter-add select option").eq(0).text();
// 	$(".wine-block__filter-catalog .cart-select-placeholder").html(catalog);
// 	$(".wine-block__filter-type .cart-select-placeholder").html(type);
// 	$(".wine-block__filter-country .cart-select-placeholder").html(country);
// 	$(".wine-block__filter-volume .cart-select-placeholder").html(volume);
// 	$(".wine-block__filter-add .cart-select-placeholder").html(add);
// });
// $(() => {
// 	$(".wine-block__items").not(".wine-block__items-v").hide();
// 	$(".wine-block__open").on("click", () => {
// 		$(".wine-block__items").not(".wine-block__items-v").show();
// 	});
// });
// setInterval(function () {
// 	$(".item:not(.verygood)").each(function () {
// 		$(this).addClass("verygood");
// 		// chto to delaem
// 	});
// }, 100);
// .basket-items-list-table .basket-items-list-table-actv
// basket-item-block-properties basket-item-property-custom (2) basket-item-property-custom-name
// basket-item-property-custom-value

;
$(function () {
  $(".gallery-block__list").not(".gallery-block__list-v").hide();
  $(".gallery-block__btn").on("click", function () {
    $(".gallery-block__list").not(".gallery-block__list-v").show();
  });
});

var _loop4 = function _loop4(_i3) {
  $(".gallery-block__items:nth-child(".concat(_i3, ")")).on("click", function () {
    $("body").css("overflow", "hidden");
    $(".modelGalleryPhoto").removeClass("display-n");
    var modelGalleryPhotos = new Swiper(".modelGalleryPhotos", {
      navigation: {
        nextEl: ".modelGalleryPhoto__block .swiper-controls .swiper-button-next",
        prevEl: ".modelGalleryPhoto__block .swiper-controls .swiper-button-prev"
      },
      slidesPerView: 1,
      spaceBetween: 0,
      initialSlide: _i3 - 1
    });
  });
};

for (var _i3 = 1; _i3 <= $(".gallery-block__items").length; _i3++) {
  _loop4(_i3);
}

$(".galleryClose").on("click", function () {
  $("body").css("overflow", "visible");
  $(".modelGalleryPhoto").addClass("display-n");
});
;

var _loop5 = function _loop5(_i4) {
  $(".promotion-block__nav-items:nth-child(".concat(_i4, ")")).on("click", function () {
    $(".promotion-block__nav-items").removeClass("promotion-block__nav-active");
    $(".promotion-block__nav-items:nth-child(".concat(_i4, ")")).addClass("promotion-block__nav-active");
    $(".promotion-block__list").addClass("display-n");
    $(".promotion-block__list").eq(_i4 - 1).removeClass("display-n");
  });
};

for (var _i4 = 1; _i4 <= $(".promotion-block__nav-items").length; _i4++) {
  _loop5(_i4);
}

;

var _loop6 = function _loop6(_i5) {
  $(".booking-block__nav-items:nth-child(".concat(_i5, ")")).on("click", function () {
    $(".booking-block__nav-items").removeClass("booking-block__nav-active");
    $(".booking-block__nav-items:nth-child(".concat(_i5, ")")).addClass("booking-block__nav-active");
    $(".booking-block__items").addClass("display-n");
    $(".booking-block__items").eq(_i5 - 1).removeClass("display-n");
  });
};

for (var _i5 = 1; _i5 <= $(".booking-block__nav-items").length; _i5++) {
  _loop6(_i5);
}

$(".modelBookingPhoto__close").on("click", function () {
  $(".modelBookingPhoto").addClass("display-n");
  $("body").css("overflow", "visible");
});
$(".modelBookingForm__close").on("click", function () {
  $(".modelBookingForm").addClass("display-n");
  $("body").css("overflow", "visible");
});

for (var _i6 = 1; _i6 <= $(".booking-block__items-block").length; _i6++) {
  $(".booking-block__items-block:nth-child(".concat(_i6, ") .booking-block__items-add button")).on("click", function () {
    $(".modelBookingPhoto").removeClass("display-n");
    $("body").css("overflow", "hidden");
  });
  $(".booking-block__items-block:nth-child(".concat(_i6, ") .booking-block__items-btn")).on("click", function () {
    $(".modelBookingForm").removeClass("display-n");
    $("body").css("overflow", "hidden");
  });
}

$(function () {
  $("#phoneFormBooking").mask("+7 (999) 99-99-999");
});
$.datepicker.regional["ru"] = {
  closeText: "Закрыть",
  prevText: "Предыдущий",
  nextText: "Следующий",
  currentText: "Сегодня",
  monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
  monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
  dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
  dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  weekHeader: "Не",
  dateFormat: "dd.mm.yy",
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: ""
};
$.datepicker.setDefaults($.datepicker.regional["ru"]);
$(function () {
  $("#datepickerFormBooking").datepicker();
  $("#datepickerFormBasket").datepicker();
});
var numbers = ["#datepickerFormBooking", "#timeFormBooking", "#countFormBooking", "#nameFormBooking", "#surnameFormBooking", "#phoneFormBooking", "#emailFormBooking"];
$(".modelBookingForm__btn").on("click", function () {
  var btns = numbers.map(function (num) {
    if ($("".concat(num)).val() == "") {
      $("".concat(num)).closest("li").css("border", "2px solid red");
    } else {
      $("".concat(num)).closest("li").css("border", "2px solid rgba(0, 56, 128, 0.6)");
    }
  });
});
;
var sliderDish = new Swiper(".sliderDish", {
  navigation: {
    nextEl: ".dish-block .swiper-controls .swiper-button-next",
    prevEl: ".dish-block .swiper-controls .swiper-button-prev"
  },
  pagination: {
    el: ".dish-block .swiper-controls .swiper-pagination"
  },
  keyboard: true
});
;
window.addEventListener("scroll", function () {
  if (pageYOffset >= 100) {
    $(".header__logo img").eq(1).addClass("opacity");
    $(".header__logo img").eq(2).addClass("opacity");
  } else if (pageYOffset <= 100) {
    $(".header__logo img").eq(1).removeClass("opacity");
    $(".header__logo img").eq(2).removeClass("opacity");
  }
});
var elementBasketCount = 5;
var activeBasketIndex = 0;

var _loop7 = function _loop7(_i7) {
  $("#btnBasketPath_".concat(_i7)).on("click", function () {
    changeSlideBasket(_i7 - 1);
  });
};

for (var _i7 = 1; _i7 <= $(".basket-block__path-i").length; _i7++) {
  _loop7(_i7);
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
  for (var _i8 = 1; _i8 <= $(".basket-block__path-i").length; _i8++) {
    $(".basket-block__path-i").removeClass("basket-block__path-a");
  }

  for (var _i9 = 1; _i9 <= $(".basket-block__path-l").length; _i9++) {
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

    for (var _i10 = 0; _i10 <= 1; _i10++) {
      $(".basket-block__path-l").eq(_i10).addClass("basket-block__path-a");
      $(".basket-block__path-i").eq(_i10).addClass("basket-block__path-a");
    }
  }

  if (activeBasketIndex == 2) {
    closeBasketElement();
    $(".basket-block__confirmation").removeClass("display-n");
    lineBasketPath();

    for (var _i11 = 0; _i11 <= 2; _i11++) {
      $(".basket-block__path-l").eq(_i11).addClass("basket-block__path-a");
      $(".basket-block__path-i").eq(_i11).addClass("basket-block__path-a");
    }
  }

  if (activeBasketIndex == 3) {
    closeBasketElement();
    $(".basket-block__payment").removeClass("display-n");
    lineBasketPath();

    for (var _i12 = 0; _i12 <= 3; _i12++) {
      $(".basket-block__path-l").eq(_i12).addClass("basket-block__path-a");
      $(".basket-block__path-i").eq(_i12).addClass("basket-block__path-a");
    }
  }

  if (activeBasketIndex == 4) {
    closeBasketElement();
    $(".basket-block__bon").removeClass("display-n");
    lineBasketPath();

    for (var _i13 = 0; _i13 <= 4; _i13++) {
      $(".basket-block__path-l").eq(_i13).addClass("basket-block__path-a");
      $(".basket-block__path-i").eq(_i13).addClass("basket-block__path-a");
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

    for (var _i14 = 0; _i14 <= 1; _i14++) {
      $(".basket-block__path-l").eq(_i14).addClass("basket-block__path-a");
      $(".basket-block__path-i").eq(_i14).addClass("basket-block__path-a");
    }
  }

  if (id == 2) {
    activeBasketIndex = 2;
    closeBasketElement();
    $(".basket-block__confirmation").removeClass("display-n");
    lineBasketPath();

    for (var _i15 = 0; _i15 <= 2; _i15++) {
      $(".basket-block__path-l").eq(_i15).addClass("basket-block__path-a");
      $(".basket-block__path-i").eq(_i15).addClass("basket-block__path-a");
    }
  }

  if (id == 3) {
    activeBasketIndex = 3;
    closeBasketElement();
    $(".basket-block__payment").removeClass("display-n");
    lineBasketPath();

    for (var _i16 = 0; _i16 <= 3; _i16++) {
      $(".basket-block__path-l").eq(_i16).addClass("basket-block__path-a");
      $(".basket-block__path-i").eq(_i16).addClass("basket-block__path-a");
    }
  }

  if (id == 4) {
    activeBasketIndex = 4;
    closeBasketElement();
    $(".basket-block__bon").removeClass("display-n");
    lineBasketPath();

    for (var _i17 = 0; _i17 <= 4; _i17++) {
      $(".basket-block__path-l").eq(_i17).addClass("basket-block__path-a");
      $(".basket-block__path-i").eq(_i17).addClass("basket-block__path-a");
    }

    $(".basket-block__path-l").eq(5).addClass("basket-block__path-a");
  }
}

var _loop8 = function _loop8(_i18) {
  $(".basket-block__form-s:nth-child(".concat(_i18, ")")).on("click", function () {
    $(".basket-block__form-s").removeClass("basket-block__form-s_a");
    $(".basket-block__form-s").eq(_i18 - 1).addClass("basket-block__form-s_a");

    if ($(".basket-block__form-s:nth-child(2)").hasClass("basket-block__form-s_a")) {
      $(".basket-block__form-date").removeClass("display-n");
    } else {
      $(".basket-block__form-date").addClass("display-n");
    }
  });
};

for (var _i18 = 1; _i18 <= $(".basket-block__form-s").length; _i18++) {
  _loop8(_i18);
}

var _loop9 = function _loop9(_i19) {
  $(".basket-block__form-d:nth-child(".concat(_i19, ")")).on("click", function () {
    $(".basket-block__form-d").removeClass("basket-block__form-d_a");
    $(".basket-block__form-d").eq(_i19 - 1).addClass("basket-block__form-d_a");

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
};

for (var _i19 = 1; _i19 <= $(".basket-block__form-d").length; _i19++) {
  _loop9(_i19);
}

;
var businessClientSlider = new Swiper(".businessClientSlider", {
  navigation: {
    nextEl: ".business-block__client-w .swiper-controls .swiper-button-next",
    prevEl: ".business-block__client-w .swiper-controls .swiper-button-prev"
  },
  pagination: {
    el: ".business-block__client-w .swiper-controls .swiper-pagination"
  },
  keyboard: true,
  slidesPerView: 7,
  breakpoints: {
    1430: {
      slidesPerView: 7
    },
    1160: {
      slidesPerView: 6
    },
    900: {
      slidesPerView: 5
    },
    750: {
      slidesPerView: 4
    },
    550: {
      slidesPerView: 3
    },
    0: {
      slidesPerView: 2
    }
  }
});
$(function () {
  if (window.innerWidth >= 1430 && $('.businessClientSlider .swiper-slide').length > 7) {
    $('.business-block__client-w .swiper-controls').removeClass('opacity');
  } else if (window.innerWidth >= 1160 && $('.businessClientSlider .swiper-slide').length > 6) {
    $('.business-block__client-w .swiper-controls').removeClass('opacity');
  } else if (window.innerWidth >= 900 && $('.businessClientSlider .swiper-slide').length > 5) {
    $('.business-block__client-w .swiper-controls').removeClass('opacity');
  } else if (window.innerWidth >= 750 && $('.businessClientSlider .swiper-slide').length > 4) {
    $('.business-block__client-w .swiper-controls').removeClass('opacity');
  } else if (window.innerWidth >= 550 && $('.businessClientSlider .swiper-slide').length > 3) {
    $('.business-block__client-w .swiper-controls').removeClass('opacity');
  } else if (window.innerWidth < 550 && $('.businessClientSlider .swiper-slide').length > 2) {
    $('.business-block__client-w .swiper-controls').removeClass('opacity');
  } else {
    $('.business-block__client-w .swiper-controls').addClass('opacity');
  }
});

var _loop10 = function _loop10(_i20) {
  $(".event-block__questions-items:nth-child(".concat(_i20, ")")).on("click", function () {
    if ($(".event-block__questions-items:nth-child(".concat(_i20, ")")).hasClass("ind-question__content-i-a")) {
      $(".event-block__questions-items:nth-child(".concat(_i20, ")")).removeClass("ind-question__content-i-a");
      $(".event-block__questions-items:nth-child(".concat(_i20, ") img")).css("transform", "rotate(0deg)");
      $(".event-block__questions-items:nth-child(".concat(_i20, ") .event-block__questions-text")).addClass("question-hide");
    } else {
      $(".event-block__questions-items:nth-child(".concat(_i20, ")")).addClass("ind-question__content-i-a");
      $(".event-block__questions-items:nth-child(".concat(_i20, ") img")).css("transform", "rotate(45deg)");
      $(".event-block__questions-items:nth-child(".concat(_i20, ") .event-block__questions-text")).removeClass("question-hide");
    }
  });
};

for (var _i20 = 1; _i20 <= $(".event-block__questions-items").length; _i20++) {
  _loop10(_i20);
}

;