// SLIDE-SHOW //
$(document).ready(function () {
  $("#slide1").owlCarousel({
    loop: true,
    autoPlay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });
});


$(document).ready(function () {
  $("#slide2").owlCarousel({
    loop: true,
    autoPlay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      }
    }
  });
});


$(document).ready(function () {
  $("#slide3").owlCarousel({
    loop: true,
    autoPlay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 5,
      }
    }
  });
});


// HAN HIEN MENU TRONG XS // 
