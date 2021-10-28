$(function(){
//---------------------------------------------
//$('#popup01 span').on('click', function(){
  //  $('#popup01').hide();
//});

//$('.popup_close').on('click', function(){
  //  $(this).parent().hide();
//});



$('#top_banner01 .container i').on('click', function(){
    $(this).parent().parent().slideUp();
});

$('#top_banner02 i').on('click', function(){
    $('#top_banner02 .case').toggleClass('on');
    $(this).toggleClass('on');
});

$('#top_banner03 i').on('click', function(){
  $('#top_banner03 .case').slideToggle();
  $(this).toggleClass('on');
});

$('#top_banner04 i').on('click', function(){
  $('#top_banner04 .case').toggleClass('on');
  $(this).toggleClass('on');
});

$('#bottom_banner i').on('click', function(){
  $('#bottom_banner .case').slideToggle(200);
  $(this).toggleClass('on');
});

$('#toTop').on('click', function(){
  $('html, body').animate({scrollTop:0},600) //600->시간(속도)를 의미함
});

$(window).on('scroll', function(){
  var sct=$(window).scrollTop();
  //console.log(sct) ->콘솔에 찍히는지 체크하는 방법
  // if(sct>400) {
  //   $('#toTop').fadeIn()
  // }else{
  //   $('#toTop').fadeOut()
  // }
  sct>400 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
  $('#scroll_banner').css({top:300+sct});
});

$('#left_banner i').on('click', function(){
  $('#left_banner').toggleClass('on');
  $(this).toggleClass('on');
});


$('#right_banner i').on('click', function(){
  $('#right_banner').toggleClass('on');
  $(this).toggleClass('on');
});

//---------------------------------------------
});