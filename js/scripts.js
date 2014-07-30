$(document).ready(function() {

  $( ".show").click(function() {
    $(this).toggleClass("active");
    $(this).find(".show-details").toggleClass("dim");
    $(this).find(".show-links").toggleClass("reveal");
  });

});

$(window).load(function() {

  $( "#bg-img, #page" ).removeClass("hide");

});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});