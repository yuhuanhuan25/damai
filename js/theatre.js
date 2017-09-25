$(function(){
    console.log($('#navLine'));

    $('#person').on('mouseenter',function(){
        $(this).addClass('navActive');
        $(this).parent().children().find('a').css('border','1px solid transparent');
        $(this).find('ol').css('display','block');
        $(this).find('span').addClass('hoverSpan');
        $(this).find('span').css('backgroundPosition','0px -129px');

    }).on('mouseleave',function(){
        $(this).removeClass('navActive');
        $(this).parent().children().find('a').css('borderLeft','1px solid #c0c0c0');
        $(this).find('ol').css('display','none');
        $(this).find('span').removeClass('hoverSpan');
        $(this).find('span').css('backgroundPosition','-18px -47px');
        $('#navLine').css('border','none');

    })

    $('#serves').on('mouseenter',function(){
        $(this).addClass('navActive');
        console.log($(this).prev());
        $(this).find('ol').css('display','block');
        $(this).next().find('a').css('border','1px solid transparent');
        $(this).find('a').css('border','1px solid transparent');
    }).on('mouseleave',function(){
        $(this).removeClass('navActive');
        $(this).find('ol').css('display','none');
        $(this).next().find('a').css('borderLeft','1px solid #c0c0c0');
        $(this).find('a').css('borderLeft','1px solid #c0c0c0');
    })



        console.log($('#youLikeCon dl'));
        $('#youLikeCon dl').each(function(){
            $(this).on('mouseenter',function(){
                console.log($(this).find('dt').find('p'));
                $(this).find('dt').find('p').stop().animate({top:'0'},500);
           }).on('mouseleave',function(){
                $(this).find('dt').find('p').stop().animate({top:'207'},500);
            })
        })

    console.log($('#tabsLeftNav li:lt(5)'));
    $('#tabsLeftNav li:lt(5)').each(function(){
                $(this).on('click',function(){
                    $(this).parent().children().removeClass('hoverTitle');
                    $(this).addClass('hoverTitle');

                    var index=$(this).index();
                    $('#tabsLeftCon div').css('display','none');
                    $('#tabsLeftCon div').eq(index).css('display','block');

                })
        })

    $('#tabsRihgtNav li').each(function(){
        $(this).on('mouseenter',function(){
            $(this).parent().children().removeClass('tabsRightNavHover');
            $(this).addClass('tabsRightNavHover');
            var index=$(this).index();
            $('#tabsRightCon div').css('display','none');
            $('#tabsRightCon div').eq(index).css('display','block');
        })
    })





})


$(function(){

    $('#clear li').each(function(){
        $(this).on('mouseenter',function(){
            $(this).find('div').stop().animate({top:'0px'},500);
        }).on('mouseleave',function(){
            $(this).find('div').stop().animate({top:'170px'},500);
        })
    })
})
