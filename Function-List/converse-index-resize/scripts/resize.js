(function($){
		
	$(function(){
		
		var vendor = (/webkit/i).test(navigator.appVersion) ? 'webkit' :(/firefox/i).test(navigator.userAgent) ? 'Moz' :(/trident/i).test(navigator.userAgent) ? 'ms' :'opera' in window ? 'O' : '';
		// Browser capabilities
		isAndroid = (/android/gi).test(navigator.appVersion);
		isIDevice = (/iphone|ipad/gi).test(navigator.appVersion);
		isPlaybook = (/playbook/gi).test(navigator.appVersion);
		isTouchPad = (/hp-tablet/gi).test(navigator.appVersion);

		has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix();
		hasTouch = 'ontouchstart' in window && !isTouchPad;
		hasTransform = vendor + 'Transform' in document.documentElement.style;
		hasTransitionEnd = isIDevice || isPlaybook;
		RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize';
		START_EV = hasTouch ? 'touchstart' : 'mousedown';
		MOVE_EV = hasTouch ? 'touchmove' : 'mousemove';
		END_EV = hasTouch ? 'touchend' : 'mouseup';
		CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup';
		WHEEL_EV = vendor == 'Moz' ? 'DOMMouseScroll' : 'mousewheel';
		
		
		$('#scroll_loader').hide();
		$('#scroll_wrap').show();		
		
		var $window = $(window);
		
		//index blog
		var $ul = $('.ulcont')
			, $blog_imgbox = $('.blog_imgbox', $ul)
			, blog_imgbox_width = $blog_imgbox.width()
			, blog_imgbox_height = $blog_imgbox.height()
			, $blog_img = $('img', $blog_imgbox);
		//tout
		var $skuList = $('.skulist_index')
			, $li = $('li', $skuList);
		//kv
		var $scroll_wrap = $('#scroll_wrap')
			, $scroll_li = $('li', $scroll_wrap)
			, liHeight = $scroll_li.height();
		var $cate_kv = $('#cate_kv')
			, cate_kv_height = $cate_kv.height();
		
		//my account
		var my_side = $('#my_side')
			, my_size_height = my_side.height();
		
		$.setCss = function(ratio){
			$blog_imgbox.css({height: blog_imgbox_height*ratio});
			$blog_img.css({width: blog_imgbox_width*ratio});
		}
		
		
		
		function fix_nav(){
			var sideH = $('#my_side').outerHeight(true);
			var headH = $('#header_edge').height();
			var footerH = $('#footer_edge').height();
			var contH = $('.my_main').outerHeight(true);
			var winH = $(window).height();
			var maxH = winH - headH - footerH;
			$('#my_side').height(Math.max(sideH,contH,maxH)-56);
		}
		
		$window.resize(function(){
			var self = $(this)
				, sWidth = self.width()
				, ratio = sWidth/1003
				, $scroll_width = $scroll_wrap.width()
				, $scroll_li = $('li', $scroll_wrap);
			self.scroll();
			fix_nav();
			if(sWidth<1003){
				
				$('#header_edge').addClass('resize');
				$('.nav ul:first').css('marginLeft', 0);
				$('.nav_mt15').css('marginTop', 0);
				//index blog
				$('.blog_edge').addClass('blogResize');
				$('.blog_topall').hide();
				$('.ulcont .tit').show();
				$.setCss(ratio);
				var blogResize = $('.blogResize'), blogWidth = blogResize.width();
				if(blogWidth<=490){
					$('ul.ulcont li', blogResize).css({width : blogWidth<=245 ? '99%' : '49%'});
				}
				//tout
				$('.content').addClass('toutResize');
				
				if(sWidth<800){
					$li.width('46%');
					if(sWidth<=320 && !hasTouch){
						$li.width('98%');
					}
				}else{
					$li.width('32.8%');
				}
				//kv
				$('.banner_index').addClass('kvResize');
				$scroll_li.css({width: sWidth, height:ratio*liHeight});
				$cate_kv.css({height:ratio*cate_kv_height});
				//foot
				$('#footer_edge').addClass('footResize');
				
				//列表页
				$('.content2').addClass('con2Resize');
				
				//列表导航高度还原
				$('#simTestContent2').css({height:'auto'});
				$('#simScrollTest2').hide();
				//搜索页
				$('.search_blog').addClass('searchResize');
				//关于我们
				$('.ui-container').addClass('ui-container-resize');
				//购物车
				$('.cart_content').addClass('cart_content_resize');
				//结算
				$('.delivery_head').addClass('delivery_head_resize');
				//店铺地址
				$('.store_locator_wrap').addClass('store_locator_wrap_resize');
				//详情页
				$('.detail_bg_wrap').addClass('detail_bg_wrap_resize');
				//错误页面
				$('#errorpage').addClass('errorResize');
				//
				$('#InviteWindow').hide();
				//店铺分布
				if(hasTouch){
					$('#map_wrap').height($('#map_wrap').width()/1.3);
				}
				
				//my account
				my_side.css({height:'auto'});
				
				$('.con2Resize:eq(0)').css({height:'auto'});
				setTimeout(function(){						
					$('.con2Resize:eq(0)').height($('.con2Resize:eq(0)').height());
				}, 0);
				//
				$('#seamless').addClass('seamlessResize');
				//登录，注册，my account
				$('.my_account_bg').addClass('loginResize');
				$('#registerDialog').removeClass('loginResize');				
				$('.resize .nav').hide();
			}else{
				$('.resize .nav').show();
				$('#header_edge').removeClass('resize');
				$('.nav ul:first').css('marginLeft', 276);
				$('.nav_mt15').css('marginTop', 10);
				//index blog
				$('.blog_edge').removeClass('blogResize');
				$('.blog_topall').show();
				$('.ulcont .tit').hide();
				$.setCss(1);			
				
				//tout
				$('.content').removeClass('toutResize');
				$li.width('32.8%');
				//kv
				$('.banner_index').removeClass('kvResize');
				$scroll_li.css({width: 980, height:liHeight});
				$cate_kv.css({height:cate_kv_height});
				//foot
				$('#footer_edge').removeClass('footResize');
				//列表页
				$('.content2').removeClass('con2Resize');
				//搜索页
				$('.search_blog').removeClass('searchResize');
				//关于我们
				$('.ui-container').removeClass('ui-container-resize');
				//购物车
				$('.cart_content').removeClass('cart_content_resize');
				//结算
				$('.delivery_head').removeClass('delivery_head_resize');
				//店铺地址
				$('.store_locator_wrap').removeClass('store_locator_wrap_resize');
				//详情页
				$('.detail_bg_wrap').removeClass('detail_bg_wrap_resize');
				//错误页面
				$('#errorpage').removeClass('errorResize');
				//
				$('#InviteWindow').show();
				//my account
				//my_side.css({height:my_size_height});
				
				//搜索页scroll问题解决
				setTimeout(function(){
					$('.content2:eq(0)').css({height:'auto'});
				}, 0)
				//登录
				$('.my_account_bg').removeClass('loginResize');
				
				
				$window.trigger('init_fixed');
			}
			//index blog
			var blog_edge = $('.blog_edge'), blog_edge_width = blog_edge.width();
			if(blog_edge_width>=245){
				$('ul.ulcont li', blog_edge).css({width : '99%'});
				$('ul.ulcont li', blog_edge).css({width : blog_edge_width<=490?'49%':'24%'});
			}
			//index blog end
			
			
		}).resize();
		
		$window.scroll(function(){
			$window.trigger('cusResize');
			//$window.resize();
			my_side.css({height:'auto'});
			if($(this).width()>1003){
				//my_side.css({height:my_size_height});
				fix_nav();
			}
			
		}).scroll();
		
		//显示导航按钮事件
		$('.show-navigation').click(function(){
			$('.resize .nav').is(':visible')?$('.resize .nav').hide():$('.resize .nav').show();
		});
		function hasTouchFn(){
			//首页导航
			var header_li = $("#header_edge .nav ul li")
				, allnav_cont = $('.nav_cont', header_li);
			header_li.unbind('hover');
			header_li.click(function(){
				var self = $(this)
					, nav_cont = $('.nav_cont', self);
				if(nav_cont.length>0){
					if(!nav_cont.is(':visible')){
						allnav_cont.hide();
						nav_cont.show();
						return false;
					}
				}
			});
			//首页购物车
			$('.header_my .header_cart_all').unbind('hover');
		}
		hasTouch && hasTouchFn();
		
	});
		
})(jQuery);