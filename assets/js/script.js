/**************   NAVBAR   ***************/
$(document).ready(function () {
  if (document.title == "Family Football | Home") {
    $("#nav__home").addClass("active");
  } else if (document.title == "Family Football | About") {
    $("#nav__about").addClass("active");
  }
});
$("#nav__category").hover(
  function () {
    $("#icon__navbar__dropdown").remove();
    $(this).append(
      `<span id="icon__navbar__dropdown"><i class="ai-chevron-down"></i></span>`
    );
  },
  function () {
    $("#icon__navbar__dropdown").remove();
    $(this).append(
      `<span id="icon__navbar__dropdown"><i class="ai-chevron-up"></i></span>`
    );
  }
);
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};
/******************      ******************/
