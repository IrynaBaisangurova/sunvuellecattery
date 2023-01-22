
// $(".multiple-items").slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });

$(".lazy").slick({
  lazyLoad: "ondemand",
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  arrows: true,
  speed: 500
});

$(".one-time").slick({
  dots: true,
  infinite: false,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true
});