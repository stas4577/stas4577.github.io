
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
		if ($('.burger_menu').hasClass('burger_active')) {
			burgerSwitcher()
		} else {
			closePopup()
		}
	})
	// Выбор модели
	function modelCheck () {
		name = $(this).data('name')
		$('.main__button__checked').addClass('main__button__checked_active')
		$('.main__button__checked').text(name)
		$('.main__button__iphone').addClass('none')
		$('.main__button__scroll').addClass('none')
		$('.main__button__price').addClass('main__button__price_active')
		$('.aboutFix__name').text(name)
		$('.fix__button').addClass('aboutFix_clicked')
		$('.aboutFix_clicked').on('click',function () {
			$('.aboutFix').toggleClass('aboutFix_active')
			if ($('.video__youtube').css('display') == 'block') {
				$('.video__youtube').css('display','none')
				$('.video__youtube').attr('src','')
			}
		})
		$('.main__button__wrap[data-button="price"]').attr('href',$(this).data('href'))
	}
	$('.main__button__scroll__item').on('click',modelCheck)
	// Отмена выбора модели
	function modelUncheck () {	
		$('.main__button__checked').removeClass('main__button__checked_active')
		$('.main__button__checked').text('')
		$('.main__button__iphone').removeClass('none')
		$('.main__button__scroll').removeClass('none')
		$('.main__button__price').removeClass('main__button__price_active')
		$('.aboutFix').removeClass('aboutFix_active')
		$('.aboutFix_clicked').off()
		$('.fix__button').removeClass('aboutFix_clicked')
		$('.video__youtube').css('display','none')
		$('.video__youtube').attr('src','')
		$('.main__button__wrap[data-button="price"]').attr('href','#')
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
	//Открытие видео
	function openVideo () {
		src = $(this).data('src')
		$(this).next().attr('src',src + '?autoplay=1&loop=1&&playlist=Video_ID')
		$('.video__youtube').css('display','block')
	}
	$('.people__play__button').on('click',openVideo)
	//Слайдер
	function sliderMove (slider,num) {
		
		$('.aboutFix__slider[data-slider="' + slider + '"] img').attr('src',
			'img/slider_' + slider + '_' + num + '.png'
		)
	}
	sliderMove(1,1)
	sliderMove(2,1)
	$('.aboutFix__slider__bar').on('click',function () {
		let slider_to = $(this).index() + 1
		let slider_num = $(this).parents('.aboutFix__slider').data('slider')
		sliderMove(slider_num,slider_to)
		$(this).siblings().removeClass('aboutFix__slider__bar_active')
		$(this).addClass('aboutFix__slider__bar_active')
	})
	// Настройка декора
	if ($('.aboutFix').height() <= 500) {
		$('.circle__right__decor').css('display','none')
		$('.dots__left__decor').css('display','none')
		$('.circle__left__decor').css('display','none')
	}
	// Создание маски для ввода телефона
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
	
})
