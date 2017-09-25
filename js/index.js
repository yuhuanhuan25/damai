/*我的大麦鼠标移入移除事件*/
$(function(){
    $(".dingbu_daohang .daohang .left .li3").mousemove(function(){
        $(".dingbu_daohang .daohang .left .li3 .a2 span").addClass("on animated bounceInDown");
        $(".dingbu_daohang .daohang .left .li3 .li3ul").css("display","block");
    }).mouseout(function(){
        $(".dingbu_daohang .daohang .left .li3 .li3ul").css("display","none");
        $(".dingbu_daohang .daohang .left .li3 .a2 span").removeClass("on animated bounceInDown");
    });
    $(".dingbu_daohang .daohang .right .li1 a").mousemove(function(){
        $(".dingbu_daohang .daohang .right .li1 span").css("display","block");
    }).mouseout(function(){
        $(".dingbu_daohang .daohang .right .li1 span").css("display","none");
    });
    $(".dingbu_daohang .daohang .right .li1 span").mousemove(function(){
        $(".dingbu_daohang .daohang .right .li1 span").css("display","block");
    }).mouseout(function(){
        $(".dingbu_daohang .daohang .right .li1 span").css("display","none");
    });
    $(".dingbu_daohang .daohang .right .li2").mousemove(function(){
        $(".dingbu_daohang .daohang .right .li2 .li2div").css("display","block");
    }).mouseout(function(){
        $(".dingbu_daohang .daohang .right .li2 .li2div").css("display","none");
    });
    $(".dingbu_daohang .daohang .right .li3").mousemove(function(){
        $(".dingbu_daohang .daohang .right .li3 .a2 span").addClass("on animated bounceInDown");
        $(".dingbu_daohang .daohang .right .li3 .li3ul").css("display","block");
    }).mouseout(function(){
        $(".dingbu_daohang .daohang .right .li3 .li3ul").css("display","none");
        $(".dingbu_daohang .daohang .right .li3 .a2 span").removeClass("on animated bounceInDown");
    });
    $(".dingbu_daohang .daohang .right .li4").mousemove(function(){
        $(".dingbu_daohang .daohang .right .li4 .li4ul").css("display","block");
        $(".dingbu_daohang .daohang .right .li4 .a2 span").addClass("on animated bounceInDown");
    }).mouseout(function(){
        $(".dingbu_daohang .daohang .right .li4 .li4ul").css("display","none");
        $(".dingbu_daohang .daohang .right .li4 .a2 span").removeClass("on animated bounceInDown");
    });
    /*logo*/
    $(".logo .cha").click(function(){
        $(".logo").hide();
    });
/*轮播图部分*/
    $(".itm .itm_kuang .sort_l .li1").mousemove(function(){
        $(".itm .itm_kuang .sort_l .li1 .lnk_1").css("display","block");
    }).mouseout(function(){
        $(".itm .itm_kuang .sort_l .li1 .lnk_1").css("display","none");
    });
    $(".itm .itm_kuang .sort_l .li2").mousemove(function(){
        $(".itm .itm_kuang .sort_l .li2 .lnk_2").css("display","block");
    }).mouseout(function(){
        $(".itm .itm_kuang .sort_l .li2 .lnk_2").css("display","none")
    });
    $(".itm .itm_kuang .sort_l .li3").mousemove(function(){
        $(".itm .itm_kuang .sort_l .li3 .lnk_3").css("display","block");
    }).mouseout(function(){
        $(".itm .itm_kuang .sort_l .li3 .lnk_3").css("display","none")
    });
    $(".itm .itm_kuang .sort_l .li4").mousemove(function(){
        $(".itm .itm_kuang .sort_l .li4 .lnk_4").css("display","block");
    }).mouseout(function(){
        $(".itm .itm_kuang .sort_l .li4 .lnk_4").css("display","none")
    });
    $(".itm .itm_kuang .sort_l .li5").mousemove(function(){
        $(".itm .itm_kuang .sort_l .li5 .lnk_5").css("display","block");
    }).mouseout(function(){
        $(".itm .itm_kuang .sort_l .li5 .lnk_5").css("display","none")
    });
    $(".itm .itm_kuang .sort_l .li6").mousemove(function(){
        $(".itm .itm_kuang .sort_l .li6 .lnk_6").css("display","block");
    }).mouseout(function(){
        $(".itm .itm_kuang .sort_l .li6 .lnk_6").css("display","none")
    });
    $(".itm .itm_kuang .sort_l .li7").mousemove(function(){
        $(".itm .itm_kuang .sort_l .li7 .lnk_7").css("display","block");
    }).mouseout(function(){
        $(".itm .itm_kuang .sort_l .li7 .lnk_7").css("display","none")
    });
});
$(function() {
    var Box=document.getElementById("box");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var Img = document.getElementById("img");
    var imgs = ["../img/lun01.jpg", "../img/lun02.jpg", "../img/lun03.jpg", "../img/lun04.jpg", "../img/lun05.jpg", "../img/lun06.jpg"];
    var kong = 0;
    Box.onmousemove=function(){
      left.style.display="block";
      right.style.display="block";
        clearInterval(yidong);
    };
    Box.onmouseout=function(){
        left.style.display="none";
        right.style.display="none";
       /* yidong();*/
    };
    var yidong=setInterval(changeImg,4000);
    function changeImg() {
        if (kong == imgs.length - 1) {
            kong = 0;
        } else {
            kong += 1;
        }
        Img.src = imgs[kong];
    }
    function prevImg() {
        kong--;//前一张图片.所以下标要减1
        if(kong < 0) {//如果下标小于 0
            kong = imgs.length - 1;//那么下标修改为最大下标  这样就可以循环显示图片
        }
        Img.src = imgs[kong];
    }
    right.onclick=function(){
        prevImg();
    };
    left.onclick=function(){
        changeImg();
    };
    document.onkeydown = function(event) {
        //兼容主流浏览器的写法 获取按键事件
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode == 37) { // 按 左方向键 (37 是←方向键码值)
            prevImg();//这里是方法调用 ,方法名后要加括号, 立刻调用方法
        }
        if(e && e.keyCode == 39) { // 按 右方向键(39 是→方向键码值)
            changeImg();//这里是方法调用 ,方法名后要加括号, 立刻调用方法
        }
    };
});
$(function(){
   $(".hd a").each(function(){
       $(this).mousemove(function(){
           $(this).addClass("z-sel");
       })
   }).mouseout(function(){
       $(this).removeClass("z-sel");
});
   $(".hd a").mouseover(function () {
            //$(".hd a").eq($(this).index()).addClass("down").siblings().removeClass('down');
            $(".xuan ul").hide().eq($(this).index()).show();
        });
    $(".stars .stars_l .c").mousemove(function(){
        $(".stars .stars_l .c img:nth-child(2)").css("bottom","0px");
    }).mouseout(function(){
        $(".stars .stars_l .c img:nth-child(2)").css("bottom","-70px");
    });
    $(".city .title ul li").each(function(index,item){

            var index=$(this).index()/2;
            console.log(index);
            $(this).click(function(){
                $(this).find('a').parent().siblings().find("a").removeClass("active");
                $(this).find('a').parent().siblings().find("a").find("strong").removeClass("arrow");
                $(this).find('a').addClass("active");
                $(this).find('a').find("strong").addClass("arrow");
                $('#list').children().css('display','none');
                $('#list').children().eq(index).css('display','block');
            })
    });
});
$(function(){

    $(".city .city_r .av a").mousemove(function(){
        var index=$(".city .city_r .av a").index(this);
        //$(this).addClass("kebi").siblings().removeClass("kebi");
        $(".city .city_r .vv").eq(index).addClass("select").siblings().removeClass("select")
    });
    var count=0;
    $('#vbn').on('click',function(){
        count++;
        console.log(count);
        if(count>=3){
            count=0;
            $('#onchangeAll').stop().animate({top:-375*count+'px'});
        }else{
            console.log('-375' * count);
            $('#onchangeAll').stop().animate({top:-375*count+'px'});
        }
    })
});
$(function(){
    var oNav = $('#LoutiNav'); //导航壳
    var aNav = oNav.find('li'); //导航
    var aDiv = $('#main .louceng'); //楼层
    var oTop = $('#goTop'); //回到顶部
    $(window).scroll(function() {
        //可视窗口高度
        var winH = $(window).height();
        //鼠标滚动的距离
        var iTop = $(window).scrollTop();

        if(iTop >= $("#header").height()) {
            oNav.fadeIn();
            oTop.fadeIn();
            //鼠标滑动样式改变
            aDiv.each(function() {
                if(winH + iTop - $(this).offset().top > winH / 2) {
                    aNav.removeClass('active1');
                    aNav.eq($(this).index()).addClass('active1');
                }
            })
        } else {
            oNav.fadeOut();
            oTop.fadeOut();
        }
    });
    aNav.click(function() {
        var t = aDiv.eq($(this).index()).offset().top;
        $('body,html').animate({
            "scrollTop": t
        }, 500);
        $(this).addClass('active').siblings().removeClass('active');
    });
    oTop.click(function() {
        $('body,html').animate({
            "scrollTop": 0
        }, 800)
    })
});
