$(function(){
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:true,
        pauseOnFocus:false,
        fade:true,
        speed:1000,
        
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