$(function(){
    //-----------------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', 'Portfolio_01', 'Portfolio_02', 'Portfolio_03', 'Portfolio_04', 'Portfolio_05', 'Profile', 'Footer'],
        afterLoad:function(origin, destination, direction)
        {
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });
    
    

    new Typed('.slogan_txt',{
        strings: ['Welcome to my portfolio!'],
        typeSpeed:150,
    });


    //$('.cover_btn').on('click', function(){
    //    $(this).toggleClass('on');
    //    $('#Cover').slideToggle();

    //});

    // 버튼 변경
    $('.cover_btn').on('click', function(){
        $(this).toggleClass('on');

        if($('#Cover').slideToggle()) {
      }
    })
    
    let cloneMenu = $('nav>ul').clone();
    $('#Cover').append(cloneMenu);

    $('#Cover a').on('click', function(){
        $('#Cover').slideToggle();
        $('.cover_btn').toggleClass('on');
    });


    $('#Cover').on('scroll wheel touchmove', function(){
        return false;
    });
    
    //-----------------------------------------------------
    })