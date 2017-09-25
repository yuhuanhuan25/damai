$(function(){
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



    $('#ipone').on('mouseenter',function(){
        $(this).addClass('navActive');
        $(this).children('p').css({
            display:'block',
           /* position:'absolute',
            left:'1px',top:'36px',*/
        });
       /* $(this).children('div').removeClass('addstyle');
        $(this).children('div').addClass('navActive');*/



        $(this).next().find('a').css('border','1px solid transparent');
        $(this).find('a').css('border','1px solid transparent');
    }).on('mouseleave',function(){
        $(this).removeClass('navActive');
      /*  $(this).children('div').removeClass('navActive');
        $(this).children('div').addClass('addstyle');*/

        $(this).children('p').css('display','none');
        $(this).next().find('a').css('borderLeft','1px solid #c0c0c0');
        $(this).find('a').css('borderLeft','1px solid #c0c0c0');
    })


    $('.navTopCenter').children('ul').children().each(function(){
        $(this).on('mouseenter',function(){
            $(this).find('span').css('visibility','hidden');
            $(this).find('b').css('visibility','visible');
        }).on('mouseleave',function(){
            $(this).find('span').css('visibility','visible');
            $(this).find('b').css('visibility','hidden');
        })

    })

    console.log($('#navConRightTwo span'));
    $('#navConRightTwo span').each(function(){
        $(this).click(function(){
            var index=$(this).index();

            $(this).siblings().removeClass('avtives');
            $(this).addClass('avtives');
            console.log($('#myIframe').attr('src'));
            $('#myIframe').attr('src','mian'+(index+1)+'.html');
        })

    })






})