$j(function(){
//同一个页面可以执行多个效果		
(function($){
    var list = $('.fn-clear li');
    var w = 970, time = 500, inter_time = 2000, interval_0 = null, interval_1 = null;
    list.click(function(){
        var self = $(this)
            , sIndex = self.index()
            , clearLi = self.siblings('li')
            , oldIndex = self.siblings('li[class*=sel]').index()
            , kv = self.parents('.spe-kv').find('.spe-kv-pic>ul');

        var li = $('li:eq('+sIndex+')', kv)//鼠标点击的li
            , curLi = $('li[cur=cur]', kv)//在li里得到含有属性cur的（当前显示的li）
            , curLiIndex = curLi.index();//获得当前显示的缩影

        if(sIndex == curLiIndex || (curLi.is(':animated') || li.is(':animated'))) return;
        
        clearLi.removeClass('sel');
        self.addClass('sel');
        
        
        li.css({left:(oldIndex<sIndex?w:-w)});
        
        var left = parseInt(li.css('left'))>0?-w:w;
        
        curLi.animate({left:left}, time);
        curLi.removeAttr('cur');
        li.attr('cur','cur');
        li.animate({left:0}, time);

    });
	
	
	//右箭头点击
    $('.arrow-next').click(function(){
        var self = $(this)
            , li = self.siblings('.spe-kv-go').find('li')
            , curLi = li.siblings('[cur=cur]')
            , liLength = li.length
            , clearLi = self.parents('.spe-kv').find('.fn-clear li')
            , index = self.parents('.spe-kv').find('.fn-clear li[class*=sel]').index();

        if((curLi.is(':animated') || li.is(':animated'))) return;

        ++index;
        if(index>liLength-1){
            index = 0;              
            li.not(':eq('+(liLength-1)+')').css({left:w});
        }

        clearLi.removeClass('sel');
        clearLi.eq(index).addClass('sel');

        li = li.eq(index);
        curLi = li.siblings('[cur=cur]'); 

        curLi.animate({left:-w}, time);
        curLi.removeAttr('cur');
        li.attr('cur','cur');
        if(parseInt(li.css('left'))<0)li.css({left:w});

        li.animate({left:0}, time); 

    });
	
	//左箭头点击
    $('.arrow-prev').click(function(){
         var self = $(this)
            , li = self.siblings('.spe-kv-go').find('li')
            , curLi = li.siblings('[cur=cur]')
            , liLength = li.length
            , clearLi = self.parents('.spe-kv').find('.fn-clear li')
            , index = self.parents('.spe-kv').find('.fn-clear li[class*=sel]').index();

        if((curLi.is(':animated') || li.is(':animated'))) return;
        --index;
        if(index<0){
            index = liLength-1;
            li.not(':eq(0)').css({left:-w});
        }
        
        clearLi.removeClass('sel');
        clearLi.eq(index).addClass('sel');
        
        li = li.eq(index);
        curLi = li.siblings('[cur=cur]'); 
        
        curLi.animate({left:w}, time);
        curLi.removeAttr('cur');
        li.attr('cur','cur');
        if(parseInt(li.css('left'))>0)li.css({left:-w});
        li.animate({left:0}, time); 

    });
    
    $('.spe-content:eq(0)').attr('time', '0');
    $('.spe-content:eq(1)').attr('time', '1');
      
    var _setTime = function(){    	
    	 interval_0 = setInterval(function(){    	
			$('.spe-content:eq(0) .arrow-next').click();
		}, inter_time);
	    
	    interval_1 = setInterval(function(){
	    	$('.spe-content:eq(1) .arrow-next').click();
		}, inter_time);
    }
    var _clearTime = function(){    	
    	clearInterval(interval_0);
    	clearInterval(interval_1);
    }
    
    _setTime();
    
    
    $('.arrow-next, .arrow-prev, .spe-kv').bind({
		mouseover:function(){
    		clearInterval(($(this).parents('.spe-content').attr('time')==0?interval_0:interval_1));
		},
		mouseleave:function(){
			_clearTime();
			_setTime();
			
		}
	});
       
    
})(jQuery);
});

