// navbar background color change on scroll

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 300) {
    $('.fixed-top').css('background', 'transparent');
  } else {
    $('.fixed-top').css('background', 'rgba(143, 110, 213, 0.85)');
  }
});













