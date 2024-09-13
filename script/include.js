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

    /* member-register */
    $(".toggle-pw").click(function () {
      // toggle icon shape
      $(this).toggleClass("bi-eye");
      // toggle input type
      let inputType = $(this).parent().children("input").attr("type");
      if (inputType == "password") {
        $(this).parent().children("input").attr("type", "text");
      } else {
        $(this).parent().children("input").attr("type", "password");
      }
    });

    /* header loogin modal */
    $(".btn-login, .login-member").click(function () {
      $(".member-login-overlay").fadeIn();
    });
    $(".btn-modal-close").click(function () {
      $(".member-login-overlay").fadeOut();
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
