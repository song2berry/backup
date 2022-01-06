$(function(){

  
  $(window).on('scroll', ()=>{
    let sct=$(window).scrollTop();
    console.log(sTop,sct);
    sct > 300 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();
    sct > sTop ? $('.content01').addClass('on') : $('.content01').removeClass('on');
  });

  $('.toTop a').on('click', e=> {
    e.preventDefault();
    $('html,body').animate({scrollTop:0},1000)
  });
  
  let sTop = $('.content01').offset().top - 200;
  

  //header
  $('.gnb .depth01>li').on('click', function(){
    if($('.gnb').hasClass('on')) {
        $('.depth02').stop().slideUp();
        $(this).find('.depth02').stop().slideToggle();
    }
  });

  $(window).on('resize', function(){
    $('.depth02').removeAttr('style');
    $('.gnb').removeClass('on');
  });

  $('.mopen').on('click', function(){
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
  });
   
   

    //메인비주얼 슬라이드
    $('.main_slider').slick({
        arrows:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed:1000,
        fade:true,
        dots:false,
        prevArrow:'<div class="prev"><i class="xi-angle-left"></i></div>',
        nextArrow:'<div class="next"><i class="xi-angle-right"></div>',
    });
    
    $('.main_visual .list li').on('click', function(){
        var idx=$(this).index();
        console.log(idx);
        $('.main_slider').slick('slickGoTo',idx);
        $(this).addClass('on').siblings().removeClass('on');
    });
    var z=1;
    $('.main_visual .list li').eq(0).addClass('on');
    $('.main_slider').on('afterChange', function(e,s,c){
        console.log(c);
    });

    var z=1;
    $('.main_visual .list li').eq(0).addClass('on');
    $('.main_slider').on('afterChange', function(e,s,c){
        console.log(c);
       
      $('.main_visual .list li').eq(c).addClass('on').siblings().removeClass('on');

    });

    //section01 제품슬라이드
    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 4,
        dots:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:4,
                slidesToScroll:2,
                infinite:true,
                dots:true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    });
    
    $('.content01 .btn i.xi-angle-left').on('click', function(){
        $('.pr_slider').slick('slickPrev');
    });
    $('.content01 .btn i.xi-angle-right').on('click', function(){
        $('.pr_slider').slick('slickNext');
    });
    



    $('.bnVideo').YTPlayer({
        videoURL:'https://youtu.be/Ay2fL9gkGnw',
        containment:'.main_banner',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });

    $('.main_banner i.xi-pause').on('click', function(){
        $('.bnVideo').YTPPause();
    });
    $('.main_banner i.xi-play').on('click', function(){
        $('.bnVideo').YTPPlay();
    });


    $('.ppl_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 3,
        dots:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:3,
                slidesToScroll:3,
                infinite:true,
                draggable: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                draggable: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: true,
              }
            }
          ]
    });
    
    
    $('.ppl .btn i.xi-angle-left').on('click', function(){
        $('.ppl_slider').slick('slickPrev');
    });
    $('.ppl .btn i.xi-angle-right').on('click', function(){
        $('.ppl_slider').slick('slickNext');
    });



    $('.rv_slider').slick({
      arrows:false,
      autoplay:true,
      slidesToShow: 3,
      dots:false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:3,
              slidesToScroll:3,
              infinite:true,
              draggable: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              draggable: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              draggable: true,
            }
          }
        ]
  });
  
  
  $('.review .btn i.xi-angle-left').on('click', function(){
      $('.rv_slider').slick('slickPrev');
  });
  $('.review .btn i.xi-angle-right').on('click', function(){
      $('.rv_slider').slick('slickNext');
  });
    
});