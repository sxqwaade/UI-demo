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
			 

});
			 


