$(function(){

var left_text=['01구역','02구역','03구역','04구역']

$('.main_full').fullpage({
    anchors:['f01', 'f02', 'f03', 'f04'],

    //navigation: true,
    css3:false,
    afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.footer .left span').text(left_text[idx]);
        $('.footer .left strong').text('0' + (idx+1));
    },

});

$('.umovie').YTPlayer({
    videoURL:'https://youtu.be/K9_VFxzCuQ0',
    containment:"body",
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,
});

})