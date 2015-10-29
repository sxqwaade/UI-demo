function op_dia(e){
	$j(".black_op").remove();
	$j("<div class='black_op' style='display:none; clear:both; position:absolute; width:100%; height:100%; background:#000; z-index:9; left:0; top:0; margin:0; padding:0;'></div>").css({"height":$j("body").height(),"opacity":"0.7"}).detach().appendTo("body").stop(true,true).fadeIn(400);
	
	$j(".dia").hide();
	$j(e).detach().appendTo("body").stop(true,true).fadeIn(400);
	
	$j(window).resize(function(){$j(".black_op").css({"height":$j("body").height()})});
	$j(".op_dia .close_dia").click(function(){
		$j(".black_op").stop(true,true).fadeOut(100,function(){$j(this).remove();});
		$j(e).stop(true,true).fadeOut(100);
	});
}