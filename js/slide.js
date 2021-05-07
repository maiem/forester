$(document).ready(function () {

  $("#slide1").owlCarousel({
    loop: true,
    autoPlay: true,
    dots: true,
    item: 3,
  });

  $("#slide2").owlCarousel({
    dots: true,
    item: 1,
  });

  $("#slide3").owlCarousel({
    dots: false,
    item: 5,
  });
});