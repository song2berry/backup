$(function(){
    //-----------------------------------------------------
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        fade:true,
    });
    
    $('.pr_slider').slick({
        arrows:false,
        slidesToShow:1,
        dots:true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
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
    
    $('#content03 i.xi-angle-left').on('click', function(){
        $('.pr_slider').slick('slickPrev');
    });
    $('#content03 i.xi-angle-right').on('click', function(){
        $('.pr_slider').slick('slickNext');
    });



      
    $('.con05_slider').slick({
        arrows:false,
        slidesToShow:1,
        dots:false,
        responsive: [
            {
              breakpoint: 769,
              settings: {
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

    $('#content05 i.xi-angle-left').on('click', function(){
      $('.con05_slider').slick('slickPrev');
  });
    $('#content05 i.xi-angle-right').on('click', function(){
      $('.con05_slider').slick('slickNext');
  });
 
    

  $('#header i.xi-bars').on('click', function(){
    $('nav').slideToggle();
 });
 
 $(window).on('resize', function(){
     if($(window).width()>768) $('nav').removeAttr("style")
 });

    
    //-----------------------------------------------------
    })