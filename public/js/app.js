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
  watchSlidesProgress: true
});
var indexSliders_2 = new Swiper(".indexSliders_2", {
  // spaceBetween: 10,
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
  spaceBetween: 35
});
;
$("#btn-menu").on("click", function () {
  $(".menu-block__list").toggleClass("menu-block__list-active");
});
;
$(function () {
  $("select.cart-select").each(function () {
    var $this = $(this);
    var html = '<div class="cart-select-css cart-select-item"><div class="cart-select-placeholder">';
    html += $this.find("option:eq(0)").text();
    html += '</div><div class="cart-select-block display-n"><div class="cart-select-wrapper">';
    $this.find("option:eq(0)").css("display", "none");
    $this.find("option").each(function () {
      html += '<button class="cart-select-element" data-val="' + $(this).attr("value") + '" type="button">' + $(this).text() + "</button>";
    });
    html += "</div></div></div></div>";
    $(html).insertAfter($this.hide());
    $('.cart-select-element[data-val="undefined"]').remove();
    var $next = $this.next();
    $next.find(".cart-select-placeholder").on("click", function (e) {
      e.preventDefault();
      $next.find(".cart-select-block").toggleClass("display-n"), $next.toggleClass("cart-select-item-active");
    }).end().find(".cart-select-element").on("click", function (e) {
      e.preventDefault();
      $next.find(".cart-select-placeholder").text($(this).text());
      $this.val($(this).data("val")).trigger("change");
      $next.find(".cart-select-placeholder").trigger("click");
    });
  });
});
$(".bar-block__filter-reset").on("click", function () {
  $(".bar-block__filter-search input").val("");
  var catalog = $(".bar-block__filter-catalog select option").eq(0).text();
  var country = $(".bar-block__filter-country select option").eq(0).html();
  var countryImg = $(".bar-block__filter-country .c_select option").eq(0).attr("data-icon");
  var fortress = $(".bar-block__filter-fortress select option").eq(0).text();
  $(".bar-block__filter-catalog .cart-select-placeholder").html(catalog);
  $(".bar-block__filter-country .c_select-placeholder").html("<p>".concat(country, "</p>"));
  $(".bar-block__filter-country .c_select-placeholder").append("<img src=\"".concat(countryImg, "\" alt='icons' />"));
  $(".bar-block__filter-fortress .cart-select-placeholder").html(fortress);
});
$(function () {
  $(".bar-block__items").not(".bar-block__items-v").hide();
  $(".bar-block__open").on("click", function () {
    $(".bar-block__items").not(".bar-block__items-v").show();
  });
});
$(function () {
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
      html += '<button class="c_select-element" data-val="' + $(this).attr("value") + '" type="button">' + "<p>" + $(this).text() + "</p>" + '<img src="' + $(this).attr("data-icon") + '" alt="icons"' + "</button>";
    });
    html += "</div></div></div></div>";
    $(html).insertAfter($this.hide());
    $(".c_select-element:eq(0)").addClass("c_select-element-active");
    var $next = $this.next();
    $next.find(".c_select-placeholder").on("click", function (e) {
      e.preventDefault();
      $next.find(".c_select-block").toggleClass("display-n"), $next.toggleClass("c_select-item-active");
    }).end().find(".c_select-element").on("click", function (e) {
      e.preventDefault();
      $(".c_select-element").removeClass("c_select-element-active");
      $(this).addClass("c_select-element-active");
      $next.find(".c_select-placeholder").html($(this).html());
      $this.val($(this).data("val")).trigger("change");
      $next.find(".c_select-placeholder").trigger("click");
    });
  });
});
;
$(".wine-block__filter-reset").on("click", function () {
  $(".wine-block__filter-search input").val("");
  var catalog = $(".wine-block__filter-catalog select option").eq(0).text();
  var type = $(".wine-block__filter-type .c_select option").eq(0).html();
  var typeImg = $(".wine-block__filter-type .c_select option").eq(0).attr("data-icon");
  var country = $(".wine-block__filter-country .c_select option").eq(0).html();
  var countryImg = $(".wine-block__filter-country .c_select option").eq(0).attr("data-icon");
  var volume = $(".wine-block__filter-volume select option").eq(0).text();
  var add = $(".wine-block__filter-add select option").eq(0).text();
  $(".wine-block__filter-catalog .cart-select-placeholder").html(catalog);
  $(".wine-block__filter-volume .cart-select-placeholder").html(volume);
  $(".wine-block__filter-add .cart-select-placeholder").html(add);
  $(".wine-block__filter-type .c_select-placeholder").html("<p>".concat(type, "</p>"));
  $(".wine-block__filter-type .c_select-placeholder").append("<img src=\"".concat(typeImg, "\" alt='icons' />"));
  $(".wine-block__filter-country .c_select-placeholder").html("<p>".concat(country, "</p>"));
  $(".wine-block__filter-country .c_select-placeholder").append("<img src=\"".concat(countryImg, "\" alt='icons' />"));
});
$(function () {
  $(".wine-block__items").not(".wine-block__items-v").hide();
  $(".wine-block__open").on("click", function () {
    $(".wine-block__items").not(".wine-block__items-v").show();
  });
});
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

;
$(function () {
  $(".gallery-block__list").not(".gallery-block__list-v").hide();
  $(".gallery-block__btn").on("click", function () {
    $(".gallery-block__list").not(".gallery-block__list-v").show();
  });
});

var _loop = function _loop(i) {
  $(".gallery-block__items:nth-child(".concat(i, ")")).on("click", function () {
    $("body").css("overflow", "hidden");
    $(".modelGalleryPhoto").removeClass("display-n");
    var modelGalleryPhotos = new Swiper(".modelGalleryPhotos", {
      navigation: {
        nextEl: ".modelGalleryPhoto__block .swiper-controls .swiper-button-next",
        prevEl: ".modelGalleryPhoto__block .swiper-controls .swiper-button-prev"
      },
      slidesPerView: 1,
      spaceBetween: 0,
      initialSlide: i - 1
    });
  });
};

for (var i = 1; i <= $(".gallery-block__items").length; i++) {
  _loop(i);
}

$(".galleryClose").on("click", function () {
  $("body").css("overflow", "visible");
  $(".modelGalleryPhoto").addClass("display-n");
});
;

var _loop2 = function _loop2(_i) {
  $(".promotion-block__nav-items:nth-child(".concat(_i, ")")).on("click", function () {
    $(".promotion-block__nav-items").removeClass("promotion-block__nav-active");
    $(".promotion-block__nav-items:nth-child(".concat(_i, ")")).addClass("promotion-block__nav-active");
    $(".promotion-block__list").addClass("display-n");
    $(".promotion-block__list").eq(_i - 1).removeClass("display-n");
  });
};

for (var _i = 1; _i <= $(".promotion-block__nav-items").length; _i++) {
  _loop2(_i);
}

;

var _loop3 = function _loop3(_i2) {
  $(".booking-block__nav-items:nth-child(".concat(_i2, ")")).on("click", function () {
    $(".booking-block__nav-items").removeClass("booking-block__nav-active");
    $(".booking-block__nav-items:nth-child(".concat(_i2, ")")).addClass("booking-block__nav-active");
    $(".booking-block__items").addClass("display-n");
    $(".booking-block__items").eq(_i2 - 1).removeClass("display-n");
  });
};

for (var _i2 = 1; _i2 <= $(".booking-block__nav-items").length; _i2++) {
  _loop3(_i2);
}

$(".modelBookingPhoto__close").on("click", function () {
  $(".modelBookingPhoto").addClass("display-n");
  $("body").css("overflow", "visible");
});
$(".modelBookingForm__close").on("click", function () {
  $(".modelBookingForm").addClass("display-n");
  $("body").css("overflow", "visible");
});

for (var _i3 = 1; _i3 <= $(".booking-block__items-block").length; _i3++) {
  $(".booking-block__items-block:nth-child(".concat(_i3, ") .booking-block__items-title h3,\n\t\t.booking-block__items-block:nth-child(").concat(_i3, ") .booking-block__items-photo img")).on("click", function () {
    $(".modelBookingPhoto").removeClass("display-n");
    $("body").css("overflow", "hidden");
  });
  $(".booking-block__items-block:nth-child(".concat(_i3, ") .booking-block__items-btn")).on("click", function () {
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

  if ($(".modelBookingForm__check-checkbox input").attr("checked") !== "checked") {
    $(".modelBookingForm__check-checkbox__label:before").css("border", "1px solid red");
  } else {
    $(".modelBookingForm__check-checkbox__label:before").css("border", "1px solid #000000");
  }
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
    $('.header__logo img').eq(1).css('display', 'none');
  } else if (pageYOffset <= 100) {
    $('.header__logo img').eq(1).css('display', 'block');
  }
});
;