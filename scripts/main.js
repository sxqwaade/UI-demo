var sConfirm = null
	, sAlert = null;
(function($){
	//弹出层
//e:消息标题
//f:消息内容
//g:第一个按钮的的回调入口
//h:第一个按钮的名字
//j:第二个按钮的的回调入口
//k:第二个按钮的名字
sConfirm = function(e,f,g,h,j,k){
	if (h == null)
		h = "确定";
	if (k == null)
		k = "取消";
	
	$(".pdidclass").remove();
	$("<div class='black_opacity'></div>")
		.css({"height":$("body").height(),"opacity":"0.5"})
		.detach()
		.appendTo("body")
		.fadeOut(15)
		.fadeIn(300);
	
	var htmlDiv="<div class='pay_dialog pdidclass'>";
	
	htmlDiv+="<div class='cj_topbg'></div>";
	
	htmlDiv+="<div class='pay_dialog_coco'>";
	htmlDiv+="<label></label><p class='pword' style='text-align:center;'></p>";
	
	htmlDiv+="<p style='padding:15px 0 0 0; text-align:center;'>";
	htmlDiv+="<a href='###' class='black-btn width100 fLeft sucess_confirm' id='confirmbtn2'><em>"+h+"</em><span></span></a>";
	htmlDiv+="<a href='###' class='black-btn width100 fRight cancel_confirm'><em>"+k+"</em><span></span></a>";
	htmlDiv+="</p>";
	
	htmlDiv+="<img src='images/main/footer_cross.png' class='cross_cha close' />";
	htmlDiv+="</div>";
	
	htmlDiv+="<div class='cj_bottombg'></div>";
	
	htmlDiv+="</div>";
	
	$(htmlDiv)
		.detach()
		.appendTo("body")
		.fadeOut(15)
		.fadeIn(300);
	
	$('.pdidclass label').html(e);
	$('.pdidclass .pword').html(f);
	
	$(".cross_cha,.sucess_confirm,.cancel_confirm").click(function(){
		$(".black_opacity").fadeOut(15);
		$(".pdidclass").fadeOut(15);
	});

	$(".cancel_confirm").click(function(){
		if(j)
			loxia.hitch(j)();
	});

	$(".sucess_confirm").click(function(){
		if(g)
			loxia.hitch(g)();
	});
	
	if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
		var sc_top=$(window).scrollTop();
		$(".pay_dialog").css("top",sc_top+150);
	}

}


//显示提示消息框体
//e:消息标题
//f:消息内容
//c:按钮被点击后的回调入口
//h:按钮的名字
sAlert = function(e,f,c,h){
	if (h == null)
		h = "确定";
	$(".pdidclass2").remove();
	$("<div class='black_opacity'></div>").css({"height":$("body").height(),"opacity":"0.5"}).detach().appendTo("body").fadeOut(15).fadeIn(300);
	
	$("<div class='pay_dialog pdidclass2'><div class='cj_topbg'></div><div class='pay_dialog_coco'><label></label><p class='pword' style='text-align:center;'></p><p style='padding:15px 0 0 0; text-align:center;'><a href='###' class='black-btn width100 sucess_confirm' id='confirmbtn2'><em>"+h+"</em><span></span></a></p><img src='images/main/footer_cross.png' class='cross_cha close' /></div><div class='cj_bottombg'></div></div>").detach().appendTo("body").fadeOut(15).fadeIn(300);
	$('.pdidclass2 label').html(e);$('.pdidclass2 .pword').html(f);
	
	$(".cross_cha,.sucess_confirm").click(
		function(){
			$(".black_opacity").fadeOut(15);
			$(".pdidclass2").fadeOut(15);
			if(c)
				loxia.hitch(c)();
		}				 
	);
	
	
	if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
		var sc_top=$(window).scrollTop();
		$(".pay_dialog").css("top",sc_top+150);
	}

}
})(jQuery);
//遮罩弹出层 end



$j(document).ready(function(){
	
	/*inputtext*/
	$j(".text_val_ori").each(
		function(){
			var thisoi=$j(this).attr("ori_value");
			
			//修改原有的值
			if($j(this).val()==""){
				$j(this).val(thisoi);
			} else {
				// nothing todo
			}
			
			
			$j(this).focus(function(){
				if($j(this).val()==thisoi){
					$j(this).val("");
				}
			});
			
			$j(this).blur(function(){
				if($j(this).val()==''){
					$j(this).val(thisoi);
				}
			});
		}	
	);
	/*inputtext_end*/
	
});