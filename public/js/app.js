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
  var country = $(".bar-block__filter-country select option").eq(0).text();
  var fortress = $(".bar-block__filter-fortress select option").eq(0).text();
  $(".bar-block__filter-catalog .cart-select-placeholder").html(catalog);
  $(".bar-block__filter-country .cart-select-placeholder").html(country);
  $(".bar-block__filter-fortress .cart-select-placeholder").html(fortress);
});
$(function () {
  $(".bar-block__items").not(".bar-block__items-v").hide();
  $(".bar-block__open").on("click", function () {
    $(".bar-block__items").not(".bar-block__items-v").show();
  });
});
;
$(".wine-block__filter-reset").on("click", function () {
  $(".wine-block__filter-search input").val("");
  var catalog = $(".wine-block__filter-catalog select option").eq(0).text();
  var type = $(".wine-block__filter-type select option").eq(0).text();
  var country = $(".wine-block__filter-country select option").eq(0).text();
  var volume = $(".wine-block__filter-volume select option").eq(0).text();
  var add = $(".wine-block__filter-add select option").eq(0).text();
  $(".wine-block__filter-catalog .cart-select-placeholder").html(catalog);
  $(".wine-block__filter-type .cart-select-placeholder").html(type);
  $(".wine-block__filter-country .cart-select-placeholder").html(country);
  $(".wine-block__filter-volume .cart-select-placeholder").html(volume);
  $(".wine-block__filter-add .cart-select-placeholder").html(add);
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
;

var _loop = function _loop(i) {
  $(".promotion-block__nav-items:nth-child(".concat(i, ")")).on("click", function () {
    $(".promotion-block__nav-items").removeClass("promotion-block__nav-active");
    $(".promotion-block__nav-items:nth-child(".concat(i, ")")).addClass("promotion-block__nav-active");
    $(".promotion-block__list").addClass("display-n");
    $(".promotion-block__list").eq(i - 1).removeClass("display-n");
  });
};

for (var i = 1; i <= $(".promotion-block__nav-items").length; i++) {
  _loop(i);
}

;