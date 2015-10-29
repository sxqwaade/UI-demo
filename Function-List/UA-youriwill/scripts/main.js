
(function($){

	var showTheWorld = '<div class="step">\
							<div class="title">\
								<img alt="Show the world" src="images/show-the-world.png" class="title-img">\
								<img alt="#IWILL" src="images/upload-iwill.png" class="title-img">\
							</div>\
							<div class="buttons">\
								<div id="goto-txt"><img alt="pencil" src="images/pencil-icon.png"> 宣布你的决心</div>\
								<div class="button-divider"></div>\
								<div id="goto-img"><img alt="camera" src="images/camera-icon.png"> 展示你的决心</div>\
							</div>\
						</div>'
		, showYourWill = '<div class="step">\
							 <div class="title">\
								  <img alt="SHOW YOUR WILL" src="images/show-your-will.png" class="title-img">\
								  <img src="images/show-your-will-tips.png" class="title-img">\
							 </div>\
							 <div class="buttons">\
								  <div id="fb-button"><img alt="pencil" src="images/album-icon.png"> 相薄</div>\
						          <div class="button-divider"></div>\
						          <div id="local-button"><img alt="camera" src="images/desktop-icon.png"> 上载</div>\
							 </div>\
							 <form target="upload_target" enctype="multipart/form-data" method="post" id="upload-form">\
								 <div id="fake-input" style="left: 1008px; top: 355px;">\
						                <input type="file" name="image" id="choose-file">\
						         </div>\
							 </form>\
						</div>'
		, declareYourWill = '<div class="step">\
								<div class="sub-title"><img alt="Declare Your Will" src="images/declare-your-will.png" class="title-img">\
									<img src="images/declare-your-will-tips.png" class="title-img">\
							    </div>\
							    <form id="submit-txt">\
								    <div id="message-container">\
								    	<div id="message-counter"><span>还有133个字</span></div>\
								    	<textarea id="message" maxlength="140"> #IWILL</textarea>\
								    </div><br>\
								    <div id="txt-checkbox-container">\
									    <div id="main-txt-check">\
									        <div class="enter border">\
									            <input type="checkbox" id="enter">\
									            <div id="fake-enter" class="fake-checkbox checked"></div>\
									            <label for="enter" class="big-label">参加UA奖品赠送活动</label>\
									        </div>\
									        <div class="enter bot">\
									            <input type="checkbox" id="enter">\
									            <div id="fake-enter" class="fake-checkbox nmt checked"></div>\
									            <label for="enter" class="big-label nmt">我想收到UA产品和推广活动的最新消息</label>\
									            <input type="submit" value="提交" class="button">\
									        </div>\
									    </div>\
									</div>\
							    </form>\
							</div>';

	var d = 100
		, oldVideo = 0
		, videoTimer = null
		, easeOut = function (t,b,c,d){
	        return c*((t=t/d-1)*t*t + 1) + b;
	    }
	    , showVideo = function(ratio, branConVideo, branConVideoL){
	    	if(!videoTimer){
	    		oldVideo = Math.floor(ratio/10);
				oldVideo = oldVideo > branConVideoL-1 ? branConVideoL-1 : oldVideo;
				branConVideo.removeClass('opacity');
				branConVideo.eq(oldVideo).addClass('opacity');
	    	}			
	    }

	var w = $(window);
	var hero = $('#hero')
		, hT = hero.offset().top
		, hH = hero.outerHeight();
	var headerBar = $('#header-bar');

	headerBar.bind('show', function(){

		!headerBar.is(':animated') && headerBar.animate({top:0}, 150);

	}).bind('hide', function(e, fn){
		
		!headerBar.is(':animated') && headerBar.animate({top:-90}, 150, function(){
			fn && $.isFunction(fn) && fn();
		});

	});

	var oldStInfo = 0;	
	var startSt = 0, endSt = 0;

	w.scrollTop(0);

	var site = [];
	var gridCon = $('#grid-container')
		, gridConT = gridCon.offset().top;
	w.scroll(function(){

		var self = $(this)
			, sT = self.scrollTop()
			, sH = self.height();

		//顶部导航效果
		headerBar.trigger((sT+30 >= hT+hH?'show':'hide'));

		//向下
		if(oldStInfo < sT){
			$.each($('.branded-cell'), function(i, j){
				startSt = site[i]-80;
				var cell = $('.branded-cell:eq('+i+')')
					, cH = cell.height()
					, cT = cell.offset().top
					, ul = cell.parents('ul')
					, brandCon = $('.branded-content', cell)
					, branConH = brandCon.height()
					, branConVideo = $('.video-container div', brandCon)
					, branConVideoL = branConVideo.length
					, pstion = ul.css('position');
				
				if(site[i] == undefined) site[i] = cT;

				if(site[i]-80 < sT && pstion != 'fixed' && !cell.hasClass('bottom')){
					ul.css({'position': 'fixed', top:-(site[i]-gridConT-90)});
				}
				
				if(pstion == 'fixed' && sT+sH >= site[i]+cH){
					ul.removeAttr('style');
					cell.addClass('bottom');
				}

				//move aniamte
				if(pstion == 'fixed'){
					//console.log((sT - startSt)/(cH - branConH + 80));
					var ratio = (sT - startSt)/(cH - branConH + 80)*100
						, imgml = 0
						, imgmt = 0
						, pml = 0;

					showVideo(ratio, branConVideo, branConVideoL);

					if(ul.attr('id')=='left-column'){
						imgml = Math.ceil(easeOut(ratio, -59, 59, d));
						imgmt = Math.ceil(easeOut(ratio, 0, -47, d));
						pml = Math.ceil(easeOut(ratio, -25, 55, d));
					}else{
						imgml = Math.ceil(easeOut(ratio, -30, 30, d));
						imgmt = Math.ceil(easeOut(ratio, 0, -49, d));
						pml = Math.ceil(easeOut(ratio, 96, -30, d));
					}
					$('.branded-content:eq('+i+') .scene').css({marginLeft: imgml, marginTop: imgmt});
					$('.branded-content:eq('+i+') .athlete').css({marginLeft: pml});

				}

			});
		}
		//向上
		else{
			$.each($('.branded-cell'), function(i, j){

				var cell = $('.branded-cell:eq('+i+')')
					, cH = cell.height()
					, cT = cell.offset().top
					, ul = cell.parents('ul')
					, brandCon = $('.branded-content', cell)
					, branConT = brandCon.position().top
					, branConH = brandCon.height()
					, branConVideo = $('.video-container div', brandCon)
					, branConVideoL = branConVideo.length
					, pstion = ul.css('position');

				endSt = site[i]+branConT;

				if(pstion == 'fixed' && sT+80 <= site[i] && !cell.hasClass('bottom')){
					ul.removeAttr('style');
					cell.removeClass('bottom');
				}
				if(cell.hasClass('bottom') && pstion != 'fixed' && sT+90<=site[i]+branConT){
					startSt = sT;
					ul.css({'position': 'fixed', top:-(site[i]-gridConT-90)});
					cell.removeClass('bottom');
				}


				//move aniamte
				if(pstion == 'fixed'){
					var ratio = 100-Math.abs(sT - endSt)/(cH - branConH + 80)*100
						, imgml = 0
						, imgmt = 0
						, pml = 0;

					showVideo(100-ratio, branConVideo, branConVideoL);

					if(ul.attr('id')=='left-column'){
						imgml = Math.ceil(easeOut(ratio, 0, -59, d));
						imgmt = Math.ceil(easeOut(ratio, -47, 47, d));
						pml = Math.ceil(easeOut(ratio, 30, -55, d));
					}else{
						imgml = Math.ceil(easeOut(ratio, 0, -30, d));
						imgmt = Math.ceil(easeOut(ratio, -49, 49, d));
						pml = Math.ceil(easeOut(ratio, 66, 30, d));
					}
					$('.branded-content:eq('+i+') .scene').css({marginLeft: imgml, marginTop: imgmt});
					$('.branded-content:eq('+i+') .athlete').css({marginLeft: pml});

				}

			});
			
		}
		setTimeout(function(){oldStInfo = sT;}, 0);


		//延迟加载
		var sh = sT+sH;
		$.each($('.loading-cell'), function(i, j){
			var self = $(j)
				, img = $('img', self)
				, lazySrc = img.attr('lazy_src')
				, imgLength = img.length
				, it = self.offset().top
				, ih = self.height()
				, iw = self.width();
			
			if ((it+ih <= sh && it+ih>=sT) || (it <= sh && it >= sT)) {
				if(imgLength==0){
					self.removeClass('loading-cell');
					$('.loading-dark', self).remove();
				}else{
					$.each(img, function(n, m){
						var $img = $(m), _lazySrc = $img.attr('lazy_src');
						$("<img src='"+_lazySrc+"' />")
		                    .bind("load", function() {
		                    	//setTimeout(function(){
		                    		self.removeClass('loading-cell');
									$('.loading-dark', self).remove();
									$img.attr('src', _lazySrc).removeAttr('lazy_src');                    		
		                    	//}, 200);
								
		                    });
					});
				}
                
            }
		});

	}).scroll();

	//列表hover效果
	var gridHover = null;
	$('.grid-hitfield')
		.live('mouseenter', function(){
			gridHover = $('.grid-hover', this);
			!gridHover.is(':animated') && gridHover.animate({opacity:1}, 200);
			gridHover.css({visibility:'visible'});
		}).live('mouseleave', function(){
			!gridHover.is(':animated') && gridHover.animate({opacity:0}, 200);
			gridHover.css({visibility:'hidden'});
		});

	var stepsContainer = $('#steps-container')
		, upload = $('#upload');

	$('.declare-btn').click(function(){		
		headerBar.trigger('hide', function(){
			stepsContainer.html(showTheWorld);
			upload.animate({top:0}, 300);
		});		
		return false;
	});
	$('.close', upload).click(function(){
		upload.animate({top:-604}, 300, function(){

			headerBar.css({top:-90});

			w.scrollTop()+30 >= hT+hH && headerBar.trigger('show');

		});
		return false;
	});

	gridCon.click(function(){
		parseInt(upload.css('top'))>=0 && $('.close', upload).click();
	});

	$('#goto-img').live('click', function(){

		stepsContainer.append(showYourWill);
		stepsContainer.animate({marginLeft:-1024}, 300, function(){
			$('.step:eq(0)', stepsContainer).remove();
			stepsContainer.css({marginLeft: 0});
		});

	});
	//宣布你的决心
	$('#goto-txt').live('click', function(){

		stepsContainer.append(declareYourWill);
		stepsContainer.animate({marginLeft:-1024}, 300, function(){
			$('.step:eq(0)', stepsContainer).remove();
			stepsContainer.css({marginLeft: 0});
		});

	});

	//upload
	$('#local-button').live('click', function(){
		$('#choose-file').click();
	});

	//detail
	var viewHider = $('#viewHider')	//
		, viewContainer = $('#viewContainer')	//dialog		
		, viewShowcase = $('#viewShowcase')
		, voteCount = $('.vote-count', viewContainer);

	var dialogInfoStr = {
		image:'<div class="viewShowcaseContent" id="viewShowcaseImage">\
					<img src="images/hitfield/51390c21a91528.71918145_large.jpg">\
				</div>'
		, infos:'<div class="viewShowcaseContent" id="viewShowcaseText">\
					<div class="inner"></div>\
				</div>'
	}

	$('.grid-details-btn').live('click', function(){
		var self = $(this)
			, bigimage = self.attr('bigimage')
			, selfParent = self.parents('li')
			, liVoteCount = $('.vote-count', selfParent).text()
			, txtMsg = $('.txt-message', selfParent).html();
		
		var wW = w.width(), wH = w.height(), diw = 678, dih = 612;

		if(bigimage){
			viewShowcase.html(dialogInfoStr.image);
			var viewShowcaseImage = $('#viewShowcaseImage img');	//image
			$("<img src='"+bigimage+"' />").bind("load", function() {
				var o = new Image();
				o.src = bigimage;

				diw = o.width;
				dih = o.height;
				
				viewContainer.css({height: dih, left: (wW - diw)/2, top: (wH - dih)/2});
				viewShowcaseImage.css({width: diw, height: dih});
				viewShowcaseImage.attr('src', bigimage);
				voteCount.text(liVoteCount);

				viewHider.show(500);
				viewContainer.show();
			});
		}else{
			viewShowcase.html(dialogInfoStr.infos);
			$('#viewShowcaseText .inner').html(txtMsg);
			viewContainer.css({left: (wW - diw)/2, top: (wH - dih)/2});

			viewHider.show(500);
			viewContainer.show();
		}
		return false;
	});
	$('.close', viewContainer).live('click', function(){
		viewHider.hide();
		viewContainer.hide();
		return false;
	});
	$('#viewHider').live('click', function(){
		$('.close', viewContainer).click();
	});

	var video = 0;
	function showVideoDiv(div, video){
		div.removeClass('opacity');
		div.eq(video).addClass('opacity');
	}
	function videoEnter(div, divLength){
		showVideoDiv(div, video);
		videoTimer = setTimeout(function(){
			++video;
			video = video > divLength-1 ? 0 : video;
			videoEnter(div, divLength);

		}, 300);
	}

	//video animate
	$('.video-container').live('mouseenter', function(){
		var self = $(this)
			, div = $('div', self)
			, divLength = div.length;
		videoEnter(div, divLength);
	}).live('mouseleave', function(){		
		clearTimeout(videoTimer);
		videoTimer = null;
		showVideoDiv($('div', this), oldVideo);
	});


})(jQuery);


//延时加载