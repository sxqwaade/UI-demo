$(document).ready(function(){
/* Navigation hover effect */					   
	$(".nav li.active a span").css("display","block");
	$(".nav li:not(.active) a").hover(
		function(){
			$(this).find("span").fadeIn();		  
		},function(){
			$(this).find("span").fadeOut();			  
		});
	
/* Store-index page map selection */
	$(".storesCon .map #stores_2city").hide();
	$(".storesCon .map a").click(function(){
		var tar = $(this).attr("href");
		$(".storesCon .map p").hide();
		$(tar).fadeIn();
	});	
	
/* Agent status checkout */
	$(".h_agent a").attr("href","/agent/login.php?placeValuesBeforeTB_=savedValues&amp;TB_iframe=true&amp;height=251&amp;width=410&amp;modal=true");
	$(".h_agent").append("<span></span>");
	$(".h_agent span").hide();
	$(".h_agent p span").show();
	var str = "login"
	$(".h_agent span").load("/agent/agentstatus.php",function(){										 
		var str2 = $(".h_agent span").html();
		/*alert(str);
		alert(str2);*/
		if(str == str2){
			//$(".h_agent").show();
		}else{
			$(".h_agent").html(str2);
		}
		$(".h_agent").show();
	});
	
/* Products&Troubles pages left banner scrolling with page scrolling */
	var scrollFlag = $("ul.banner").hasClass("scrollPanel");
	if(scrollFlag){
		var conHeight = $(".content").height();
		$(".scrollPanel").parent().css("height",conHeight);
		$(".scrollPanel").scrollFollow({offset: 20}); 	
	}
	
});

/* PopupWin Close Method Function */
function closeWin(){
	window.close();	
	return false;
}

/* PopupWin Open Method Function with the height:600&width:870 */
function popupWin(url){
	window.open(url,"PopupWindow","height=600, width=870, top=0, left=0, toolbar=no, menubar=no, scrollbars=yes,resizable=no,location=no, status=no");
}