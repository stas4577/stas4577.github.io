
$(document).ready(function () {
	let page_name = $('.title').text()
	$("head").append( '<link id="favicon" rel="shortcut icon" href="/img/favicon.png" type="image/x-icon">' );
	$("title").text('Беспроигрышная лотерея')
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
		if (el.children('.burger__menu__second').length == 0) {
			return false
		}
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
		href = $(this).data('href')
		$('a[data-noactive]').attr('href',href)
		$('a[data-button="price"]').attr('href',href)
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
	$('.button__scroll__item').off()
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
	//Открытие видео
	function openVideo () {
		src = $(this).data('src')
		$(this).next().attr('src',src + '?autoplay=1&loop=1&&playlist=Video_ID')
		$('.video__youtube').css('display','block')
	}
	$('.people__play__button').on('click',openVideo)
	// Создание маски для ввода телефона
	// Открытие попапа
	function openPopup () {
		$('#popup_1').addClass('popup_active')
		$('#grey_window').addClass('grey_active')
	}
	// Закрытие попапа
	function closePopup () {
		$('#popup_1').removeClass('popup_active')
		$('#grey_window').removeClass('grey_active')
	}
	$('.button_app').on('click',openPopup)
	$('#close_1').on('click',closePopup)
	// Валидатор
	function validate () {
		errors = false
		if ($('#name_input_1').val().length == 0) {
			createError ($('#name_input_1'))
			errors = true
		}
		if ($('#phone_input_1').val().length != 11) {
			createError($('#phone_input_1'))
			errors = true
		}
		if (errors) {
			alert ('Заполните имя и телефон')
		} else {

		}

	}
	$('#validate_1').on('click',validate)
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
	// Перенаправление на калькулятор
	function toCalc(){
		$(location).attr('href','/calculator')
	}
	$('.button:contains("Калькулятор")').on('click',toCalc)
	// Перенаправление на обмен
	function toSwap(){
		$(location).attr('href','/obmen-iphone-ipad')
	}
	$('.button:contains("Обменять на новое")').on('click',toSwap)
	
	//if ($(window).height() > 700) {
	//	$('.lotery__block').height($('.lotery__item__wrap').width())
	//}
	//$(window).on('resize',function () {
	//	if ($(window).height() > 700) {
	//		$('.lotery__block').height($('.lotery__item__wrap').width())
	//	} else{
	//		$('.lotery__block').css('height','auto')
	//	}
	//})
	let power_change = 300
	let screen_change = 600
	let usb_change = 900
	function roll(){
		$('.lotery__roll__button').off()
		let roll_num = Math.random()
		roll_num = roll_num*1000
		roll_num = Math.round(roll_num)
		let result = ''
		let result_card = 0
		let last_result_card = 0
		if (roll_num <= power_change){
			result = 'Зарядка'
		}
		else if ((power_change < roll_num) && (roll_num <= screen_change)) {
			result = 'Стекло'
		}
		else if ((screen_change < roll_num) && (roll_num <= usb_change)) {
			result = 'Кабель'
		}
		else{
			result = 'False'
		}
		$('.lotery__block__item .lotery__item__title').css('opacity','0')
		$('.lotery__block__item .lotery__item__img').css('opacity','0')
		setTimeout(function () {
			if (result == 'Зарядка') {
			$('.lotery__block__item .lotery__item__title').text('Зарядка')
			$('.lotery__block__item .lotery__item__img img').attr('src','img/power.png')
		}
		if (result == 'Стекло') {
			$('.lotery__block__item .lotery__item__title').text('Стекло')
			$('.lotery__block__item .lotery__item__img img').attr('src','img/screen.png')
		}
		if (result == 'Кабель') {
			$('.lotery__block__item .lotery__item__title').text('Кабель')
			$('.lotery__block__item .lotery__item__img img').attr('src','img/usb.png')
		}
		if (result == 'False') {
			for (let i=1; i <= $('.lotery__block__item .lotery__item__title').length; i++) {
				let random_card = Math.round(Math.random() * (3-1) + 1)
				if (result_card != 0) {
					last_result_card = random_card
				}
				if (random_card == 1){
					$('.lotery__block__item .lotery__item__title').eq(i-1).text('Зарядка')
					$('.lotery__block__item .lotery__item__img img').eq(i-1).attr('src','img/power.png')
				}
				if (random_card == 2){
					$('.lotery__block__item .lotery__item__title').eq(i-1).text('Стекло')
					$('.lotery__block__item .lotery__item__img img').eq(i-1).attr('src','img/screen.png')
				}
				if (random_card == 3){
					$('.lotery__block__item .lotery__item__title').eq(i-1).text('Кабель')
					$('.lotery__block__item .lotery__item__img img').eq(i-1).attr('src','img/usb.png')
				}
				if (result_card == last_result_card){
					if (result_card == 1){
						let last_card = Math.round(Math.random() * (2-1) + 1)
						if (last_card == 1){
							$('.lotery__block__item .lotery__item__title').eq(2).text('Стекло')
							$('.lotery__block__item .lotery__item__img img').eq(2).attr('src','img/screen.png')
						}
						else{
							$('.lotery__block__item .lotery__item__title').eq(2).text('Кабель')
							$('.lotery__block__item .lotery__item__img img').eq(2).attr('src','img/usb.png')
						}
					}
					if (result_card == 2){
						let last_card = Math.round(Math.random() * (2-1) + 1)
						if (last_card == 1){
							$('.lotery__block__item .lotery__item__title').eq(2).text('Зарядка')
							$('.lotery__block__item .lotery__item__img img').eq(2).attr('src','img/power.png')
						}
						else{
							$('.lotery__block__item .lotery__item__title').eq(2).text('Кабель')
							$('.lotery__block__item .lotery__item__img img').eq(2).attr('src','img/usb.png')
						}
					}
					if (result_card == 3){
						let last_card = Math.round(Math.random() * (2-1) + 1)
						if (last_card == 1){
							$('.lotery__block__item .lotery__item__title').eq(2).text('Зарядка')
							$('.lotery__block__item .lotery__item__img img').eq(2).attr('src','img/power.png')
						}
						else{
							$('.lotery__block__item .lotery__item__title').eq(2).text('Стекло')
							$('.lotery__block__item .lotery__item__img img').eq(2).attr('src','img/screen.png')
						}
					}
				}
				result_card = random_card
				//$('.lotery__block__item .lotery__item__title').eq(i-1).css('opacity','1')
				//$('.lotery__block__item .lotery__item__img img').eq(i-1).css('opacity','1')
			}
		}
		setTimeout(function() {
			$('.lotery__block__item .lotery__item__img').eq(0).css('opacity','1')
			$('.lotery__block__item .lotery__item__title').eq(0).css('opacity','1')
		},0)
		setTimeout(function() {
			$('.lotery__block__item .lotery__item__img').eq(1).css('opacity','1')
			$('.lotery__block__item .lotery__item__title').eq(1).css('opacity','1')
		},1000)
		setTimeout(function() {
			$('.lotery__block__item .lotery__item__img').eq(2).css('opacity','1')
			$('.lotery__block__item .lotery__item__title').eq(2).css('opacity','1')
			setTimeout(function() {
				if (result == "False") {
					let timer = 15
					let roll_interval = setInterval(function () {
						$('.lotery__roll__button').removeClass('lotery__roll__button_active')
						$('.lotery__roll__button').text('Испытать удачу через ' + timer + ' сек')
						if (timer == 0){
							$('.lotery__roll__button').addClass('lotery__roll__button_active')
							$('.lotery__roll__button').text('Испытать удачу')
							$('.lotery__roll__button').on('click',roll)
							clearInterval(roll_interval)
						}
						timer--
					},1000)
				} else{
					if (result == 'Стекло') {
						$('.lotery__roll__text').html('Поздравляем! Вы выиграли <b>защитную пленку</b>')
						$('.lotery__roll__button').addClass('lotery__roll__button_blue')
						$('.lotery__roll__button').text('Забрать подарок')
					}
					if (result == 'Зарядка') {
						$('.lotery__roll__text').html('Поздравляем! Вы выиграли <b>зарядку</b>')
						$('.lotery__roll__button').addClass('lotery__roll__button_blue')
						$('.lotery__roll__button').text('Забрать подарок')
					}
					if (result == 'Кабель') {
						$('.lotery__roll__text').html('Поздравляем! Вы выиграли <b>USB кабель</b>')
						$('.lotery__roll__button').addClass('lotery__roll__button_blue')
						$('.lotery__roll__button').text('Забрать подарок')
					}
					$('.lotery__roll__button_blue').on('click',openPopup)
				}
			},1000)
		},2000)
		},1000)
		
	}
	$('.lotery__roll__button').on('click',roll)
	//openPopup()

})
