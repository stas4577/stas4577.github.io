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