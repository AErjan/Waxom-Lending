$(document).ready(function() {
  $('.owl-wrap').owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    responsive: {
      650: {
        nav: true,
      },
    },
  });

  $('.main-nav-burger').on('click', function(e) {
    $(this).toggleClass('main-nav-burger-active');
    $('.main-nav__list').toggleClass('main-nav__list-show');
  });
});
