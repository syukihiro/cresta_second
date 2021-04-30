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

$(function(){
  $("li").on('click', function() {
    $(".gnav").removeClass('gnav-active');
    $(".menu").removeClass('menu-active');
    $(".header-left").removeClass('disp-active');
    $(".inner").removeClass('inner-active');
    $(".btn-trigger").removeClass('active');
  })
});