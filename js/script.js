$("head").append( '<link id="favicon" rel="shortcut icon" href="/img/favicon.png" type="image/x-icon">' );
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
	function contactsSwitcher () {
		$('.contacts_menu').toggleClass('contacts_active')
		$('#grey_window').toggleClass('grey_active')
		$('.contacts_menu').css('top','40px')
	}

	// Меню второго уровня
	
	function closeAllPopup() {
		$('.burger_menu').removeClass('burger_active')
		$('.contacts_menu').removeClass('contacts_active')
		$('#grey_window').removeClass('grey_active')
		$('#burgerSwitcher').attr('src','img/burger.svg')
	}
	$('#contactsSwitcher').on('click',contactsSwitcher)
	$('#burgerSwitcher').on('click',burgerSwitcher)
	let active_second_menu = false
	$('.burger__link').on('click',function () {
		menuSecondOpen($(this))
	})
	function menuSecondOpen (el) {
		if (el.children('.burger__menu__second').length == 0) {
			return false
		}
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
	$('#grey_window').on('click',closeAllPopup)
	// Выбор модели
	function modelCheck () {
		name = $(this).data('name')
		href = $(this).data('href')
		$('a[data-noactive]').attr('href',href)
		$('.button').has($(this)).children('.button__checked').addClass('button__checked_active')
		$('.button').has($(this)).children('.button__checked').text(name)
		$('.button').has($(this)).children('.button__iphone').addClass('none')
		$('.button').has($(this)).children('.button__scroll').addClass('none')
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
		let cost = $(this).data('cost')
		let time = $(this).data('time')
		$('.button[data-button="cost"]').text(cost)
		$('.button[data-button="time"]').text(time)
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
			$(this).children('.button__scroll').css('display','flex')
			$(this).children('.button__iphone').css('display','none')
			setTimeout(function () {
				$('.button__scroll__item').on('click',modelCheck)
			},100)
			$('.button_scrolling').on('mouseleave',function () {
				$('.button__scroll').css('display','none')
				$('.button__iphone').css('display','flex')
				$('.button__scroll__item').off()
			})
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
	//Отзывы
	let active_slider = 1
	function sliderTo(){
		id = $(this).index() + 1
		$('.comments__block').addClass('comments__block_noactive')
		$('.comments__block').eq(id-1).removeClass('comments__block_noactive')
		$('.slider__block').removeClass('slider__block_active')
		$('#block_' + id).addClass('slider__block_active')
		$('.slider__nav').removeClass('slider__nav_active')
		$('.slider__nav').eq(id-1).addClass('slider__nav_active')
		active_slider = id
	}
	function sliderNext() {
		active_slider = active_slider + 1
		if (active_slider > $('.slider__nav').length) {
			active_slider = 1
		}
		$('.comments__block').addClass('comments__block_noactive')
		$('.comments__block').eq(active_slider - 1).removeClass('comments__block_noactive')
		$('.slider__nav').removeClass('slider__nav_active')
		$('.slider__nav').eq(active_slider-1).addClass('slider__nav_active')
	}
	function sliderPrev() {
		active_slider = active_slider - 1
		if (active_slider == 0) {
			active_slider = $('.slider__nav__item').length
		}
		$('.comments__block').addClass('comments__block_noactive')
		$('.comments__block').eq(active_slider - 1).removeClass('comments__block_noactive')
		$('.slider__nav').removeClass('slider__nav_active')
		$('.slider__nav').eq(active_slider-1).addClass('slider__nav_active')
	}
	$('.slider__nav').on('click',sliderTo)
	$('.slider_right').on('click',sliderNext)
	$('.slider_left').on('click',sliderPrev)
	



	$(".comments__block").swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') {
      	sliderNext()
      }
      if (direction == 'right'){
      	sliderPrev()
      }
    }
  });




	// Всё что после правок
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
	//Открытие видео
	function openVideo () {
		src = $(this).data('src')
		$(this).next().attr('src',src + '?autoplay=1&loop=1&&playlist=Video_ID')
		$('.video__youtube').css('display','block')
	}
	$('.people__play__button').on('click',openVideo)











})