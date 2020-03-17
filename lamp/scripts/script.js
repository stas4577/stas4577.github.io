'use strict'
$(document).ready(function(){
	let active_slide = 1


	function nextSlide () {
		$('.slide').eq(active_slide).addClass('slide_noactiveL')
		$('.slide').eq(active_slide).removeClass('slide_active')
		$('.slide').eq(active_slide+1).addClass('slide_active')
		$('.slide').eq(active_slide+1).removeClass('slide_noactiveR')
		$('.slider_nav_button').eq(active_slide).removeClass('slider_nav_button_active')
		active_slide++
		$('.slider_nav_button').eq(active_slide).addClass('slider_nav_button_active')
		$('.youtube').css('display','none')
		$('#youtube').attr('src','')
		if (active_slide == 2) {
			$('.slide_next').css('display','none')
			$('.slide').eq(0).css('opacity','0')
		}
		if (active_slide == 1) {
			$('.slide_prev').css('display','block')
			$('.slide').eq(2).css('opacity','.4')
		}
	}
	function prevSlide () {
		$('.slide').eq(active_slide).addClass('slide_noactiveR')
		$('.slide').eq(active_slide).removeClass('slide_active')
		$('.slide').eq(active_slide-1).addClass('slide_active')
		$('.slide').eq(active_slide-1).removeClass('slide_noactiveL')
		$('.slider_nav_button').eq(active_slide).removeClass('slider_nav_button_active')
		active_slide--
		$('.slider_nav_button').eq(active_slide).addClass('slider_nav_button_active')
		$('.youtube').css('display','none')
		$('#youtube').attr('src','')
		if (active_slide == 0) {
			$('.slide_prev').css('display','none')
			$('.slide').eq(2).css('opacity','0')
		}
		if (active_slide == 1) {
			$('.slide_next').css('display','block')
			$('.slide').eq(0).css('opacity','.4')
		}
	}
	$('.slide_next').click(nextSlide)
	$('.slide_prev').click(prevSlide)
	let advantages_height = $('.advantages').outerHeight()
	let advantages_width = advantages_height * 0.54
	$('.slide_next').eq(0).height($('.slide').eq(0).outerHeight() + 'px')
	$('.slide_prev').eq(0).height($('.slide').eq(0).outerHeight() + 'px')
	if (advantages_width < $(window).width()) {advantages_width = $(window).width() + 20}
	$('.advantages').eq(0).css('background-size',advantages_width + 'px ' + '100%')
	$('.advantages').eq(0).css('padding-top',advantages_height * 0.08 + 'px')
	$('.advantages').eq(0).css('padding-bottom',advantages_height * 0.08 + 'px')
	$('.advantages_block_head').height($('.advantages_block_head').width())
	$('.advantages_block_head').css('border',$('.advantages_block_head').width() * 0.18 + 'px solid #7AECE7')
	$('.slider_nav_button').click(function () {
		if ($(this).index() == active_slide) {
			return false
		} else if ($(this).index() == 2) {
			$('.slide').eq(0).addClass('slide_noactiveL')
			$('.slide').eq(0).removeClass('slide_active')
			$('.slide').eq(0).removeClass('slide_noactiveR')
			$('.slide').eq(1).addClass('slide_noactiveL')
			$('.slide').eq(1).removeClass('slide_active')
			$('.slide').eq(1).removeClass('slide_noactiveR')
			$('.slider_nav_button').eq(active_slide).removeClass('slider_nav_button_active')
			active_slide = 2
			$('.slide').eq(active_slide).addClass('slide_active')
			$('.slide').eq(active_slide).removeClass('slide_noactiveR')
			$('.slide_next').css('display','none')
			$('.slide_prev').css('display','block')
			$('.slide').eq(0).css('opacity','0')
			$('.slide').eq(1).css('opacity','.4')
			$('.slider_nav_button').eq(active_slide).addClass('slider_nav_button_active')
			$('.youtube').css('display','none')
			$('#youtube').attr('src','')

		}
		else if ($(this).index() == 0) {
			$('.slide').eq(2).addClass('slide_noactiveR')
			$('.slide').eq(2).removeClass('slide_active')
			$('.slide').eq(1).addClass('slide_noactiveR')
			$('.slide').eq(1).removeClass('slide_active')
			$('.slider_nav_button').eq(active_slide).removeClass('slider_nav_button_active')
			active_slide = 0
			$('.slide').eq(active_slide).addClass('slide_active')
			$('.slide').eq(active_slide).removeClass('slide_noactiveL')
			$('.slide_prev').css('display','none')
			$('.slide_next').css('display','block')
			$('.slide').eq(2).css('opacity','0')
			$('.slide').eq(1).css('opacity','.4')
			$('.slider_nav_button').eq(active_slide).addClass('slider_nav_button_active')
			$('.youtube').css('display','none')
			$('#youtube').attr('src','')
		}
		else if ($(this).index() == 1) {
			$('.slide').eq(2).addClass('slide_noactiveR')
			$('.slide').eq(2).removeClass('slide_active')
			$('.slide').eq(0).addClass('slide_noactiveL')
			$('.slide').eq(0).removeClass('slide_active')
			$('.slider_nav_button').eq(active_slide).removeClass('slider_nav_button_active')
			active_slide = 1
			$('.slide').eq(active_slide).addClass('slide_active')
			$('.slide').eq(active_slide).removeClass('slide_noactiveL')
			$('.slide').eq(active_slide).removeClass('slide_noactiveR')
			$('.slide_prev').css('display','block')
			$('.slide_next').css('display','block')
			$('.slide').eq(2).css('opacity','.4')
			$('.slide').eq(0).css('opacity','.4')
			$('.slider_nav_button').eq(active_slide).addClass('slider_nav_button_active')
		}	
	})

	let width = $('.slide_active').eq(0).outerWidth()
	let height = $('.slide_active').eq(0).outerHeight()
	$(window).resize(function () {
		width = $('.slide_active').eq(0).outerWidth()
		height = $('.slide_active').eq(0).outerHeight()
	})
	$('.play').click(function () {
		$('#youtube').attr('width',width)
		$('#youtube').attr('height',height)
		$('.youtube').css('display','block')
		$('#youtube').attr('src','https://www.youtube.com/embed/AnDQDwQKJ64?autoplay=1&loop=1&&playlist=Video_ID')
	})

	



	
})