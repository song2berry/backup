$(function(){
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        dots:true,
    });

    $('.con01_slider').slick({
        arrows:false,
        autoplay:true,
    });

    $('.gnb>ul>li>a').on('click', function(e){
        if($('.gnb').hasClass('on')){
            e.preventDefault();
            //$('.submenu').hide();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.submenu').slideUp();
        }
    });

    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on');
    })

    $(window).on('resize', function(){
        $('.submenu').removeAttr('style')
    });
})