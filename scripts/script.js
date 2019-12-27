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

	

	let galery_slide = 0
	$('.galery_slide_left').click(function () {
		if (galery_slide == 0) {
			$('.galery_slide').eq(galery_slide).removeClass('galery_slide_active')
			galery_slide = 9
			$('.galery_slide').eq(9).addClass('galery_slide_active')
		} else {
			$('.galery_slide').eq(galery_slide).removeClass('galery_slide_active')
			galery_slide--
			$('.galery_slide').eq(galery_slide).addClass('galery_slide_active')
		}
	})
	$('.galery_slide_right').click(function () {
		if (galery_slide == 9) {
			$('.galery_slide').eq(galery_slide).removeClass('galery_slide_active')
			galery_slide = 0
			$('.galery_slide').eq(0).addClass('galery_slide_active')
		} else {
			$('.galery_slide').eq(galery_slide).removeClass('galery_slide_active')
			galery_slide++
			$('.galery_slide').eq(galery_slide).addClass('galery_slide_active')
		}
	})
	$('.smile_button').click(function () {
		$('.black').css('display','flex')
	})
	$('.close').click(function () {
		$('.black').css('display','none')
	})




	
})