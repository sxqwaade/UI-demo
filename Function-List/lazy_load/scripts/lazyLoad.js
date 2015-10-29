(function($){
			$.fn.lazyLoad = function(config){
				var self = $(this)
					, w = $(window)
					, run  = function(src, dw, dh){
						var arg = arguments.length;
						w.bind('scroll', function(){
							var wh = w.height()
								, sh = w.scrollTop()+wh;

							self.each(function(i, n){
								var img = $(n)
									, ip = defaultConfig.parents ? img.parents(defaultConfig.parents) : img.parent()
									, it = ip.offset().top
									, ih = ip.height()
									, iw = ip.width();

								if ((it+ih <= sh && it+ih>=sh-wh) || (it <= sh && it >= sh-wh)) {
									if(arg == 3 && !img.attr('src')){
										var ml = (iw - dw)/2
											, mt = (ih - dh)/2;
										img.css({width:dw, height:dh, marginLeft:ml, marginTop:mt}).attr('src', src);
									}
				                    var lazySrc = img.attr(defaultConfig.attr);
				                    if (!lazySrc) return;
				                    $("<img src='"+lazySrc+"' />")
					                    .bind("load", function() {
											img.css({width:'100%', height:'100%', marginLeft:0, marginTop:0, opacity:0})
					                        		.attr('src', lazySrc)
					                        		.removeAttr(defaultConfig.attr)
					                        		.animate({opacity: 1}, defaultConfig.timeout);
					                    });
				                }
							});
						}).resize(function(){ $(this).scroll(); }).trigger('scroll');
					}
					, defaultConfig = {
						attr:'data-original'	//默认属性名，存图片实际路径
						, defaultImage:null		//默认图片，可不传
						, parents:null			//img父级元素，可不传
						, timeout:200			//延时显示，渐隐渐现效果
						//参数暂时没用到，待完善
						, events:'scroll'
					};
				$.extend(defaultConfig, config);

				var di = defaultConfig.defaultImage
					, dih = 0
					, diw = 0;

				if(di){
					$("<img src='"+di+"' />").bind("load", function() {
						var o = new Image();
						o.src = di;
						diw = o.width;
						dih = o.height;
						run(di, diw, dih);
					});
				}else{
					run();
				}
			}
		})(jQuery);