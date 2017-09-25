
//验证手机号
function input1(){
  var input1=document.getElementById("input1").value;
    var sjh=/^1\d{10}$/;
    if(sjh.test(input1)){
        var s1=document.getElementById("s1");
       s1.style.display="none";
    }else{
        var s1=document.getElementById("s1");
        s1.style.display="block";
    }
}
//验证密码6到16位
function input2(){
    var input2=document.getElementById("input2").value;
    var sjh=/^[0-9A-Za-z_]{6,16}$/;
    if(sjh.test(input2)){
        var s2=document.getElementById("s2");
        s2.style.display="none";
    }else{
        var s2=document.getElementById("s2");
        s2.style.display="block";
    }
}
//验证密码6到16位
function input3(){
    var input2=document.getElementById("input2").value;
    var input3=document.getElementById("input3").value;
    if(input3==input2){
        var s3=document.getElementById("s3");
        s3.style.display="none";
    }else{
        var s3=document.getElementById("s3");
        s3.style.display="block";
    }
}
function input4(){
    var input4=document.getElementById("input4").value;
    var sjh=/^1\d{10}$/;
    if(sjh.test(input4)){
        var s4=document.getElementById("s4");
        s4.style.display="none";
    }else{
        var s4=document.getElementById("s4");
        s4.style.display="block";
    }
}
//验证短信信息
function input5(){
    var input5=document.getElementById("input5").value;

    if(sjh.test(input5)){
        var s5=document.getElementById("s5");
        s5.style.display="none";
    }else{
        var s5=document.getElementById("s5");
        s5.style.display="block";
    }
}