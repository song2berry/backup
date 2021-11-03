$(function(){
//---------------------------------------
$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp(); //slideUp(); hide();
});

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
});

//---------------------------------------
});