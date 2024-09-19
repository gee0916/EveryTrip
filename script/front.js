$(function () {
  /* front slider */
  $(".front-slider-items").slick({
    infinite: true,
    arrows: false,
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
    prevArrow: $(".controls1 .prev-arrow"),
    nextArrow: $(".controls1 .next-arrow"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".focus-package-items2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".controls2 .prev-arrow"),
    nextArrow: $(".controls2 .next-arrow"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* countdown */
  $(".countdown").countdown("2030/12/31", function (event) {
    $(this).html(event.strftime("<em>%H</em> : <em>%M</em> : <em>%S</em>"));
  });
});
