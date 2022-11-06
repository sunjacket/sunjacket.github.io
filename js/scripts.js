$(document).ready(function(event){

  $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });

  $('.follow-link').click(function(e){
    e.preventDefault();
    $('.follow').addClass('open');
    $('.nav-mobile').removeClass('open');
    $('body').addClass('menu-open');
  });

  $('.contact-link').click(function(e){
    e.preventDefault();
    $('.contact').addClass('open');
    $('.nav-mobile').removeClass('open');
    $('body').addClass('menu-open');
  });

  $('.menu-link').click(function(e){
    e.preventDefault();
    $('.nav-mobile').addClass('open');
    $('body').addClass('menu-open');
  });

  $('.nav-mobile .page-link').click(function(e){
    e.preventDefault();
    $('.nav-mobile').removeClass('open');
    $('body').removeClass('menu-open');
  });

  $('.close-x').click(function(e){
    e.preventDefault();
    $('.follow, .contact, .nav-mobile').removeClass('open');
    $('body').removeClass('menu-open');
  });

  $('.slider').slick({
    cssEase: 'ease-in-out',
    fade: true,
    speed: 250,
    arrows: false,
    dots: true,
    touchThreshold: 20
  });

  $('.slider-next').click(function(e){
    e.preventDefault();
    $('.slider').slick('slickNext');
  });

  $('.slider-prev').click(function(e){
    e.preventDefault();
    $('.slider').slick('slickPrev');
  });

  $('#watchLinkButton').click(function(){
    fbq('trackCustom', 'WatchLinkButtonClick');
  });
  $('#watchLinkThumb').click(function(){
    fbq('trackCustom', 'WatchLinkThumbClick');
  });

});