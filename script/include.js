$(function () {
  /* include files */
  $(".header-include").load("/include/header.html", function () {
    /* mega navi */
    $(".trigger").click(function () {
      $(".mega-navi").stop().slideToggle();
    });
    $("section").click(function () {
      $(".mega-navi").stop().slideUp();
    });
  });
  $(".footer-include").load("/include/footer.html");

  /* header scroll */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
});
