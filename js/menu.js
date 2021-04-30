// scroll
$(window).scroll(function(){
  var scrolltop = $(window).scrollTop();

  if (scrolltop > $(".sliderImg").height()) {
    $('.menu').addClass('transform');
  }
  else {
    $('.menu').removeClass('transform');
  }
});

// click
$(function(){
  $(".btn-trigger").on('click', function() {
    $(".gnav").toggleClass('gnav-active');
    $(".menu").toggleClass('menu-active');
    $(".header-left").toggleClass('disp-active');
    $(".inner").toggleClass('inner-active');
    $(this).toggleClass('active');
    return false;
  })
});