
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 400) {
      $(".navbar").css("background", "black");
    }
    else {
      $(".navbar").css("background", "#57ABB3");
    }
  })
})