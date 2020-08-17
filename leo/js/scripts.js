'use strict'
$(document).ready(function () {
	let active_page = 0
	let height = $(window).height()
	let menu_first_height = $('.menu').eq(0).height()
	$(document).scrollTop(1)
	let active_scroll = $(document).scrollTop()
	let pause = false
	$('.decor').mousedown(function (e) {
		e.preventDefault()
	})
	let active_reward = 0
	let slider_length = $('.reward').length
	function nextReward () {
		let count = 0
		for (let i = active_reward; count < slider_length;i = (i + 1) % 4) {
			let src = '#reward_' + count
			count++
			active_reward = (active_reward + 1) % 4
			$(src).attr('src','img/reward_' + active_reward + '.png')
		}
		active_reward = (active_reward + 1) % 4
	}

	function prevReward () {
		nextReward()
		nextReward()
		nextReward()
	}
	$('#right_arrow').on('click',nextReward)
	$('#right_arrow').on('click',() => {
		clearInterval(reward_interval)
	})
	$('#left_arrow').on('click',prevReward)
	$('#left_arrow').on('click',() => {
		clearInterval(reward_interval)
	})


	let reward_interval = setInterval (nextReward,4000)





	if ($(window).height()>768) {
		let anim_start = $('#start').offset()['top'] - $(window).height()
		let anim_end = $('#end').offset()['top'] + $(window).height()
		$(window).on('scroll',function () {
			if ($(window).scrollTop() <= anim_end) {
				if ($(window).scrollTop() >= anim_start) {
					$('.anim_bottom').css('display','block')
				} else {
					$('.anim_bottom').css('display','none')
				}
			}  else {
					$('.anim_bottom').css('display','none')
				}
		})
	}


	setTimeout(() => {
	let scroll_top = $(window).scrollTop()
		$(window).on('scroll',function () {
			if (300 < $(window).scrollTop()) {
				$('.menu').addClass('menu_top')
			} else if ($(window).scrollTop() <= 300) {
				$('.menu').removeClass('menu_top')
			}
			scroll_top = $(window).scrollTop()
		})
		if ($(window).scrollTop() >= 250) {
			$('.menu').addClass('menu_top')
		}

	},200)
	setTimeout(function() {
		$('.menu').css('transition','bottom .6s, transform .6s, height .6s')
		$('#logo').css('transition','all .5s')
	}, 300);

	$('.item__head').on('click',function () {
		if ($(this).parent().hasClass('item_active')) {
			$(this).parent().removeClass('item_active')
		} else {
			$('.item__head').parent().removeClass('item_active')
			$(this).parent().addClass('item_active')
		}
	})




	//Слайдер с отзывами
	let active_feed = 1
	function feedSlider () {
		active_feed++
		active_feed = active_feed % 11
		if (active_feed == 0) {
			active_feed = 1
		}
		$('.img__inner').attr('src','img/cleint' + active_feed + '.jpg')
	}
	let feed_interval = setInterval (feedSlider,4000)

})