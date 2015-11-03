!(function(){
    /*
    测试接口假数据
     */
    var datas ={
        data: {title: "嘿咻嘿咻，再来一次.", link: "", code: 1},
        code: 1,
        link: "",
        title: "嘿咻嘿咻，再来一次.",
        msg: "成功",
        status: true
    }

    var datas2 = {
        data: {title: "点击领取双11现金红包", link: "", code: 2},
        code: 2,
        link: "",
        title: "点击领取双11现金红包",
        msg: "成功",
        status: true
    }
    /*end*/

    $(function(){
        "use strict";

        popup().init();
        
        var rotateFunc = function(awards,angle,text,url,fn){  //awards:奖项，angle:奖项对应的角度
            $('.round-img').stopRotate();
            $(".round-img").rotate({
                angle:0,
                duration: 5000,
                animateTo: angle+1440, 
                callback:function(){
                    //console.log(text,url)
                    popup().show(text,url);
                    fn && fn();
                }
            });
        };

        var hasclick=false;
        $(".round-btn").click(function(e){
            if(hasclick){
                return false;
            }
            hasclick = true;
            //var c = getCookie("rotatefirst")
            var i = datas.data.code- 1,
                angle = [240,180,120],
                title=datas.data.title,url;
            i == 0 ? url="undefined": url=datas.data.link;

            rotateFunc(i,angle[i],title,url,function(){
                    hasclick = false;
            });

        });

    });

    function popup(){
        var dom = "<div class='activity-popup'>\
                      <div class='blackBg'></div>\
                      <div class='popupcontent'>\
                            <div class='txt'></div>\
                            <a href='###' target='_blank'>马上领取</a>\
                            <div class='close'></div>\
                      </div>\
                   </div>";
        return {
            init:function(){
                var t = this;
                $("body").append(dom);
                $(".activity-popup .close").on("click",function(){
                     t.hide();
                });
            },
            show:function(txt,url){
                var t=this;                
                $(".activity-popup").fadeIn(200,function(){
                    $(".popupcontent").fadeIn();
                });
                $(".activity-popup .txt").text(txt);
                //console.log(url);
                if(url != "undefined"){
                    $(".activity-popup a").attr({"href":url,"target":"_blank"}).text("马上领取");
                }else{
                    $(".activity-popup a").attr({"href":"javascript:void(0)","target":"_self"}).text("确定");
                    $(".activity-popup a").on("click",function(){
                        t.hide();
                    });
                }
            },
            hide:function(){
                $(".popupcontent").fadeOut();
                $(".activity-popup").fadeOut();
            }
        }
    }

})();