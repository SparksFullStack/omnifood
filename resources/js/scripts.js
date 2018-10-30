$(document).ready(function(){

    // adding sticky navigation
    $('.js--section-features').waypoint(function(direction){
        if (direction == 'down'){
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '93%'
    });


    // button scrolling
    $('.js--scroll-to-plans').click(function (){
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top}, 1250);
    })

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top}, 1000);
    })

    // navbar scrolling
    $('.js--food-delivery').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-meals').offset().top}, 1000);
    })

    $('.js--how-it-works').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-steps').offset().top}, 1000);
    })

    $('.js--cities').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-cities').offset().top}, 1100);
    })

    $('.js--sign-up').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top}, 1250);
    })
});