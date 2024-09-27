$(function () {
  /* include files */
  $(".header-include").load("/include/header.html", function () {
    /* mega navi */
    $(window)
      .resize(function () {
        if ($(window).innerWidth() > 767) {
          $(".trigger").click(function () {
            $(this).toggleClass("active");
            $(".mega-navi").stop().slideToggle(300);
          });
          $("section").click(function () {
            $(".mega-navi").stop().slideUp(300);
          });
        } else if ($(window).innerWidth() < 767) {
          $(".trigger").click(function () {
            $(".mega-navi").animate({ left: 0 }, 300);
          });
          $("section, .btn-mega-navi-close").click(function () {
            $(".mega-navi").animate({ left: -300 }, 300);
          });
        }
      })
      .resize();

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

    /* header loogin modal change */
    $(".btn-member-primary").click(function () {
      $(".member-login-overlay").fadeOut();
      $(".user-alarm").show().css("display", "flex");
      $(".login-register-buttons").hide();
      $("body").removeClass("active");
    });

    /* mobile mega-navi */
    $(".mega-navi-item b").click(function () {
      $(".mega-navi-item-wrap").slideUp(200);
      $(this).next().stop().slideDown(200);
      $(this).addClass("active");
      $(this).parent().siblings().children("b").removeClass("active");
    });
  });

  $(".footer-include").load("/include/footer.html", function () {
    $(".link-item-title").click(function () {
      $(this).next().stop().slideToggle(200);
      $(this).toggleClass("active");
    });
    $(".company-info-trigger").click(function () {
      $("address").toggle();
    });
  });

  /* header scroll */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
});
