$(function () {
	var forscroll,
		mousebg,
		emoueslf,
		mousend,
		mousegap,
		newmouse,
		mouesmainlf;
    var mouse = function (e) {
    	e.preventDefault();
        mousend = e.clientX;
		mousegap = mousend - mousebg;
		newmouse = emoueslf + mousegap;
        if (newmouse >= 476) { newmouse = 476 };
        if (newmouse <= 0) { newmouse = 0 };
        $(".e-moues").css("left", newmouse);
        $(".e-mouesmain").css("left", -newmouse*2.01);
    };
    $(".e-moues").mousedown(function (e) {
    	e.preventDefault();
		mousebg = e.clientX;
		emoueslf = parseInt($(".e-moues").css("left"));
        $(document).bind("mousemove", mouse);
    });
    $(document).mouseup(function (e) {
        $(document).unbind("mousemove", mouse);
    });
	$(".e-houseover").hover(function (event) {
		mouesmainlf = parseInt($(".e-moues").position().left);
		if (mouesmainlf == 0){
        	$(".scrollingHotSpotRight").show();
			}
		if (mouesmainlf == 476){
			$(".scrollingHotSpotLeft").show();
			}
		if (mouesmainlf > 0&&mouesmainlf < 476){
        	$(".scrollingHotSpotRight,.scrollingHotSpotLeft").show();
			}
		event.stopPropagation();
    }, function (event) {
        $(".scrollingHotSpotLeft,.scrollingHotSpotRight").hide();
		event.stopPropagation();
    });
	var dd = 476/962;
	$(".scrollingHotSpotRight").hover(function(){
		var scrolf = parseInt($(".e-moues").position().left);
		var newlf = function(){
		scrolf = scrolf + 10;
        if (scrolf >= 476) {
        	scrolf = 476 ; 
        	$(".scrollingHotSpotRight").hide();
        	$(".scrollingHotSpotLeft").show();
        }
        if(scrolf>0 && scrolf<476){
        	$(".scrollingHotSpotRight").show();
        	$(".scrollingHotSpotLeft").show();
        }
		$(".e-moues").css("left", scrolf);
		$(".e-mouesmain").css("left", -scrolf/dd);
		};
		forscroll = setInterval(newlf,1);
	},function(){
		clearInterval(forscroll); 
		}).click(function(){
			clearInterval(forscroll); 
			$(".e-moues").css("left", 476);
			$(".e-mouesmain").css("left", -962);
			$(".scrollingHotSpotRight").hide();
        	$(".scrollingHotSpotLeft").show();
		});
	$(".scrollingHotSpotLeft").hover(function(){
		var scrolf = parseInt($(".e-moues").position().left);
		var newlf = function(){
		scrolf = scrolf - 10;
        if (scrolf <= 0) {
        	scrolf = 0
        	$(".scrollingHotSpotRight").show();
        	$(".scrollingHotSpotLeft").hide();
        }
        if(scrolf>0 && scrolf<476){
        	$(".scrollingHotSpotRight").show();
        	$(".scrollingHotSpotLeft").show();
        }
		$(".e-moues").css("left", scrolf);
		$(".e-mouesmain").css("left", -scrolf/dd);
		};
		forscroll = setInterval(newlf,1);
	},function(){
		clearInterval(forscroll); 
		}).click(function(){
			clearInterval(forscroll); 
			$(".e-moues").css("left", 0);
			$(".e-mouesmain").css("left", 0);
			$(".scrollingHotSpotRight").show();
        	$(".scrollingHotSpotLeft").hide();
		});

	$("#ad_banner_1 li").ad_animation({dot:$("#ad_banner_btn_1 span"), dot_selected:"btn_select"});
});


(function($) {
	//广告动画函数
	$.fn.ad_animation = function(options) {
		var defaults = {
			dot : "", // 点的选择器
			dot_selected : "selected", // 点的选择器 被选中的样式 class
			interval : 5000, // 多少秒轮播一次
			img_selected : "_img_select"
		}
		var options = $.extend(defaults, options);
		var img = this;

		$(img).css("position", "absolute").css("top", 0).css("left", 0)
				.css("opacity", 0);
		$(img).first().css("z-index", 3).css("opacity", 1).addClass(options.img_selected);
		if(options.dot != ""){
			$(options.dot).css("z-index", 4);
			$(options.dot).first().addClass(options.dot_selected);
		}

		if($(img).size() == 1){
			$(options.dot).hide();
			return;
		}
		var interval = setInterval(function() {
			tabwidget();
		}, options.interval);

		function tabwidget() {
			var d_length = $(img).length;
			var index = $(img).index($(img).filter("." + options.img_selected));
			if(options.dot != ""){
				$($(options.dot)[index]).removeClass(options.dot_selected);
			}
			$($(img)[index]).removeClass(options.img_selected);
			$(img).css("z-index", 1);

			if (index + 1 >= d_length) {
				if(options.dot != ""){
					$($(options.dot)[0]).addClass(options.dot_selected);
				}
				$($(img)[0]).addClass(options.img_selected);
				animation_img(0, index);
			} else {
				if(options.dot != ""){
					$($(options.dot)[index + 1]).addClass(options.dot_selected);
				}
				$($(img)[index + 1]).addClass(options.img_selected);
				animation_img(index + 1, index);
			}
		}
		function animation_img(show_index, hide_index) {
			$(img).stop(true, true);
			$($(img)[show_index]).css("opacity", 1);
			$($(img)[hide_index]).css("z-index", 3).animate({
				opacity : 0
			}, 800, function(){
				$($(img)[show_index]).css("z-index", 3);
				$($(img)[hide_index]).css("z-index", 1)
			});
		}

		if(options.dot != ""){
			$(options.dot).mouseover(function() {
				var p_index = $(options.dot).index($(options.dot).filter("." + options.dot_selected));

				$(options.dot).filter("." + options.dot_selected).removeClass(options.dot_selected);
				$(this).addClass(options.dot_selected);

				var d_length = $(options.dot).length;
				var index = $(options.dot).index(this);
				$($(img)[p_index]).removeClass(options.img_selected);
				$($(img)[index]).addClass(options.img_selected);

				if (p_index == index) {
					return;
				}
				$(img).css("z-index", 1);
				animation_img(index, p_index);
				clearInterval(interval);
				interval = setInterval(function() {
					tabwidget();
				}, options.interval);
			});
		}
	}	
})(jQuery);