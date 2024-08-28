$(function () {
  /* catagory-main button */
  $(".btn-shortcut").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  $(".btn-sort").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  $(".btn-paging").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  /* focus-package slider */
  $(".focus-package-items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});
