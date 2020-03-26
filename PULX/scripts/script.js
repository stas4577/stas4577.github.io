'use strict'
$(document).ready(function(){
	let transition = ($('.svg').css('transition-duration'))
	transition = +transition.slice(0,3).replace(/[A-Za-zА-Яа-яЁё]/g, "") * 1000
	setTimeout(function () {
		$('.svg').height('25%')
		$('.svg').css('left','50%')
		setTimeout(function () {
			$('.svg').css('position','static')
			$('.svg').css('transform','none')
			setTimeout(function () {
				$('.buttons').css('display','flex')
				$('.buttons').width($('.svg').width() + $('.svg').width() / 4)
				$('.buttons').height('25%')
				$('.buttons').css('margin-top','2%')
				$('.main_button').eq(1).css('transform','scale(1)')
				setTimeout(function () {
					$('.main_button').eq(0).css('transform','scale(1)')
				},400)
				$('#buy_white').css('transform','rotate(360deg)')
				setTimeout(function() {
					$('#buy_white').css('transform','rotate(0deg)')
				},8000)
				let interval = setInterval (function () {
					$('#buy_white').css('transform','rotate(360deg)')
					setTimeout(function () {
						$('#buy_white').css('transform','rotate(0deg)')
					},8000)
				},16000)
			},500)
		},transition)
	},500)

	
})