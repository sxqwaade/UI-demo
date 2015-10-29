(function($){
	$.extend($.easing,{
		easeOutExpo: function (x, t, b, c, d) {
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		}
	});	  
	$.fn.faiScroll = function(o){
		o = $.extend({
			step:1,		 
			visible:1,
			autoTime:4000,
			prevId:'#btnPrev',
			nextId:'#btnNext',
			direction:'left'
		},o);
		var mark = 0;
		var _ul = $('ul',this);
		var _li = $('li',this);
		var size = _li.size();
		
		//kv load
		if($("#scroll_wrap")){
			var _imgs = $("#scroll_wrap img");
			_imgs.load(function(){
				$('#scroll_loader').remove();
			});
		}
		
		//$('#scroll_loader').remove();
		$('#scroll_wrap,#scroll_nav').show();
		$('#scroll_total').html(size);
		
		var dis = _li.outerWidth(true),newDirc = 'margin-left';
		if(o.direction != 'left'){dis = _li.outerHeight(true),newDirc = 'margin-top'}
		var allDis = dis*size;
		var htmlCode = _ul.html();
	
		function scroller(){
			var newStep = mark*o.step;
			
			var curMark = mark;
			if(curMark > 0){
				curMark = mark + 1;
			}else{
				curMark = mark + size +1;
			}
			if(curMark > size) curMark = 1; 
			
			$('#scroll_cur_num').html(curMark);
			
			var scrollDic = -allDis-dis*newStep;
			var dirc = (o.direction == 'left') ? {'margin-left':scrollDic} : {'margin-top':scrollDic};
			_ul.animate(dirc,600,'easeOutExpo',function(){
					if(newStep >= size || newStep <= -size){
						_ul.css(newDirc,-allDis);
						mark = 0;
					}
					if(o.direction == 'left'){
						dis = _li.outerWidth(true);
						allDis = dis*size;
						_ul.css({'margin-left':-dis*mark-allDis});
					}
			});
		}
		function _scroll(){
			if(!_ul.is(':animated')){
				mark ++;						 
				scroller();	
			}
		}
		
		if(size > o.visible){
			_ul.append(htmlCode+''+htmlCode).css(newDirc,-allDis);
			$(o.prevId+','+o.nextId).fadeIn();
			
			var myScrol = setInterval(_scroll,o.autoTime);
			
			$(o.nextId).click(_scroll);
			$(o.prevId).click(function(){
				if(!_ul.is(':animated')){					   
					mark --;
					scroller();
				}
			});
			
			$(this).hover(function(){
				clearInterval(myScrol);						 
			},function(){
				myScrol = setInterval(_scroll,o.autoTime);
			});
		}
		else $('#scroll_nav').hide();
		
	}
})(jQuery);