$(document).ready(function () {
   
     $('.js--about').waypoint(function (direction) {
         if(direction == 'down') {
             $('nav').addClass('sticky animated fadeIn');
         } else {
    //         $('nav').removeClass('sticky animated fadeIn');
             $('nav').removeClass('sticky');
         }
     }, {
         offset: '60px;'
     });


    /* top scroll plugin */    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false; 
          }
        }
      }); 
    });
    
    
    /*  fadeIn for welcome message */
    $('.english').delay(1000).animate({ opacity: 1 }, 700);
    $('.spanish').delay(2000).animate({ opacity: 1 }, 700);

    /* Scroll Animatins */    
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%;'
    });  

    

    
    /*  mobile navigation  */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
    });
    
    
    /*  bug fix for main navigation  */
    $(window).resize(function(){

        var nav = $('.js--main-nav');

        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){

        nav.css("display", "block");

        icon.addClass('ion-close');

        icon.removeClass('ion-navicon');

        } else {

        nav.css("display", "none");

        icon.addClass('ion-navicon');

        icon.removeClass('ion-close');

        }

        });

    
  
});