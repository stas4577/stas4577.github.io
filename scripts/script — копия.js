'use sctrict'
let menu = document.getElementsByClassName('menu_open')
let menu_opacity = document.getElementsByClassName('menu_text')
let youtube = document.getElementById('youtube')
let active_menu = -1



for (let i = 0;i<menu.length;i++) {
	let count = 0
	menu[i].onclick = function () {
	if (active_menu != -1) {
		if (active_menu == i) {
			menu[i].style.height = '50px'
			menu_opacity[i].style.opacity = '0'
			count--
			active_menu = -1
		} else {
			menu[active_menu].style.height = '50px'
			menu_opacity[active_menu].style.opacity = '0'
			menu[i].style.height = '255px'
			menu_opacity[i].style.opacity = '1'
			count++
			active_menu = i
		}
	} else {
		menu[i].style.height = '255px'
		menu_opacity[i].style.opacity = '1'
		count++
		active_menu = i
	}
}
}

let slides = document.getElementsByClassName ('people_comment')
let slider_up_button = document.getElementById ('button_up')
let slider_down_button = document.getElementById ('button_down')
let slide_up = 0
let slide_down = 1




function sliderDown () {
	slides[slide_up].className = 'people_comment slide_top'
	slide_up = (slide_up+1) % slides.length
	slides[slide_down].className = 'people_comment slider_active slider_up'
	slide_down = (slide_down+1) % slides.length
	slides[slide_down].className = 'people_comment slider_active slider_bottom'
	slides[slide_up-2].className = 'people_comment slide_bottom'
	slides[slide_down-2].className = 'people_comment slide_bottom'
}


/*function sliderUp () {
	
}*/

slider_down_button.onclick = function () {
	sliderDown ()
}






