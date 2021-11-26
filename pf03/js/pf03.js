$(function(){
    
    
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:true,
        pauseOnFocus:false,
        fade:true,
        speed:1000,
    });
    
    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 3,
        
        responsive: [
            {
              breakpoint: 769,
              settings: {
                swipeToSlide:true,
                fade: false,
                slidesToShow: 1,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
              },
          ]
    });
    $('.content02 .btn i.xi-angle-left').on('click', function(){
        $('.pr_slider').slick('slickPrev');
    });
    $('.content02 .btn i.xi-angle-right').on('click', function(){
        $('.pr_slider').slick('slickNext');
    });


    $('.ev_slider').slick({
        arrows:false,
        slidesToScroll: 1,
        autoplay:true,
        slidesToShow: 2,
        
        responsive: [
            {
              breakpoint: 769,
              settings: {
                swipeToSlide:true,
                fade: false,
                slidesToShow: 1,
              }
            },

            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
              },
          ]
    });
    $('.content05 .btn i.xi-angle-left').on('click', function(){
        $('.ev_slider').slick('slickPrev');
    });
    $('.content05 .btn i.xi-angle-right').on('click', function(){
        $('.ev_slider').slick('slickNext');
    });



    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });
    $('.depth01>li>a').on('click', function(){
        if($(window).width() < 769) {
            $(this).next().slideToggle();
            $(this).parent().siblings().find('.depth02').slideUp();
        }
    });


    $('button').on('click', function(){
      $('.con04_box1').toggleClass('on');
      $(this).toggleClass('on');
    });


    $(window).on('resize', function(){
        $('.depth02').removeAttr('style')
    });

})