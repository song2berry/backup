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

    $(window).on('resize', function(){
        $('.depth02').removeAttr('style')
    });


    





})