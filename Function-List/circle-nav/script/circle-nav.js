
$(document).ready(function(){
	$('.votetionimg').click(function() {
		$(this).children('span').toggleClass('close');
		$('.vote1').removeClass('end1').removeClass('end1-animation');
		$('.vote2').removeClass('end2').removeClass('end2-animation');
		$('.vote3').removeClass('end3').removeClass('end3-animation');
		$('.vote4').removeClass('end4').removeClass('end4-animation');
		$('.vote5').removeClass('end5').removeClass('end5-animation');
		$('.vote1').removeClass('start1').removeClass('start1-animation');
		$('.vote2').removeClass('start2').removeClass('start2-animation');
		$('.vote3').removeClass('start3').removeClass('start3-animation');
		$('.vote4').removeClass('start4').removeClass('start4-animation');
		$('.vote5').removeClass('start5').removeClass('start5-animation');
		if ($(this).css("opacity") == "0.5")
		 {
			$(this).animate({
				opacity: 1.0
			});
			$('.vote1').addClass('end1').toggleClass('end1-animation');
			$('.vote2').toggleClass('end2').toggleClass('end2-animation');
			$('.vote3').toggleClass('end3').toggleClass('end3-animation');
			$('.vote4').toggleClass('end4').toggleClass('end4-animation');
			$('.vote5').toggleClass('end5').toggleClass('end5-animation');
			setVotetion(1);
		}
		 else
		 {
			$(this).animate({
				opacity: 0.5
			});
			$('.vote1').toggleClass('start1').toggleClass('start1-animation');
			$('.vote2').toggleClass('start1').toggleClass('start2-animation');
			$('.vote3').toggleClass('start1').toggleClass('start3-animation');
			$('.vote4').toggleClass('start1').toggleClass('start4-animation');
			$('.vote5').toggleClass('start1').toggleClass('start5-animation');
			setTimeout("setVotetion(0)", 500);
		}
	});
})
function setVotetion(i) {
	if (i == 0)
	 $('.votetion').css('width', '40px').css('height', '40px');
	else
	 $('.votetion').css('width', '200px').css('height', '169px');
	$(".votetion").css("bottom", "5px");
}
