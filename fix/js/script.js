
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
		let menu_selected = el.find('.burger__menu__second').eq(0)
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
	//Закрытие бургера при клике вне его
	$('#grey_window').on('click',function (e) {
		if ($('#popup').hasClass('popup_active')) {
			closePopup()
		} else {
			burgerSwitcher ()
		}
	})
	// Выбор модели
	function modelCheck () {
		name = $(this).data('name')
		$('.button__checked').addClass('button__checked_active')
		$('.button__checked').text(name)
		$('.button__iphone').addClass('none')
		$('.button__scroll').addClass('none')
		$('.button__price').addClass('button__price_active')
		$('.aboutFix__name').text(name)
		$('.fix__button').addClass('aboutFix_clicked')
		$('.button[data-noactive]').removeClass('button_noactive')
		$('.aboutFix_clicked').on('click',function () {
			$('.aboutFix').toggleClass('aboutFix_active')
			if ($('.video__youtube').css('display') == 'block') {
				$('.video__youtube').css('display','none')
				$('.video__youtube').attr('src','')
			}
		})
	}
	$('.button__scroll__item').on('click',modelCheck)
	// Отмена выбора модели
	function modelUncheck () {	
		$('.button__checked').removeClass('button__checked_active')
		$('.button__checked').text('')
		$('.button__iphone').removeClass('none')
		$('.button__scroll').removeClass('none')
		$('.button__price').removeClass('button__price_active')
		$('.aboutFix').removeClass('aboutFix_active')
		$('.aboutFix_clicked').off()
		$('.fix__button').removeClass('aboutFix_clicked')
		$('.video__youtube').css('display','none')
		$('.video__youtube').attr('src','')
		$('.button[data-noactive]').addClass('button_noactive')
		$('.button[data-button="cost"]').text('--- рублей')
		$('.button[data-button="time"]').text('--- минут')
	}
	$('.button__checked').on('click',modelUncheck)
	//Выбор на мобилках
	if ($(window).width() <= 425) {
		$('.button__scroll__item').off()
		$('.button_scrolling').on('mouseenter',function () {
			$('.button__scroll').css('display','flex')
			$('.button__iphone').css('display','none')
			setTimeout(function () {
				$('.button__scroll__item').on('click',modelCheck)
			},100)
		})
	}
	// Создание маски для ввода телефона
	$("#phone_input").mask("+7(999) 999-9999");
	// Открытие попапа
	function openPopup () {
		$('#popup').addClass('popup_active')
		$('#grey_window').addClass('grey_active')
	}
	// Закрытие попапа
	function closePopup () {
		$('#popup').removeClass('popup_active')
		$('#grey_window').removeClass('grey_active')
	}
	$('.button_app').on('click',openPopup)
	$('#close').on('click',closePopup)
	// Валидатор
	function validate () {
		errors = false
		if ($('#name_input').val().length == 0) {
			createError ($('#name_input'))
			errors = true
		}
		if ($('#phone_input').val().length != 16) {
			createError($('#phone_input'))
			errors = true
		}
		if (errors) {
			alert ('Заполните имя и телефон')
		} else {

		}

	}
	$('#validate').on('click',validate)
	// Функция создание ошибок
	function createError (el) {
		el.addClass('input_error')
	}
	// Функция удаления ошибок
	function deleteError(){
		$(this).removeClass('input_error')
	}
	// Удаление ошибок при изменении элемента
	$('.popup__input').on('keypress',deleteError)
	//Попап работы
	function showWork(){
		$('#' + $(this).data('button')).addClass('window_active')
		$('html').css('overflow-y','hidden')

	}
	function hideWork () {
		$('.window_active').removeClass('window_active')
		$('html').css('overflow-y','scroll')
	}
	$('[data-button]').on('click',showWork)
	$('.window_close').on('click',hideWork)
	// Перенаправление на калькулятор
	function toCalc(){
		$(location).attr('href','/calculator')
	}
	$('.button:contains("Калькулятор")').on('click',toCalc)


})