$('.owl-carousel').owlCarousel({
  autoplay: false,
  center: true,
  loop: true,
  nav: true,
  center: true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:true
      },
      1000:{
          items:3,
          nav:true,
      }
  }
});
