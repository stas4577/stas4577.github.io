'use strict'

$(document).ready (function () {
	let c = 0
	let slider_work = false
	let left = 0
	let right = 5
	let transition = $('.slide').eq(0).css('transition-duration')
	transition = transition.substr(0,transition.length - 1)
	function goLeft () {
		if (slider_work) return 0
		else {
			slider_work = true

			left = (left % 6) + 1
			right = (right % 6) +1

			$('.slide_left').eq(0).addClass('slide_noactiveL')
			$('.slide_left').eq(0).removeClass('slide_left')

			$('.slide_center').eq(0).addClass('slide_left')
			$('.slide_center').eq(0).removeClass('slide_center')

			$('.slide_right').eq(0).addClass('slide_center')
			$('.slide_right').eq(0).removeClass('slide_right')

			$('.slide_noactiveR').eq(0).addClass('slide_right')
			$('.slide_noactiveR').eq(0).removeClass('slide_noactiveR')
			setTimeout (function () {
				slider_work = false
				$('.slide_noactiveL').eq(0).detach()
				$('.slider').append('<div class="slide slide_' + left + ' slide_noactiveR"></div>')
			},transition*1000)
		}

	}
	function goRight () {
		if (slider_work) return 0
		else {
			slider_work = true

			left = (left % 6) - 1
			if (left == 0 || left == -1) left = 6
			right = (right % 6) - 1
			if (right == 0 || right == -1) right = 6

			$('.slide_right').eq(0).addClass('slide_noactiveR')
			$('.slide_right').eq(0).removeClass('slide_right')

			$('.slide_center').eq(0).addClass('slide_right')
			$('.slide_center').eq(0).removeClass('slide_center')

			$('.slide_left').eq(0).addClass('slide_center')
			$('.slide_left').eq(0).removeClass('slide_left')

			$('.slide_noactiveL').eq(0).addClass('slide_left')
			$('.slide_noactiveL').eq(0).removeClass('slide_noactiveL')

			setTimeout (function () {
				slider_work = false
				$('.slide_noactiveR').eq(1).detach()
				$('.slider').append('<div class="slide slide_' + right + ' slide_noactiveL"></div>')
			},transition*1000)
		}

	}
	$('.slider_left').click(goLeft)
	$('.slider_right').click(goRight)
	
	
})



