$(document).ready(function () {
  
  $("#team").owlCarousel({
    loop: true,
    dots: true,
    item: 3,
  });

  $("#quotes").owlCarousel({
    loop: true,
    dots: true,
    singleItem:true,
    item:1,
  });

  $("#client").owlCarousel({
    dots: false,
    item: 5,
  });
});