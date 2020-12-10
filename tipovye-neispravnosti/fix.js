$(document).ready(function () {
	$('.button__scroll__item').on('click',function() {
		let href = $(this).data('href')
		$(location).attr('href',href)
	})
})