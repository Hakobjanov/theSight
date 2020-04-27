//init slick slider
$(function () {
  $(".slider").slick({
    nextArrow:
      '<button class="slick-arrow slick-prev"><img src="./images/right.svg" alt="prev arrow icon"/></button>',
    prevArrow:
      '<button class="slick-arrow slick-right"><img src="./images/left.svg" alt="next arrow icon"/></button>',
    fade: true,
  });
});
