'use strict'
$(document).ready(function(){
	setTimeout (function () {
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
				$('#studio').css('opacity','1')
				$('#svg_white').height ($('.svg').height())
				$('#svg_white').width ($('.svg').width())
				setTimeout(function () {
					$('.main_button').eq(0).css('transform','scale(1)')
				},400)
				setTimeout(function() {
					$('#buy_BG').height($('#buy').height())
					$('#buy_BG').width($('#buy').width())
					$('#buy_BG').offset(
						{
							left:$('#buy').offset()['left'],
							top:$('#buy').offset()['top']
						}
					)
					$('#svg_white').offset(
						{
							left:$('.svg').offset()['left'],
							top:$('.svg').offset()['top']
						}
					)
				},900)
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
	function buy() {
		$('#buy').css('transform','scale(0.9)')
		$('#buy_BG').css('transition','all 1.6s,transform .3s,border-radius 2.4s')
		$('#buy_BG').css('transform','scale(0.9)')
		$('#buy_BG').off()
		$('.buttons').css('transition','opacity .2s;')
		setTimeout(function () {
			$('.buttons').css('opacity','0')
			$('#buy').css('transform','scale(1)')
			$('#buy_BG').height('104vh')
			$('#buy_BG').width('104vw')
			$('#buy_BG').css('transform','scale(1)')
			$('#buy_BG').css('border-radius','0')
			$('#buy_BG').offset({left:0, top:0})
			$('#buy_BG').css('opacity','1')
			$('.svg').css('transition','none')
			$('.main_button').css('transition','all .6s linear, left 0s, top 0s, width 0s, height 0s, margin 0s')
			$('.main_button').width($('.main_button').width())
			$('.main_button').height($('.main_button').height())
			$('.main_button').eq(0).css('left',$('.main_button').eq(0).offset()['left'])
			$('.main_button').eq(1).css('left',$('.main_button').eq(1).offset()['left'])
			$('.main_button').eq(0).css('top',$('.main_button').eq(0).offset()['top'])
			$('.main_button').eq(1).css('top',$('.main_button').eq(1).offset()['top'])
			$('.main_button').css('margin','0')
			$('#buy').css('margin-left','-4px')
			$('#buy').css('margin-top','-2px')
			$('#studio').css('opacity','0')
			$('.main_button').css('position','absolute')
			$('.svg').css('left',$('.svg').offset()['left'])
			$('.svg').css('top',$('.svg').offset()['top'])
			$('.svg').css('position','absolute')
			$('#buy_BG').css('cursor','default')
			setTimeout(function() {
				$('.svg_move').css('transition','top 1s, opacity 1s')
				$('#svg_white').css('opacity','1')
				$('.svg_move').css('left','50%')
				$('.svg_move').css('transform','translateX(-50%)')
				setTimeout (function () {
					$('.svg_move').css('transition','top 1s, opacity 1s, transform 1s')
					$('.svg_move').css('transform','translateX(-50%) scale(0.5)')
				},100)
				$('.svg').css('opacity','0')
				$('.svg_move').css('top','0%')
				$('.buy_open').css('top','25%')
				$('.buy_open').css('opacity','1')
				if ($('.buy_open').css('top') < $('#svg_white').offset()['top'] + $('#svg_white').height() + 60) {
					$('.buy_open').css('top',$('#svg_white').offset()['top'] + $('#svg_white').height() / $(window).height() * 100 + 15 + '%' )
				}

			},100)

		},300)
	}
	$('#buy_BG').on('click',buy)
},1500)
})