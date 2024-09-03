$(function () {
  $("#calendar").datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  });

  // 초기화 버튼 클릭
  $(".reset-btn").on("click", function () {
    $("#calendar").datepicker("setDate", null);
    $('input[name="inquery-state"][value="전체"]').prop("checked", true);
  });
});
