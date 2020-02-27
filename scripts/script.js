'use strict'
$(document).ready(function(){
	let x,y
	let height = $(window).height()
	let width = $(window).width()
	let button_active = false
	let disable_click = false
	$('.menu_noactive').css('display','block')
	let button_height = $('.menu_button').eq(0).height() + 'px'
	$('.menu_noactive').css('display','none')
	let button_height_1 = $('.menu_button').eq(0).height() + 'px'
	$('.main').mousemove(function (e) {
		x = e.pageX/width * 30 + 'px'
		y = e.pageY/height * 30 + 'px'
		$('.meat').css('background-position',x + ' ' + y)
	})
	$('.menu_noactive_border').css('width',$('.header_button').eq(3).width() * 0.6 + 'px')
	$('.menu_main_border').css('width',$('.header_button').eq(3).width() * 0.8 + 'px')
	$('.menu_button').click(function () {
		if (disable_click == true) {
			return false
		} else {
		disable_click = true
		if (button_active == false) {
			button_active = true
			$('.menu_main_border').css('opacity','1')
			$('.menu_button').eq(0).height($('.menu_button').eq(0).height() + 'px')
			$('.menu_noactive').css('display','flex')
			setTimeout (function () {
				$('.menu_noactive').css('opacity','1')
			},1)
			$('.menu_button').eq(0).height(button_height)
		} else {
			button_active = false
			$('.menu_main_border').css('opacity','0')
			$('.menu_button').eq(0).height($('.menu_button').eq(0).height() + 'px')
			setTimeout (function () {
				$('.menu_noactive').css('display','none')
			},400)
			setTimeout (function () {
				$('.menu_noactive').css('opacity','0')
			},1)
			$('.menu_button').eq(0).height(button_height_1)
		}
	setTimeout (function () {disable_click = false},400)
	}

		
	})

	



	
})