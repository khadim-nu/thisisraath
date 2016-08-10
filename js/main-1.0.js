"use strict";

$(document).ready(function() {


    // Smooth scrolling on nav menu anchor click

    $('body').on('click', '.navbar-nav a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // Smooth scrolling on modal menu anchor click

    $('body').on('click', '.menu-list a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1500, 'easeInOutExpo');
        setTimeout( function() {
          $('.modal-menu').removeClass('in');
        } , 1500);
        event.preventDefault();
    });


    // Make modal menu appear

    $('.hamburger').on('click', function() {
      $('.modal-menu').toggleClass('in');
    });

    animateJumbotron();

});


// Changes active state of nav menu item

$('body').scrollspy({
   target: '.navbar',
   offset: 400
});


// Adds background to header section on scrolling

$(window).scroll(function() {
  var value = $(this).scrollTop();
  if (value > 100)
      $('.navbar-default').css('background', 'rgba(29,36,63,0.8)').css('padding', '10px 0');
  else
      $('.navbar-default').css('background', 'transparent').css('padding', '20px 0');
});


// Animations for Hero section

var animateJumbotron = function() {
  var services = $('.custom-jumbotron');
  if ( services.length > 0 ) {  

    services.waypoint( function( direction ) {
                  
      if( direction === 'down' && !$(this.element).hasClass('animated') ) {

        setTimeout(function() {
          services.find('.animating').each(function( k ) {
            var el = $(this);
            
            setTimeout ( function () {
              el.addClass('fadeInDown animated');
            },  k * 300, 'easeInOutExpo' );
            
          });
        }, 200);
        
        $(this.element).addClass('animated');
          
      }
    } , { offset: '80%' } );

  }
};