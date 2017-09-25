$(function(){
    $('.con_xuan a').each(function(){
        $(this).on('click',function(){
            var index=$(this).index();
            $(this).addClass('xuan_ding');
            $('.overaaa>div').css('display','none');
            $('.overaaa>div').eq(index).css('display','block');
            $(this).parent().children().removeClass('xuan_ding');
            $(this).addClass('xuan_ding');
        })
    });
});


var youxiang=document.getElementById('youxiang');
var denglu=document.getElementById("denglu");
console.log(youxiang);
console.log(denglu);

var input=youxiang.onblur=function(){
    var res=/^1\d{10}$/;
    if(res.test(youxiang.value)){
        var youxiangfu=document.getElementById("youxiangfu");
        youxiangfu.style.border="1px solid blue";
        return true;
    }else{
        var youxiangfu=document.getElementById("youxiangfu");
        youxiangfu.style.border="1px solid red";
        return false;
    }
}
var inputdeng=denglu.onblur=function(){
    var res=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    if(res.test(denglu.value)){
        var denglufu=document.getElementById("denglufu");
        denglufu.style.border="1px solid blue";
        return true;
    }else{
        var denglufu=document.getElementById("denglufu");
        denglufu.style.border="1px solid red";
        return false;
    }
}
var ljdl=document.getElementById("ljdl");
ljdl.onclick=function(){
    if(input()&&inputdeng()){
       window.location.href='../html/index.html';
    }else{
        alert('请重新输入');
    }
}
