$(function(){
    //-----------------------------------------
    
    $("#mv01").YTPlayer({
        videoURL:'http://youtu.be/BsekcY04xvQ',
        containment:'#visual',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });
    
    $('#visual i.xi-pause').on('click', function(){
        $("#mv01").YTPPause();
    });
    $('#visual i.xi-play').on('click', function(){
        $("#mv01").YTPPlay();
    });
    
    $('#visual i.xi-tv').on('click', function(){
        $("#mv01").YTPFullscreen();
    });
    //-----------------------------------------
    });