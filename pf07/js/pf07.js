$(function(){
    //------------------------------------------------------
    

    $(window).on('scroll', ()=>{
        let sct=$(window).scrollTop();
        console.log(sTop,sct);
        sct > 0 ? $('#header').addClass('on') : $('#header').removeClass('on');
        //if(sct > 0) {$('#header').addClass('on')}else{$('#header').removeClass('on')}
        sct > 300 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
        sct > sTop ? $('#Solution').addClass('on') : $('#Solution').removeClass('on');
    });

    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on');
    });
    
    $(window).on('resize', function(){
        $('.submenu').removeAttr('style')
    });
    
    $('.main_slider').slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        fade:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
    });
    
    $('.pr_slider').slick({
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false,
        centerMode:true,
        slidesToShow:3,
        pauseOnHover:false,
        pauseOnFocus:false,
        //dots:true,
        centerPadding:"2rem",
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    
    $('.main_slider figure').eq(0).addClass('on');
    $('.main_slider').on('afterChange', function(e,s,c){
        $('.main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
    });
    
    
    $('.pr_slider figure').eq(4).addClass('on');
    $('.pr_slider').on('afterChange', function(e,s,c){
        $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
    });
    
    
    $('.familyLink .link>a').on('click', function(){
        //e.preventDefault();
        $(this).prev().stop().slideToggle();
        $(this).find('i').toggleClass('on');
        return false;
    });
    
    // $(document).not('.familyLink .link>a').on('click', function(){
    //     $('.familyLink .link>a').prev().stop().slideUp();
    // });
    
    $('#toTop a').on('click', e=> {
        e.preventDefault();
        $('html,body').animate({scrollTop:0},1000)
    });
    
    let sTop = $('#Solution').offset().top - 200;
    

    $('#mv01').YTPlayer({
        videoURL:'https://youtu.be/6OWyhIDWoDw',
        containment:'self',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
        playOnlyIfVisible:true,
        optimizeDisplay:false,
    });

    $('#movie02 i.xi-pause').on('click', function(){
        $('#mv01').YTPPause();
    });
    $('#movie02 i.xi-play').on('click', function(){
        $('#mv01').YTPPlay();
    });
    $('#movie02 i.xi-tv').on('click', function(){
        $('#mv01').YTPFullscreen();
    });

    


    //------------------------------------------------------
    });