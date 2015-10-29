var wrapperWidth=140;
var wrapperHeight=84;

function preloadpages(){
	    var pageW=$(window).width();
	    var pageH=$(window).height();
	    var l=Math.round(pageW/2-70);
	    var t=Math.round(pageH/2-42);
	    var loadimage= $(".preload img").length;

		var loadImg='<div class="preloaderWrapper" style="left:'+l+'px;top:'+t+'px;display:none;">';
	    loadImg +='<div class="carriage"><img src="image/preloader-carriage.png" /></div>';
	    loadImg +='<div id="frontwheel" class="wheel"><img src="image/preloader-front-wheel.png" width="19" height="19"/></div>';
	    loadImg +='<div id="backwheel" class="wheel"><img src="image/preloader-back-wheel.png" width="24" height="24"/></div>';
	    loadImg +='<div id="progressBar" style="position:absolute; left:0; top:74px; width:1px; height:6px; padding:0; line-height:0; font-size:0; background-color:#999";></div>';
	    loadImg +='<div id="loadingdot"><img src="image/preloader-dots.png" width="140" height="14"/></div>';
	    loadImg +='</div>';			
		
		$('body').append(loadImg);
		$('.preloaderWrapper').fadeIn(400);
	
		$('.preloaderWrapper').bind("updateProgress",function(event,imagelength){
			var x=Math.round(wrapperWidth/loadimage);
			var s=imagelength*x;		
			if(s>wrapperHeight){
				s=wrapperWidth;
			}
			$('#progressBar').animate({'width':s},400);
			
		})
	}
function preload(preloaditem){
	var numpreloaditem=preloaditem.length;
	var count = 0;
	var preloadCount=0;
	$.each(preloaditem,function(index){
		var image=new Image();
		var iteme = preloaditem[index];
		var cacheimg= $(iteme).attr('src');
		$(image).bind("load error", function()
		{
			preloadCount++;
			$('.preloaderWrapper').trigger("updateProgress",[preloadCount]);
			if (preloadCount === numpreloaditem)
			{
				var s=setTimeout(function(){$('.content').fadeIn(400)},400);
				$('.preloaderWrapper').fadeOut(400);
				return false;
			}			
		});
		image.src=cacheimg;
	})
}
function addImage(){
	
	$('.preload img').each(function(){
		var src=$(this).attr("lazy_src");
		$(this).attr('src',src);
	})
	var iteme= $('.preload').find('img');
	preload(iteme);
}
$(window).load(function(){
	preloadpages();		
	addImage();
})