$(function () {
  /* package-details slider */
  $(".package-details-slider-items").slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
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
          centerMode: false,
          slidesToShow: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2500,
          fade: false,
          speed: 300,
          pauseOnHover: true,
        },
      },
    ],
  });

  /* package-details-navi */
  $(".package-details-navi a").click(function (e) {
    $(this).addClass("active").siblings().removeClass("active");
    /* smooth scrolling */
    let linkLocation = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(linkLocation).offset().top,
      },
      500
    );
    e.preventDefault();
  });

  /* schedule-details-navi */
  $(".schedule-details-navi a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  /* schedule-details-all-btn */
  $(".schedule-details-all-btn button").click(function () {
    if ($(".open-btn").is(":visible")) {
      $(".open-btn").hide();
      $(".close-btn").show();
      $(".schedule-details-content").show();
      $(".bi-chevron-down").hide();
      $(".bi-chevron-up").show().css("display", "inline-block");
    } else {
      $(".open-btn").show();
      $(".close-btn").hide();
      $(".schedule-details-content").hide();
      $(".bi-chevron-down").show();
      $(".bi-chevron-up").hide();
    }
  });

  /* schedule-details-content-btn */
  $(".schedule-details-header").click(function () {
    let downBtn = $(this).find(".bi-chevron-down");
    let upBtn = $(this).find(".bi-chevron-up");

    if (downBtn.is(":visible")) {
      $(this).siblings().show();
      downBtn.hide();
      upBtn.show().css("display", "inline-block");
    } else {
      $(this).siblings().hide();
      downBtn.show();
      upBtn.hide();
    }
  });

  /* modal */
  $(".btn-sub-share").click(function () {
    $(".package-share-overlay").fadeIn();
    $("body").addClass("active");
  });
  $(".package-share .btn-modal-close").click(function () {
    $(".package-share-overlay").fadeOut();
    $("body").removeClass("active");
  });
  $(".share-link").click(function () {
    $(".copied-link").show();
  });
});
