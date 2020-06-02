


$(document).ready(function () {
	function searchOpen () {

		$('.header_icon__search').addClass('search_active')
		$('.search_input').addClass('search_input_active')
	}
	function searchClose () {

		$('.header_icon__search').removeClass('search_active')
		$('.search_input').removeClass('search_input_active')
	}

	$('.search_click').on('click',function () {
		searchOpen()
	})
	$(document).on('click',function (e) {
		if (!e.target.classList.contains('search_click')) {
			searchClose()
		}
		if (!e.target.classList.contains('bur_click')) {
			$('.header_open').addClass('header_open_noactive')

		}
	})
	let active_slide = 0
	
	$('.main_slider_img').width($('.main_left').width())
	$(window).on('resize',function () {
		$('.main_slider_img').width($('.main_left').width())
	})
	$('.header_bur').on('click',function () {
		$('.header_open').toggleClass('header_open_noactive')
	})
	
	

})