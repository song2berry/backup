$(function(){
    //-----------------------------------------------------
    $('#top_banner i').on('click',function(){
        // $('#top_banner').hide();
        $('#top_banner').slideUp();
    }); 
    
    
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnhover:false,
        pauseOnFocus:false,
    });
    
    $('.pr_slider').slick({
        arrows:false,
        slidesToShow:5,
        // 슬라이드 쇼가 몇 개인가
        autoplay:true,
        autoplaySpeed:2000,
        // centerMode:true, 
        // centerPadding:"100px",
        pauseOnhover:false,
        pauseOnFocus:false,
    });
    
    $('.pr_slider figure').eq(7).addClass('on');
    $('.pr_slider').on('afterChange',function(e,s,c){
        // c = 1, 2....
        $('.pr_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
        $('.slide_bar>span').css({left:c*100})
    });
    
    $('.pic').slick({
        arrows:false,
        autoplay:true,
        pauseOnhover:false,
        pauseOnFocus:false,
        asNavFor:'.pic',
    });
    
    $('.pr_slider02').slick({
        arrows:false,
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnhover:false,
        pauseOnFocus:false,
        infinite:true,
    });
    
    $('#product04 .container .con i.xi-angle-left').on('click',function(){
        $('.pr_slider02').slick('slickPrev');
        });
        $('#product04 .container .con i.xi-angle-right').on('click',function(){
            $('.pr_slider02').slick('slickNext');
        });
    
    $('#link select').on('change',function(){
        var link=$(this).val();
        if(link) window.open(link)
    });
    
    $('.tab_menu li').on('click',function(){
        var idx=$(this).index();
    //    $('.tab_con>div').eq(idx).show().siblings().hide();//
        $('.tab_con>div').eq(idx).addClass('on').siblings().removeClass('on');
    });
    
    $('.tab_slider').slick({
        arrows:false,
        slidesToShow:4,
        autoplay:true,
        autoplaySpeed:2000,
        centerMode:true,
    });
    
    // function topBannerClose(){
    // $('#top_banner').hide();
    // }
    //-----------------------------------------------------
    
    
    });