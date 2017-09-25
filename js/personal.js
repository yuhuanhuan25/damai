$(function(){
    $('#emAll').on('mouseenter',function(){
        $(this).children('#oo').css('display','block');
    }).on('mouseleave',function(){
        $(this).children('#oo').css('display','none');
    })
})
$(document).ready(function(){
    var conut=1;

    $("#beijin").click(function(){
        if(conut%2==1){
            $(".hh").show();
        }else{
            $(".hh").hide();
        }
        conut++;

    });
});
$(function(){
    $('#ewm').on('mouseenter',function(){
        $(this).children('p').css('display','block');
    }).on('mouseleave',function(){
        $(this).children('p').css('display','none');
    })
})
$(function(){
    $('.two').on('mouseenter',function(){
        $(this).children('p').css('display','block');
    }).on('mouseleave',function(){
        $(this).children('p').css('display','none');
    })
})
$(function(){
    $('.search').on('mouseenter',function(){
        $(this).children('ul').children('p').css('display','block');
    }).on('mouseleave',function(){
        $(this).children('ul').children('p').css('display','none');
    })
})



$(function(){
    console.log($('#bottonOne #starAll dt'));

    $('#bottonOne #starAll dt').each(function(){
        $(this).on('mouseenter',function(){
            var index=$(this).index()+1;
            console.log(index);
            console.log($('#bottonOne #starAll dt:lt('+index+')'));
            $('#bottonOne #starAll dt:lt('+index+')').css('backgroundPosition','-1px 0px')

        }).on('mouseleave',function(){
            var index=$(this).index()+1;
            console.log(index);
            console.log($('#bottonOne #starAll dt:lt('+index+')'));
            $('#bottonOne #starAll dt:lt('+index+')').css('backgroundPosition','0px -25px')
        })
       /* $(this).on('click',function(){
            var index=$(this).index()+1;
            console.log(index);
            console.log($('#bottonOne #starAll dt:lt('+index+')'));
            $('#bottonOne #starAll dt:lt('+index+')').css('backgroundPosition','-1px 0px')

        })*/



    })



})
