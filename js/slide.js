$(document).ready(function () {

  $("#slide1").owlCarousel({
    loop: true,
    autoPlay: true,
    dots: true,
    item: 3,
  });

  $("#slide2").owlCarousel({
    loop: true,
    autoPlay: true,
    dots: true,
    item: 1,
    singleItem: true,
  });

  $("#slide3").owlCarousel({
    dots: false,
    item: 5,
  });
});