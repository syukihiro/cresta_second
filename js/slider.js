$(function() {
  $(".sliderImg-list").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
  });
})

// $(function(){
//   var count = 0;
//   var autoSlider = function() {
//     count++;
//     if (count == 1) {
//       $(".sliderImg-content-detail").addClass('addContent');
//     }
//     if (count == 3) {
//       $(".sliderImg-content-detail").removeClass('addContent');
//       count = 0;
//     }
//   }
//   setInterval(autoSlider, 5000);
// });