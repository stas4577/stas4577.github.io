'use sctrict'
$(document).ready(function () {
	let menu_active,check = 0
	let team_active = 2
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
	alert ('123')
	$('.menu').tap(function () {
		alert ('123')
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
	$('.submit').click(function(e) {
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

	if ($(window).width() < 610) {
		$('.nav').remove()
		$('.logo').append('<div class="nav"> <a href="#" class="nav_link">Home</a><a href="#" class="nav_link">Servise</a><a href="#" class="nav_link">Extension</a><a href="#" class="nav_link">Pricing</a><a href="#" class="nav_link">Help</a></div>')

	}
	
})





