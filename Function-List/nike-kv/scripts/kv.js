// JavaScript Document

var whiop=parseInt($(window).width());
$(document).ready(function(){
	 
	  $(window).width(whiop-1);
	   $(".mal-black").css("opacity","0.5");
     		setTimeout(function(){$(".mal-detail").eq(0).fadeIn(500);},1500);
     		 setTimeout(function(){$(".mal-detail").eq(1).fadeIn(500);},3500);
     		 setTimeout(function(){$(".mal-detail").eq(2).fadeIn(500);},5500);
     		 setTimeout(function(){$(".mal-detail,.mal-black").fadeOut(500);},7500);
     		 
     		
     		 setTimeout(function(){
     			 $(".mal-detail").css("background","#000000");
     			 $(".mal-move").hover(
     				function(){
     				  var thisindex=$(".mal-move").index($(this));
     				  $(".mal-detail").stop(true,true).fadeOut(500).eq(thisindex).stop(true,true).fadeIn(500);
     			 	},
     			 	function(){
     			 	 $(".mal-detail").stop(true,true).fadeOut(500);
     			 	}
     			 );
     		 },8000);
			 
			 var numList = {"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":{},"11":{},"12":{},"13":{},"14":{},"15":{},"16":{},"17":{},};
	$.each($('.mal-detail', '.kv-color-con'), function(i, j){
		var self = $(j)
	  		, selfWidth = self.width()
	  		, selfHeight = self.height()
	  		, l = parseInt(self.css('left'))
	  		, t = parseInt(self.css('top'));
			console.log(i,j);
		numList[i].width = selfWidth;
	  	numList[i].height = selfHeight;
	  	numList[i].left = l;
	  	numList[i].top = t;
	});
	
	$(window).resize(function(){
		$(".scroll_large_img ul").height($(".scroll_large_img ul li img").height());
		$(".scroll_large_img img").each(function(){
			 imgAutoMap(this);
		 });
  
	
		$.each($('.mal-detail', '.kv-color-con'), function(i, j){
			
		var self = $(j);
		var bitekv=$(window).width()/1600;
		//console.log(selfWidth*bitekv, bitekv)
		var w,h,l,t;		
		w = numList[i].width*bitekv;
		h = numList[i].height*bitekv;
		l = numList[i].left*bitekv;
		t = numList[i].top*bitekv;
		
		self.css({
				"left":l
				, "top":t
				, width:w
				, height:h
		});
	});	
});
			 
			 
});

//首页KV加载开始
	var $scroll_large_img = $('.scroll_large_img ul')
	, scroll_img = $('li:eq(0) img', $scroll_large_img)
	, scroll_img_src = $('img', '.scroll_large_img ul li:eq(0)').attr('src');
	if(scroll_img_src){
		$("<img src='"+scroll_img_src+"' />").bind("load", function() {
			$scroll_large_img.height($(".morenimg").eq(0).height());
			var otherImg = $('li:not(:eq(0)) img', $scroll_large_img);
			$.each(otherImg, function(i, j){
				var self = $(j);
				self.attr('src', self.attr('kv_src'));
			});			
		});
	}
	


$(window).load(function(){
	  $(window).width(whiop-1);
	  $(".scroll_large_img ul").height($(".scroll_large_img ul li img").height());
	  $(".scroll_large_img img").each(function(){
 	     imgAutoMap(this);
	    });
});

//首页KV加载结束	



//热区缩放功能
(function($){
	     window.imgAutoMap = function(img){
	        var img = $(img),
	            Oimg = new Image(),
	            imgMap = $(img.attr("usemap"));
	            Oimg.src = (img.attr("src") || img.attr("kv_src") || img.attr("lazy_src"));
	            var oldW = Oimg.width, oldH = Oimg.height, newW = img.width(), newH = img.height(), rate = oldW/newW;
	            if(imgMap){
	                imgMap.find("area").each(function(){
	                    var area=$(this),coords=[],newCoords=[];
	                    coords = area.attr("coords").split(",");
	                    if(area.data("oldCoords")){
	                        coords = area.data("oldCoords");
	                    }else{
	                        coords = area.attr("coords").split(",");
	                        area.data("oldCoords",coords);
	                    }
	                    for(var i=0;i<coords.length;i++){
	                        newCoords.push(Math.ceil(coords[i]/rate));
	                    }
	                    area.attr("coords",newCoords.join(','));
	                    
	                });
	            }
	        };
	
})(jQuery);