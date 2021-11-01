$(function(){
    //-------------------------
    
    //메인슬라이드
    $('.main_slider').slick({
        arrows:false,
        //dots:true,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        
        //vertical:true,
    });
    
    $('.main_slider figure').eq(1).addClass('on');
    
    $('.main_slider').on('afterChange', function(e,s,c){
        $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
    });

    //제품슬라이드
    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 5,
        dots:true,
    });
    
    $('#content01 .btn i.xi-angle-left').on('click', function(){
        $('.pr_slider').slick('slickPrev');
    });
    $('#content01 .btn i.xi-angle-right').on('click', function(){
        $('.pr_slider').slick('slickNext');
    });
    
    
    //--------------------------
    })