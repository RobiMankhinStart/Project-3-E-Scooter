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
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<i class="fa-solid arr color_prevArr fa-arrow-left"></i>',
        nextArrow: '<i class="fa-solid arr color_nextArr fa-arrow-right"></i>',
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<i class="fa-solid arr color_prevArr fa-arrow-left"></i>',
        nextArrow: '<i class="fa-solid arr color_nextArr fa-arrow-right"></i>',
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<i class="fa-solid arr color_prevArr fa-arrow-left"></i>',
        nextArrow: '<i class="fa-solid arr color_nextArr fa-arrow-right"></i>',
      },
    },
  ],
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
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  prevArrow: '<i class="fa-solid arr prevArr fa-arrow-left"></i>',
  nextArrow: '<i class="fa-solid arr nextArr fa-arrow-right"></i>',
  responsive: [
    {
      breakpoint: 575,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
