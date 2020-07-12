'use strict'


$(document).ready(function () {
	
	$('.burger__click').on('click',function () {
		$('.burger__menu').toggleClass('burger__active')
		$('.burger__click').toggleClass('burger__close')
	})
	$('.burger__link').on('click',function () {
		let active_link = $(this).data('index')
		$('.burger__link__more').removeClass('burger__link__more__active')
		$('.burger__link__more').eq(active_link).addClass('burger__link__more__active')

	})

})