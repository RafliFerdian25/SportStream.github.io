/**************   NAVBAR   ***************/
$(document).ready(function () {
  if (document.title == "SoccerPlay Tv | Home") {
    $("#nav__home").addClass("active");
  } else if (document.title == "SoccerPlay Tv | About") {
    $("#nav__about").addClass("active");
  }
});
$("#nav__category").hover(
  function () {
    $("#icon__navbar__dropdown").remove();
    $(this).append(
      `<span id="icon__navbar__dropdown"><i class="ai-chevron-up"></i></span>`
    );
  },
  function () {
    $("#icon__navbar__dropdown").remove();
    $(this).append(
      `<span id="icon__navbar__dropdown"><i class="ai-chevron-down"></i></span>`
    );
  }
);
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-74px";
  }
  prevScrollpos = currentScrollPos;
};

// tooltips
// logo liga
const tooltiplogoliga = document.querySelectorAll('.ll__tt')
tooltiplogoliga.forEach(t => {
	new bootstrap.Tooltip(t)
})

// carousel index video
$(document).ready(function () {
  $(".owl-carousel#list__video").owlCarousel({
		loop:true,
		margin:16,
		nav:true,
		dots:false,
		autoplay:false,
		autoplayTimeout:7200,
		smartSpeed:1500,
		responsive:{
			0:{
				items:1
			},
			600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });
});

// change button carousel
$(document).ready(function() {
  $('.stream__choose .owl-nav button span').remove();
  $('.stream__choose .owl-nav .owl-prev').append('<i aria-label="Previous" class="ai-circle-chevron-left-fill"></i>');
  $('.stream__choose .owl-nav .owl-next').append('<i aria-label="Next" class="ai-circle-chevron-right-fill"></i>');
});
