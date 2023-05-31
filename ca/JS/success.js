$(document).ready(function(){

    alert("你完成了ESCAPE！！");

    var str = ["望著眼前的漫漫黃沙，你轉過身回到密室中，", "輕輕關上了門……"];
    var time = 0;
    for(var i = 0; i<str.length; i++){
        for(var j = 0; j<str[i].length; j++){
            (function(i, j) {
                setTimeout(function(){
                    $(".div").append(str[i][j]);
                    if(j === str[i].length - 1) {
                        $(".div").append("<br>");
                    }
                }, time);
            })(i, j);
            time += 200;
        }
    }

    $(".next").fadeIn(7000);
    $(".next").click(function(){
        $(location).attr("href","../HTML/end.html")
    });
});