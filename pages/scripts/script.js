'use strict'
$(document).ready(function(){
	let cart_cookie
	let meats = {
		'1':'Meat_1',
		'2':'Meat_2',
		'3':'Meat_3',
		'4':'Meat_4',
		'5':'Meat_5',
		'6':'Meat_6',
		'7':'Meat_7',
		'8':'Meat_8',
	}
	function addToCart (id,count,name) {
		cart_cookie = JSON.parse($.cookie('cart'))
		cart_cookie[id] = count
		cart_cookie = JSON.stringify(cart_cookie)
		$.cookie('cart',cart_cookie,{expires:14,path:'/'})
	}
	function createCart () {
		let cart = {
			created:true,
		}
		cart = JSON.stringify(cart)
		$.cookie ('cart',cart,{expires:14,path:'/'})
	}
	if ($.cookie('cart') == null) {
		createCart()
		alert ('Корзина создана')
	}

	$('.content_add').on('click',function () {
		addToCart($(this).data('id'),$("input[data-id = " + $(this).data('id') + "]").val())
		alert ('Готово!')
	})
	let meat = JSON.parse($.cookie('cart'))
	



	

	

	
})