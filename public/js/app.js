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