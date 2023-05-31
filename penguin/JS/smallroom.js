$(document).ready(function(){
    var book1 = 0;
    var book2 = 0;
    const speed = 40;

    $(".carpet").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["毛茸茸的地毯！！", "嗚嗚哇喔喔喔！！！！！", "もふもふ～(* ¯ ︶ ¯ *)"];
            var time = 0;
            clear = 1;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
        }
    );

    $(".sofanormal").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["很炫的紅色皮沙發，不知道是不是真皮", "坐起來還挺舒服的", "如果這裡離我家只有一條街遠的話，我應該會直接搬回家。"];
            var time = 0;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
        }
    );

    $(".pillow").click(
        function(){
            $(".sofanormal").hide();
            $(".pillow").hide();
            $(".sofapaper").show();
        }
    );

    $(".book").click(
        function(){
            if(!Boolean(book1)){
                $(".black").fadeIn(500);
                $(".p").fadeIn(300);
                $(".continue").fadeIn(500);
                var str = ["這個是......？", "是那邊那台奇怪機器人的說明書？也太厚了吧？", "難道用這台機器人之前還要先看一本小說的文字量才能使用嗎？", "算了，現在可不是抱怨的時候，總之來看看要怎麼啟動他好了。", "（仔細翻閱）.......好，我大概懂了，來去啟動他吧！"];
                var time = 0;
                for(var i = 0; i<str.length; i++){
                    for(var j = 0; j<str[i].length; j++){
                        (function(i, j) {
                            setTimeout(function(){
                                $(".p").append(str[i][j]);
                                if(j === str[i].length - 1) {
                                    $(".p").append("<br>");
                                }
                            }, time);
                        })(i, j);
                    time += speed;
                    }
                }
                book1 = 1;
                $(".robot1").hide();
                $(".robot2").show();
            }else if(!Boolean(book2)){
                $(".black").fadeIn(500);
                $(".p").fadeIn(300);
                $(".continue").fadeIn(500);
                var str = ["（仔細翻閱）啊勒？", "原來最後還有一頁，這什麼？", "傲嬌模式？？這主人的XP也太......", "嘿嘿～等等絕對要試試！"];
                var time = 0;
                for(var i = 0; i<str.length; i++){
                    for(var j = 0; j<str[i].length; j++){
                        (function(i, j) {
                            setTimeout(function(){
                                $(".p").append(str[i][j]);
                                if(j === str[i].length - 1) {
                                    $(".p").append("<br>");
                                }
                            }, time);
                        })(i, j);
                    time += speed;
                    }
                }
                book2 = 1;
                $(".robot2").hide();
                $(".robot3").show();
            }
        }
    );

    $(".robot1").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["這是某種機器人……？", "而且他穿的是……女僕裝？", "但他現在似乎沒有在運作，或許我該想辦法開啟它"];
            var time = 0;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
        }
    );

    $(".robot2").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["主人好，我是您的專屬女僕，", "如果您有任何需要幫助的問題，我不會回答。", "如果您不需要與我交流，您可以直接離開。"];
            var time = 0;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
        }
    );

    $(".food").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["看起來很好吃的食物，說起來我多久沒吃東西了呢？", "糟糕，肚子開始餓了……", "偷拿一個，應該不會怎樣吧？", "可是萬一裡面下了毒，我會不會直接死在這？", "算了，還是不要隨便亂動好了"];
            var time = 0;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
        }
    );

    $(".garbage").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["一堆廢紙", "對就是一堆廢紙，就好比我的人生......嗚", "說著說著就哭了；；"];
            var time = 0;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
        }
    );

    $(".door").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["目前是封死的，似乎需要解開密碼鎖才能打開"];
            var time = 0;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
        }
    );

    $(".net").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["女僕手上的撈網", "感覺可以用來撈在水裡的某樣東西"];
            var time = 0;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
        }
    );

    $(".lgrassnormal").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["海草啊～海草，隨～風～飄～搖～", "喔等等，其實這是水草。"];
            var time = 0;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
            $(".lgrassnormal").hide();
            $(".lgrasspaper").show();
        }
    );

    $(".rlightclose").click(
        function(){
            $(".rlightclose").hide();
            $(".rlightpaper").show();
        }
    );

    $(".llightclose").click(
        function(){
            $(".llightclose").hide();
            $(".llight").show();
        }
    );

    $(".llight").click(
        function(){
            $(".llight").hide();
            $(".llightclose").show();
        }
    );

    $(".lbookcase").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["來看看這裡有什麼書好了！", "痾……", "《關於我轉生到異世界意外成為建電學術長的這檔事》、《霸道總裁愛上我》、《我想吃掉你的肝臟》..........", "怎麼都是一堆輕小說啊 但意外的很符合我的喜好"];
            var time = 0;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
        }
    );

    $(".rbookcase").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["來看看這裡有什麼書好了！", "痾……", "《爆肝工程師的日常》、《關於我在無意間被隔壁的電神變成廢柴這件事》、《歡迎來到實力至上主義的社團》..........", "怎麼都是一堆輕小說啊 但意外的很符合我的喜好"];
            var time = 0;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
        }
    );

    $(".fish").click(
        function(){
            $(".black").fadeIn(500);
            $(".p").fadeIn(300);
            $(".continue").fadeIn(500);
            var str = ["好美的水族箱啊～", "等等，裡面的魚怎麼不會動？", "嗚哇！原來是假的嗎！？", "有夠詭異。"];
            var time = 0;
            for(var i = 0; i<str.length; i++){
                for(var j = 0; j<str[i].length; j++){
                    (function(i, j) {
                        setTimeout(function(){
                            $(".p").append(str[i][j]);
                            if(j === str[i].length - 1) {
                                $(".p").append("<br>");
                            }
                        }, time);
                    })(i, j);
                time += speed;
                }
            }
        }
    );

    $(".continue").click(
        function(){
            $(".black").fadeOut(300);
            $(".p").fadeOut(300);
            $(".continue").fadeOut(300);
            $(".p").empty();
        }
    );
    
});