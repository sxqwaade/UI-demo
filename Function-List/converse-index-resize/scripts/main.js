var nav_controller = null;
var addTitle = $("#header_edge .nav li.add-title").eq(0).length == 0
	, className = addTitle ? 'on' : 'add-on';
$("#header_edge .nav ul li").hover(function(){
	var el = $(this);
	if(el.find('.nav_cont').length){
		$('#header_edge .nav_cont').hide();
		el.addClass(className).find('.nav_cont').show();
	}
},function(){
	$(this).removeClass(className).find('.nav_cont').hide();
});

$(".skulist_index ul li")
	.mouseover(function(){
		$(this).addClass("on");
	})
	.mouseout(function(){
		$(this).removeClass("on");
	});


$('#banner').faiScroll();

$('a').click(function(){
	return false;
});