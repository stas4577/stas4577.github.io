
$(document).ready(function () {
	// Паралакс для телефона
	$('html').on('mousemove',function (e) {
		let mult = 15
		let phone_top = (e.pageY / $(window).height() - 0.5).toFixed(100) * 2 
		let phone_left = (e.pageX / $(window).width() - 0.5).toFixed(100) * 2
		$('#phoneMove').css('transform','translate(' + phone_left * mult + 'px,' + phone_top * mult + 'px)')
	})

	//	Бургер меню
	function burgerSwitcher () {
		$('.burger_menu').toggleClass('burger_active')
		$('#grey_window').toggleClass('grey_active')
		if ($('.burger_menu').hasClass('burger_active')) {
			$('#burgerSwitcher').attr('src','img/burger_active.svg')
		} else {
			$('#burgerSwitcher').attr('src','img/burger.svg')
		}
	}
	$('#burgerSwitcher').on('click',burgerSwitcher)

	// Меню второго уровня
	let active_second_menu = false
	$('.burger__link').on('click',function () {
		menuSecondOpen($(this))
	})
	function menuSecondOpen (el) {
		let menu_selected = el.find('.burger__menu__second')
		$('.burger__link').addClass('burger__link_noactive')
		el.removeClass('burger__link_noactive')
		el.attr('data-border','hide')
		if (active_second_menu === menu_selected.data('menu')) {
			menu_selected.removeClass('burger__menu__second_active')
			active_second_menu = false
			$('.burger__link').removeClass('burger__link_noactive')
			el.attr('data-border','')
		} else {
			$('.burger__menu__second').removeClass('burger__menu__second_active')
			menu_selected.addClass('burger__menu__second_active')
			active_second_menu = menu_selected.data('menu')
			el.attr('data-border','hide')
		}
	}
	//Закрытие бургера при клике вне поля
	$('#grey_window').on('click',function (e) {
		burgerSwitcher ()
	})
	// Выбор модели
	function modelCheck () {
		name = $(this).data('name')
		$('.main__button__checked').addClass('main__button__checked_active')
		$('.main__button__checked').text(name)
		$('.main__button__iphone').addClass('none')
		$('.main__button__scroll').addClass('none')
		$('.main__button__price').addClass('main__button__price_active')
	}
	$('.main__button__scroll__item').on('click',modelCheck)
	// Отмена выбора модели
	function modelUncheck () {	
		$('.main__button__checked').removeClass('main__button__checked_active')
		$('.main__button__checked').text('')
		$('.main__button__iphone').removeClass('none')
		$('.main__button__scroll').removeClass('none')
		$('.main__button__price').removeClass('main__button__price_active')
	}
	$('.main__button__checked').on('click',modelUncheck)
	//Выбор на мобилках
	if ($(window).width() <= 425) {
		$('.main__button__scroll__item').off()
		$('.main__button_scrolling').on('mouseenter',function () {
			$('.main__button__scroll').css('display','flex')
			$('.main__button__iphone').css('display','none')
			setTimeout(function () {
				$('.main__button__scroll__item').on('click',modelCheck)
			},100)
		})
	}
})