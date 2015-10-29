/*
http://www.rjboy.cn
By sean during 2010.07 - 2011.07
	
Demo:
$(".productshow").Xslider({//.productshow是要移动对象的外框,页面上所有绑定了类.productshow的对象都会有切换效果;
unitDisplayed:3,//可视的单位个数   必需项;
numtoMove:1,//要移动的单位个数    必需项;
viewedSize:120,//可视宽度或高度     不传入则查找要移动对象外层的宽或高度;
scrollObj:".vscrollObj",//要移动的对象    不传入则查找productshow下的ul;
unitLen:20,//移动的单位宽或高度      不传入则查找li的尺寸;
scrollObjSize:$(".vscrollObj").height(),//移动最长宽或高（要移动对象的宽度或高度）   不传入则由li个数乘以unitLen计算;
dir:"V",//水平移动还是垂直移动       默认H为水平移动，传入V则表示垂直移动（注意是大写字母）;
loop:"cycle",//循环滚动            不传入则不循环滚动;
speed:500, //滚动速度      默认为500;
autoScroll:2000,//自动移动间隔时间（毫秒）     不传入则不会自动移动;
showNav:true,
hover:true,
imgInit:3
});
*/

(function($) {
    $.extend($.easing, {
        easeInSine: function(x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeInQuint: function(x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
    });

    $.fn.Xslider = function(settings) {
        settings = $.extend({}, $.fn.Xslider.sn.defaults, settings);
        this.each(function() {
            var scrollObj = settings.scrollObj ? $(this).find(settings.scrollObj) : $(this).find("ul"),
			    viewedSize = settings.viewedSize || (settings.dir == "H" ? scrollObj.parent().width() : scrollObj.parent().height()), //length of the wrapper visible;
			    scrollunits = settings.scrollunits && scrollObj.find(settings.scrollunits) || scrollObj.find("li"), //units to move;
			    unitLen = settings.unitLen || (settings.dir == "H" ? scrollunits.eq(0).outerWidth() : scrollunits.eq(0).outerHeight()),
			    unitDisplayed = settings.unitDisplayed, //units num displayed;
				numtoMove = settings.numtoMove > unitDisplayed ? unitDisplayed : settings.numtoMove,
			    scrollObjSize = settings.scrollObjSize || scrollunits.length * unitLen, //length of the scrollObj;
			    offset = 0, //max width to move;
			    offsetnow = 0, //scrollObj now offset;
			    movelength = unitLen * numtoMove,
				pos = settings.dir == "H" ? "left" : "top",
			    moving = false, //moving now?;
			    btnright = settings.btnOwner ? $(this).find(settings.btnOwner).find("a.aright") : $(this).find("a.aright"),
			   	btnleft = settings.btnOwner ? $(this).find(settings.btnOwner).find("a.aleft") : $(this).find("a.aleft");

            btnright.unbind("click");
            btnleft.unbind("click");

            settings.dir == "H" ? scrollObj.css("left", "0px") : scrollObj.css("top", "0px");

            if (scrollObjSize > viewedSize) {
                if (settings.loop == "cycle") {
                    btnleft.removeClass("agrayleft");
                    if (scrollunits.length < 2 * numtoMove + unitDisplayed - numtoMove) {
                        scrollObj.find("li").clone().appendTo(scrollObj);
                    }
                } else {
                    btnleft.addClass("agrayleft");
                    offset = scrollObjSize - viewedSize;
                }

                if (settings.imgInit) {
                    $(this).find(".nav").children().eq(settings.imgInit - 1).addClass("current").siblings().removeClass("current");
                    offsetnow = (settings.imgInit - 1) * unitLen;
                    $.fn.Xslider.sn.animate(scrollObj, -offsetnow, settings.dir, settings.speed, function() { moving = false; });

                    if (settings.imgInit == navnum) {
                        btnleft.removeClass("agrayleft");
                        btnright.addClass("agrayright");
                    } else if (settings.imgInit == 1) {
                        btnleft.addClass("agrayleft");
                        btnright.removeClass("agrayright");
                    } else {
                        btnleft.removeClass("agrayleft");
                        btnright.removeClass("agrayright");
                    }
                }

                btnright.removeClass("agrayright");
            } else {
                btnleft.addClass("agrayleft");
                btnright.addClass("agrayright");
            }


            if (settings.showNav) {
                var nav = $(this).find(".nav");
                if (!settings.imgInit) {
                    nav.children(":first").addClass("current");
                }

                var timeout,
					navnum = nav.children().length;
                nav.children().each(function(n) {
                    var _this = $(this);
                    _this.hover(function() {

                        if (!settings.hover) { return false; }

                        if (timeout) { clearTimeout(timeout); }

                        timeout = setTimeout(function() {
                            _this.addClass("current").siblings().removeClass("current");
                            offsetnow = n * unitLen;
                            settings.beforeStart && settings.beforeStart.call(this, '');
                            $.fn.Xslider.sn.animate(scrollObj, -offsetnow, settings.dir, settings.speed, function() { moving = false; settings.afterEnd && settings.afterEnd.call(this, ''); });

                            if (n + 1 == navnum) {
                                btnleft.removeClass("agrayleft");
                                btnright.addClass("agrayright");
                            } else if (n == 0) {
                                btnleft.addClass("agrayleft");
                                btnright.removeClass("agrayright");
                            } else {
                                btnleft.removeClass("agrayleft");
                                btnright.removeClass("agrayright");
                            }

                        }, 200);

                    }, function() {
                        if (!settings.hover) { return false; }

                        if (timeout) { clearTimeout(timeout); }
                    }).click(function() {
                        if (settings.hover) { return false; }

                        _this.addClass("current").siblings().removeClass("current");
                        offsetnow = n * unitLen;
                        settings.beforeStart && settings.beforeStart.call(this, '');
                        $.fn.Xslider.sn.animate(scrollObj, -offsetnow, settings.dir, settings.speed, function() { moving = false; settings.afterEnd && settings.afterEnd.call(this, ''); });

                        if (n + 1 == navnum) {
                            btnleft.removeClass("agrayleft");
                            btnright.addClass("agrayright");
                        } else if (n == 0) {
                            btnleft.addClass("agrayleft");
                            btnright.removeClass("agrayright");
                        } else {
                            btnleft.removeClass("agrayleft");
                            btnright.removeClass("agrayright");
                        }
                        return false;
                    });
                });
            }

            btnleft.click(function() {
                var curspeed = settings.speed;
                if (settings.speeds){
                	curspeed = settings.speeds[0];
                }
                if ($(this).is("[class*='agrayleft']")) { return false; }

                if (!moving) {
                    moving = true;

                    settings.beforeStart && settings.beforeStart.call(this, btnleft);

                    if (settings.loop == "cycle") {
                        scrollObj.find("li:gt(" + (scrollunits.length - numtoMove - 1) + ")").prependTo(scrollObj);
                        scrollObj.css(pos, "-" + movelength + "px");
                        $.fn.Xslider.sn.animate(scrollObj, 0, settings.dir, curspeed, function() { moving = false; settings.afterEnd && settings.afterEnd.call(this, btnleft); });
                    } else {
                        offsetnow -= movelength;
                        if (offsetnow > unitLen * unitDisplayed - viewedSize) {
                            $.fn.Xslider.sn.animate(scrollObj, -offsetnow, settings.dir, curspeed, function() { moving = false; settings.afterEnd && settings.afterEnd.call(this, btnleft); });
                        } else {
                            $.fn.Xslider.sn.animate(scrollObj, 0, settings.dir, curspeed, function() { moving = false; settings.afterEnd && settings.afterEnd.call(this, btnleft); });
                            offsetnow = 0;
                            btnleft.addClass("agrayleft");
                        }
                        settings.showNav && nav.children(".current").removeClass().prev().addClass("current").focus();
                        btnright.removeClass("agrayright");
                    }
                }

                return false;
            });
            btnright.click(function() {
                var curspeed = settings.speed;
                if (settings.speeds){
                	curspeed = settings.speeds[1];
                }
                if ($(this).is("[class*='agrayright']")) { return false; }

                if (!moving) {
                    moving = true;

                    settings.beforeStart && settings.beforeStart.call(this, btnright);

                    if (settings.loop == "cycle") {
                        var callback = function() {
                            scrollObj.find("li:lt(" + numtoMove + ")").appendTo(scrollObj);
                            scrollObj.css(pos, "0px");
                            moving = false;
                            settings.afterEnd && settings.afterEnd.call(this, btnright);
                        }
                        $.fn.Xslider.sn.animate(scrollObj, -movelength, settings.dir, curspeed, callback);
                    } else {
                        offsetnow += movelength;
                        if (offsetnow < offset - (unitLen * unitDisplayed - viewedSize)) {
                            $.fn.Xslider.sn.animate(scrollObj, -offsetnow, settings.dir, curspeed, function() { moving = false; settings.afterEnd && settings.afterEnd.call(this, btnright); });
                        } else {
                            $.fn.Xslider.sn.animate(scrollObj, -offset, settings.dir, curspeed, function() { moving = false; settings.afterEnd && settings.afterEnd.call(this, btnright); }); //滚动到最后一个位置;
                            offsetnow = offset;
                            btnright.addClass("agrayright");
                        }
                        settings.showNav && nav.children(".current").removeClass().next().addClass("current").focus();
                        btnleft.removeClass("agrayleft");
                    }
                }

                return false;
            });

            if (settings.autoScroll) {
                $.fn.Xslider.sn.autoScroll(settings.btnOwner ? $(this).find(settings.btnOwner) : $(this), settings.autoScroll);
            }
        })
    }

    $.fn.Xslider.sn = {
        defaults: {
            dir: "H",
            showNav: false,
            speed: 500,
            hover: true
        },
        animate: function(obj, w, dir, speed, callback) {
            if (dir == "H") {
                obj.animate({
                    left: w
                }, speed, "easeOutQuint", callback);
            } else if (dir == "V") {
                obj.animate({
                    top: w
                }, speed, "easeOutQuint", callback);
            }
        },
        autoScroll: function(obj, time) {
            var vane = "right";
            function autoScrolling() {
                if (vane == "right") {
                    if (!obj.find("a.agrayright").length) {
                    	console.log('run right');
                        obj.find("a.aright").trigger("click");
                    } else {
                        vane = "left";
                    }
                }
                if (vane == "left") {
                    if (!obj.find("a.agrayleft").length) {
                    
                        obj.find("a.aleft").trigger("click");
                    } else {
                        vane = "right";
                
                        obj.find("a.aright").trigger("click");
                    }
                }
            }
            var scrollTimmer = setInterval(autoScrolling, time);
            obj.hover(function() {
                clearInterval(scrollTimmer);
            }, function() {
                scrollTimmer = setInterval(autoScrolling, time);
            });
        }
    }
})(jQuery);