$(document).ready(function () {
	$('.button__scroll__item').on('click',function() {
		let href = $(this).data('href')
		$(location).attr('href',href)
	})
	if ($(window).width() <= 425) {
		$('.button__scroll__item').off()
		$('.button_scrolling').on('mouseenter',function () {
			$('.button__scroll').css('display','flex')
			$('.button__iphone').css('display','none')
			setTimeout(function () {
				$('.button__scroll__item').on('click',function () {
					let href = $(this).data('href')
					$(location).attr('href',href)
				} )
			},100)
		})
		$('.button_scrolling').on('mouseleave',function () {
			$('.button__scroll').css('display','none')
			$('.button__iphone').css('display','flex')
			$('.button__scroll__item').off()
		})
	}
})