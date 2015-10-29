// JavaScript Document

var whiop=parseInt($(window).width());
$(document).ready(function(){
	 
	
	$(window).resize(function(){
		$(".scroll_large_img ul").height($(".scroll_large_img ul li img").height());

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

});
