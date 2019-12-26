'use sctrict'
$(document).ready(function () {
	function arrowTop () {
		$('.arrow').css('transform','translateY(-50px)')
	}
	function arrowBottom () {
		$('.arrow').css('transform','translateY(0px)')
	}
	function arrowMove () {
		arrowTop()
		setTimeout(arrowBottom,3000)
	}
	arrowMove()
	let interval = setInterval (arrowMove,6000)

	let current_slide = 0
	$('.button_nav').click(function() { 
		if ( current_slide == $(this).index() )  {
			return false
		} else {
			$('.slide').eq($(this).index()).addClass ('slide_active')
			$('.slide').eq(current_slide).removeClass('slide_active')
			$(this).addClass ('button_nav_active')
			$('.button_nav').eq(current_slide).removeClass('button_nav_active')
			current_slide = $(this).index()
		}
	})
	
})