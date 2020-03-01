'use sctrict'
$(document).ready(function () {
	let check = 0
	let slider_active,menu_bur = false
	let team_active = 2
	let menu_active = 1
	$('.menu').eq(0).css('height','250px')
	$('.menu_text').eq(0).css('opacity','1')

	$('.menu').click(function () {
		if (menu_active == $(this).index()) {
			$(this).css('height','50px')
			$('.menu_text').eq(menu_active-1).css('opacity','0')
			menu_active = 0
		} else {
			$('.menu').eq(menu_active-1).css('height','50px')
			$('.menu_text').eq(menu_active-1).css('opacity','0')
			menu_active = $(this).index()
			$(this).css('height','250px')
			$('.menu_text').eq(menu_active-1).css('opacity','1')
		}
	})


	

	$('.team_img').click(function() {
		if ($(this).hasClass('team_active')) {
			return false
		} else if ($(this).data('name') == 3) {
			$('.team_img').eq(team_active-1).removeClass('team_active')
			$('.team_img').eq(team_active-1).addClass('team_noactive')
			$('.team_about_wrap').eq(team_active-1).addClass('team_about_noactive')
			$('.team_about_wrap').eq(2).removeClass('team_about_noactive')
			team_active = 3
			$(this).removeClass('team_noactive')
			$(this).addClass('team_active')
			if ($(window).width() < 550) {
				$('.team_photo').eq(0).css('transform','translateX(-' + 145 * $('html').css('font-size').replace('px','')/16 + 'px)')
			} else if ($(window).width() < 768) {
				$('.team_photo').eq(0).css('transform','translateX(-' + 206 * $('html').css('font-size').replace('px','')/16 + 'px)')
			} else {
				$('.team_photo').eq(0).css('transform','translateX(-' + 225 * $('html').css('font-size').replace('px','')/16 + 'px)')
			}
		} else if ($(this).data('name') == 2) {
			$('.team_img').eq(team_active-1).removeClass('team_active')
			$('.team_img').eq(team_active-1).addClass('team_noactive')
			$('.team_about_wrap').eq(team_active-1).addClass('team_about_noactive')
			$('.team_about_wrap').eq(1).removeClass('team_about_noactive')
			team_active = 2
			$(this).removeClass('team_noactive')
			$(this).addClass('team_active')
			$('.team_photo').eq(0).css('transform','translateX(0px)')
		} else if ($(this).data('name') == 1) {
			$('.team_img').eq(team_active-1).removeClass('team_active')
			$('.team_img').eq(team_active-1).addClass('team_noactive')
			$('.team_about_wrap').eq(team_active-1).addClass('team_about_noactive')
			$('.team_about_wrap').eq(0).removeClass('team_about_noactive')
			team_active = 1
			$(this).removeClass('team_noactive')
			$(this).addClass('team_active')
			if ($(window).width() < 550) {
				$('.team_photo').eq(0).css('transform','translateX(' + 145 * $('html').css('font-size').replace('px','')/16 + 'px)')
			} else if ($(window).width() < 768) {
				$('.team_photo').eq(0).css('transform','translateX(' + 206 * $('html').css('font-size').replace('px','')/16 + 'px)')
			} else {
				$('.team_photo').eq(0).css('transform','translateX(' + 225 * $('html').css('font-size').replace('px','')/16 + 'px)')
			}
		}
	})
	
	$('#check').click(function() {
		if (check == 0) {
			$('#check_text').html('&#10003')
			$('#form_check').val('1')
			check = 1
		} else {
			$('#check_text').html('')
			$('#form_check').val('0')
			check = 0
		}
		
	})
	$('input[name = Phone]').inputmask("+ 9 999 999 99 99");
	$('.submit').click(function() {
		if ($('input[name = Phone]').val() == false) {
			alert ('Введите номер телефона')
			return false
		}
	})
	if  ($(window).width() < 450) {
			$('#youtube').width($(window).width() * 0.9)
		}
	$(window).resize(function() {
		if ($(this).width() < 450) {
			$('#youtube').width($(this).width() * 0.9)
		}
	})

	$('.slider_down').click(function () {
		if (slider_active){
			return false
		} else {
			slider_active = true
			$('.comment_top').eq(0).addClass('comment_upper')
			$('.comment_top').eq(0).removeClass('comment_top')
			$('.comment_bottom').eq(0).addClass('comment_top')
			$('.comment_bottom').eq(0).removeClass('comment_bottom')
			$('.comment_under').eq(0).addClass('comment_bottom')
			$('.comment_under').eq(0).removeClass('comment_under')
			setTimeout(function () {
				$('.comments_slider_block').append($('.comment_upper').eq(0))
				$('.comment_upper').eq(1).addClass('comment_under')
				$('.comment_upper').eq(1).removeClass('comment_upper')
				slider_active = false	
		},800)
		}

	})


	$('.slider_up').click(function () {
		if (slider_active){
			return false
		} else {
			slider_active = true
			$('.comment_bottom').eq(0).addClass('comment_under')
			$('.comment_bottom').eq(0).removeClass('comment_bottom')
			$('.comment_top').eq(0).addClass('comment_bottom')
			$('.comment_top').eq(0).removeClass('comment_top')
			$('.comment_upper').eq(0).addClass('comment_top')
			$('.comment_upper').eq(0).removeClass('comment_upper')
			setTimeout(function () {
				$('.comments_slider_block').prepend($('.comment_under').eq(1))
				$('.comment_under').eq(0).addClass('comment_upper')
				$('.comment_under').eq(0).removeClass('comment_under')
				slider_active = false	
		},800)
		}

	})
	$('.menu_bur').eq(0).click(function() {
		$('.line').addClass('line_active')
		$('.menu_bur_back').css('opacity','1')
		$('.menu_bur_back').css('transform','translate(0)')
		$('.black').css('display','block')
		$('.menu_bur').eq(0).css('opacity','0')
		$('body').css('overflow-y','hidden')
	})
	$('.menu_bur').eq(1).click(function() {
		$('.line').removeClass('line_active')
		$('.menu_bur_back').css('opacity','0')
		$('.menu_bur_back').css('transform','translate(100%)')
		$('.black').css('display','none')
		$('.menu_bur').eq(0).css('opacity','1')
		$('body').css('overflow-y','scroll')
	})
	$('.menu_bur_nav_link').click(function() {
		$('.line').removeClass('line_active')
		$('.menu_bur_back').css('opacity','0')
		$('.menu_bur_back').css('transform','translate(100%)')
		$('.black').css('display','none')
		$('.menu_bur').eq(0).css('opacity','1')
		$('body').css('overflow-y','scroll')
	})
	

	
	
})





