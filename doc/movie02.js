$(function(){
    //-------------------------------------------
        $('#bgndVideo').YTPlayer({
            videoURL:'https://youtu.be/K9_VFxzCuQ0',
            containment:'#visual',
            autoPlay:true, 
            mute:true, 
            startAt:0, 
            opacity:1,
            showControls:false,
        });
    
        $('#visual i.xi-pause').on('click', function(){
            $('#bgndVideo').YTPPause();
        });
        $('#visual i.xi-play').on('click', function(){
            $('#bgndVideo').YTPPlay();
        });
        $('#visual i.xi-tv').on('click', function(){
            $('#bgndVideo').YTPFullscreen();
        });
    
    
        $('#mv01').YTPlayer({
            videoURL:'https://youtu.be/fKGK_s9Y964',
            containment:'self',
            autoPlay:true, 
            mute:true, 
            startAt:0, 
            opacity:1,
            showControls:false,
            playOnlyIfVisible:true,
            optimizeDisplay:false,
        });
    
        $('#visual i.xi-pause').on('click', function(){
            $('#bgndVideo').YTPPause();
        });
        $('#visual i.xi-play').on('click', function(){
            $('#bgndVideo').YTPPlay();
        });
        $('#visual i.xi-tv').on('click', function(){
            $('#bgndVideo').YTPFullscreen();
        });
    //----------------------------------
    });