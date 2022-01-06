$(function(){
    $(window).on('scroll', ()=>{
        let sct=$(window).scrollTop();
        console.log(sTop,sct);
        sct > 300 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();
        sct > sTop ? $('.content01').addClass('on') : $('.content01').removeClass('on');
    });

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:true,
        pauseOnFocus:false,
        fade:true,
        speed:1000,
        
    });
    $('.bgVideo').YTPlayer({
        videoURL:'https://youtu.be/7KMxNaXnuOM',
        containment:'.content04',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });

    $('.content04 i.xi-pause').on('click', function(){
        $('.bgVideo').YTPPause();
    });
    $('.content04 i.xi-play').on('click', function(){
        $('#bgndVideo').YTPPlay();
    });
    $('.content04 i.xi-tv').on('click', function(){
        $('.bgVideo').YTPFullscreen();
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

    $('.toTop a').on('click', e=> {
        e.preventDefault();
        $('html,body').animate({scrollTop:0},1000)
    });

    let sTop = $('.content01').offset().top - 200;
    
    

    $('button').on('click', function(){
      $('.con04_box1').toggleClass('on');
      $(this).toggleClass('on');
    });


    $(window).on('resize', function(){
        $('.depth02').removeAttr('style')
    });

    
    })