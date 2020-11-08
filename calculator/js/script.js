
$(document).ready(function () {
	$('div[data-cat]').css('display','none')
	$('div[data-fix]').css('display','none')
	setTimeout(function () {
		$('#cost').width($('#cat').width() - 10)
	},10)
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
	function catCheck () {
		name = $(this).data('name')
		$('#cat .main__button__checked').addClass('main__button__checked_active')
		$('#cat .main__button__checked').text(name)
		$('#cat .main__button__iphone').addClass('none')
		$('#cat .main__button__scroll').addClass('none')
		$('#cat .main__button__price').addClass('main__button__price_active')
		$('#cat .aboutFix__name').text(name)
		$('#cat .fix__button').addClass('aboutFix_clicked')
		$('#cat .aboutFix_clicked').on('click',function () {
			$('#cat .aboutFix').toggleClass('aboutFix_active')
			if ($('#cat .video__youtube').css('display') == 'block') {
				$('#cat .video__youtube').css('display','none')
				$('#cat .video__youtube').attr('src','')
			}
		})
		modelGetCat($(this).data('to'))
		if ($(window).width() <= 425) {
			$('#model .main__button__scroll__item').off()
			$('#fix .main__button__scroll__item').off()
		}

	}
	function modelCheck () {
		name = $(this).data('name')
		$('#model .main__button__checked').addClass('main__button__checked_active')
		$('#model .main__button__checked').text(name)
		$('#model .main__button__iphone').addClass('none')
		$('#model .main__button__scroll').addClass('none')
		$('#model .main__button__price').addClass('main__button__price_active')
		$('#model .aboutFix__name').text(name)
		$('#model .fix__button').addClass('aboutFix_clicked')
		$('#model .aboutFix_clicked').on('click',function () {
			$('#model .aboutFix').toggleClass('aboutFix_active')
			if ($('#model .video__youtube').css('display') == 'block') {
				$('#model .video__youtube').css('display','none')
				$('#model .video__youtube').attr('src','')
			}
		})
		modelGetModel($(this).data('name'))
		if ($(window).width() <= 425) {
			$('#fix .main__button__scroll__item').off()
		}
	}
	function fixCheck () {
		name = $(this).data('name')
		cost = $(this).data('cost')
		$('#fix .main__button__checked').addClass('main__button__checked_active')
		$('#fix .main__button__checked').text(name)
		$('#fix .main__button__iphone').addClass('none')
		$('#fix .main__button__scroll').addClass('none')
		$('#fix .main__button__price').addClass('main__button__price_active')
		$('#fix .aboutFix__name').text(name)
		$('#fix .fix__button').addClass('aboutFix_clicked')
		$('#fix .aboutFix_clicked').on('click',function () {
			$('#fix .aboutFix').toggleClass('aboutFix_active')
			if ($('#fix .video__youtube').css('display') == 'block') {
				$('#fix .video__youtube').css('display','none')
				$('#fix .video__youtube').attr('src','')
			}
		})
		$('#cost').text(cost)
		$('#cost').removeClass('cost_noactive')
	}
	$('#cat .main__button__scroll__item').on('click',catCheck)
	$('#model .main__button__scroll__item').on('click',modelCheck)
	$('#fix .main__button__scroll__item').on('click',fixCheck)
	// Выбор модели после выбора категории
	function modelGetCat (cat) {
		$('#model').removeClass('model_noactive')
		$('div[data-cat="' + cat +'"]').css('display','')	
	}
	function modelGetModel (model) {
		$('#fix').removeClass('model_noactive')
		$('div[data-fix="' + model +'"]').css('display','')	
		//alert (model)
	}
	// Отмена выбора модели
	function catUncheck () {	
		$('#cat .main__button__checked').removeClass('main__button__checked_active')
		$('#cat .main__button__checked').text('')
		$('#cat .main__button__iphone').removeClass('none')
		$('#cat .main__button__scroll').removeClass('none')
		$('#cat .main__button__price').removeClass('main__button__price_active')
		$('#cat .aboutFix').removeClass('aboutFix_active')
		$('#cat .aboutFix_clicked').off()
		$('#cat .fix__button').removeClass('aboutFix_clicked')
		$('#cat .video__youtube').css('display','none')
		$('#cat .video__youtube').attr('src','')
		$('#model').addClass('model_noactive')
		$('#fix').addClass('model_noactive')
		$('div[data-cat]').css('display','none')
		$('div[data-fix]').css('display','none')
		modelUncheck()
		fixUncheck()
		if ($(window).width() <= 425) {
			$('#model .main__button__scroll').css('display','none')
			$('#model .main__button__iphone').css('display','flex')
			$('#fix .main__button__scroll').css('display','none')
			$('#fix .main__button__iphone').css('display','flex')
		}
	}
	function modelUncheck () {	
		$('#model .main__button__checked').removeClass('main__button__checked_active')
		$('#model .main__button__checked').text('')
		$('#model .main__button__iphone').removeClass('none')
		$('#model .main__button__scroll').removeClass('none')
		$('#model .main__button__price').removeClass('main__button__price_active')
		$('#model .aboutFix').removeClass('aboutFix_active')
		$('#model .aboutFix_clicked').off()
		$('#model .fix__button').removeClass('aboutFix_clicked')
		$('#model .video__youtube').css('display','none')
		$('#model .video__youtube').attr('src','')
		$('div[data-fix]').css('display','none')
		fixUncheck()
		$('#fix').addClass('model_noactive')
		if ($(window).width() <= 425) {
			$('#fix .main__button__scroll').css('display','none')
			$('#fix .main__button__iphone').css('display','flex')
		}
	}
	function fixUncheck () {	
		$('#fix .main__button__checked').removeClass('main__button__checked_active')
		$('#fix .main__button__checked').text('')
		$('#fix .main__button__iphone').removeClass('none')
		$('#fix .main__button__scroll').removeClass('none')
		$('#fix .main__button__price').removeClass('main__button__price_active')
		$('#fix .aboutFix').removeClass('aboutFix_active')
		$('#fix .aboutFix_clicked').off()
		$('#fix .fix__button').removeClass('aboutFix_clicked')
		$('#fix .video__youtube').css('display','none')
		$('#fix .video__youtube').attr('src','')
		$('#cost').text('0 рублей')
		$('#cost').addClass('cost_noactive')
	}
	$('#cat .main__button__checked').on('click',catUncheck)
	$('#model .main__button__checked').on('click',modelUncheck)
	$('#fix .main__button__checked').on('click',fixUncheck)
	//Кнопка цены
	function showCost(cost) {
		$('#cost').text(cost)
	}
	//Выбор на мобилках
	if ($(window).width() <= 425) {
		$('#model .main__button__scroll__item').off()
		$('#cat .main__button__scroll__item').off()
		$('#cat .main__button_scrolling').on('mouseenter',function () {
			//$('#cat .main__button__scroll').css('display','flex')
			$('#cat .main__button__iphone').css('display','none')
			setTimeout(function () {
				$('#cat .main__button__scroll__item').on('click',catCheck)
			},100)
		})
		$('#model .main__button__scroll__item').off()
		$('#model .main__button_scrolling').on('mouseenter',function () {
			if ($(this).parent().hasClass('model_noactive')) {

			} else {
				//$('#model .main__button__scroll').css('display','flex')
				setTimeout(function () {
					$('#model .main__button__scroll__item').on('click',modelCheck)
					$('#model .main__button__iphone').css('display','none')
				},100)
			}
		})
		$('#fix .main__button__scroll__item').off()
		$('#fix .main__button_scrolling').on('mouseenter',function () {
			//$('#fix .main__button__scroll').css('display','flex')
			$('#fix .main__button__iphone').css('display','none')
			setTimeout(function () {
				$('#fix .main__button__scroll__item').on('click',fixCheck)
			},100)
		})
		
	}
	

})
