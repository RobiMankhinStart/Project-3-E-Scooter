// ............aos ..............
AOS.init();
// ........counter URLSearchParams........
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});
// .......slick slider..........

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
});
$(".center").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  //   arrows: true,
  prevArrow: '<i class="fa-solid arr prevArr fa-arrow-left"></i>',
  nextArrow: '<i class="fa-solid arr nextArr fa-arrow-right"></i>',
});
