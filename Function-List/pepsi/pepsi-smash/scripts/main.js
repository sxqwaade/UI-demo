$(function () {
    $("#cool_product div").click(function(){
    	$(".chuiziimg").attr("src","http://img.pepsitmall.com/img/nowutc/hammer.gif");
    	var dom = this;
    	var left = $(dom).css("margin-left");
    	var top = $(dom).css("margin-top");
    	shake($(dom)[0],'onmouseout');
    	setTimeout(function(){
    		$(dom).trigger('onmouseout');
    		$(dom).css("margin-left", left);
    		$(dom).css("margin-top", top);
    		$(".chuiziimg").attr("src","http://img.pepsitmall.com/img/nowutc/hammer.png");
    	}, 490);
    });
    
    $("#file").click(function(e){
    	$.asyncJson(serverContextPath+"/utc/validateLogin.json", null, function(){
    		
    	});
    	if($("#islogin").val() == ""){
    		return false;
    	}
    });

    $("<img src='http://img.pepsitmall.com/img/nowutc/hammer.png' class='chuiziimg'/>").css({"clear":"both","position":"absolute","width":"148px","height":"162px","z-index":"100000000","left":0,"top":0,"display":"none"}).detach().appendTo("#chuizioutside");
    $("#chuizioutside").mousemove(function(e){
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        $(".chuiziimg").css({"left":e.clientX-$(this).offset().left+2,"top":top+e.clientY-$(this).offset().top-48,"display":"block"});
    });
    $("#chuizioutside").mouseleave(function(){
        $(".chuiziimg").css({"display":"none"});
    }); 
});