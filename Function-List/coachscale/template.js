	var _scaleRatio;
	var _scalingElements = [];
	var _scalingAreas = [];
	var layoutwidth=1540;
	var layoutheight=937;
	var minwidth=768;
	var minheight=400;	
		
	function scaleElements()
	{
		$(".scale").each(function(index)
		{
			$(this).css({
				"left": Math.round(_scalingElements[index][0] * _scaleRatio),
				"top": Math.round(_scalingElements[index][1] * _scaleRatio),
				"width": Math.round(_scalingElements[index][2] * _scaleRatio),
				"height": Math.round(_scalingElements[index][3] * _scaleRatio)
			});
		});
	};
	function scaleImgMaps()
	{
		var areaIndex = 0;
	
		$("map").each(function()
		{
			$(this).find("area").each(function()
			{
				var coords = _scalingAreas[areaIndex];
				var numOfDataPoints = coords.length;
				var scaleArray = [];
				
				for (var i = 0; i < numOfDataPoints; i++)
				{
					scaleArray.push(Math.round(coords[i] * _scaleRatio));
				}
				
				$(this).attr("coords", scaleArray);
	
				areaIndex++;
			});
		});
	};
	
	function doResize()
	{	
			if ($(window).width() > minwidth && $(window).height() > minheight) {			
				_scaleRatio = $(window).width() / layoutwidth;
				scaleElements();
				scaleImgMaps();			
			}
			else
			{
				
				if ($(window).width() <= minwidth )
				{
	
					_scaleRatio = minwidth / layoutwidth;
	
					scaleElements();
					scaleImgMaps();
	
				} else {
	
					_scaleRatio = $(window).width() / layoutwidth;
	
					scaleElements();
					scaleImgMaps();
				}
			}
	};
	
	function addResizeHandler()
	{
			$(window).resize(function()
			{
				doResize();
			});
	};
	
	function initResize() 
	{
			$(".scale").each(function()
			{
				var elemLeft = this.style.left.replace("px", "");
				var elemTop = this.style.top.replace("px", "");
				var elemWidth = $(this).css("width").replace("px", "");
				var elemHeight = $(this).css("height").replace("px", "");
				
				_scalingElements.push([elemLeft, elemTop, elemWidth, elemHeight]);
			});
	
			$("map").each(function()
			{
				$(this).find("area").each(function()
				{
					var coords = $(this).attr("coords").split(",");
					_scalingAreas.push(coords);
				});
			});
			
			_scaleRatio = $(window).width() / layoutwidth;
				
			doResize();
			addResizeHandler();
	};
    
	$(window).load(function(){
		initResize();
	})