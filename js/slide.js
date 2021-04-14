$(document).ready(function () {
  
  $("#slide1").owlCarousel({
    loop: true,
    dots: true,
    item: 3,
  });

  $("#slide2").owlCarousel({
    loop: true,
    autoTimout:true,
    dots: true,
    range:false,
    slidesToShow: 1,
    item:1,
  });

  $("#slide3").owlCarousel({
    dots: false,
    slidesToShow: 5,
    item: 5,
  });
});