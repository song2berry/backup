$(function(){
    $('.main_slider').slick({
        arrows:false,
    });

    $('.gnb>ul>li>a').on('click', function(e){
        if($('.gnb').hasClass('on')){
            e.preventDefault();//내가 가지고 있는 이벤트를 없앤다
            //$('.submenu').hide();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.submenu').slideUp();
        }
    });

    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on');
        $('.sns').fadeToggle();
    })

    $(window).on('resize', function(){
        $('.submenu').removeAttr('style')
    });
})