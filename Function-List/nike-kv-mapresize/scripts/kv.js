// JavaScript Document

var whiop=parseInt($(window).width());
$(document).ready(function(){
	 
	
	$(window).resize(function(){
		$(".scroll_large_img ul").height($(".scroll_large_img ul li img").height());
		 $(".scroll_large_img img").each(function(){
 	     imgAutoMap(this);
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