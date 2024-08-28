$(function () {
  /* front slider */
  $(".front-slider-items").slick({
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: false,
    speed: 300,
    pauseOnHover: true,
  });

  /* focus slider */
  $(".focus-package-items1").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".controls1 .prevArrow"),
    nextArrow: $(".controls1 .nextArrow"),
  });

  $(".focus-package-items2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".controls2 .prevArrow"),
    nextArrow: $(".controls2 .nextArrow"),
  });

  /* countdown */
  $(".countdown").countdown("2030/12/31", function (event) {
    $(this).html(event.strftime("<em>%H</em> : <em>%M</em> : <em>%S</em>"));
  });
});
