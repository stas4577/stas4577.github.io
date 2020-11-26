def text_correct (text):
	text = text.replace('<div class="elementor-text-editor elementor-clearfix">','')
	text = text.replace('</div>','')
	text = text.replace('<p>','<div class="aboutFix__main__text">')
	text = text.replace('</p>','</div>')
	text = text.replace('<h2>','<div class="aboutFix__main__title">')
	text = text.replace('<h2 style="text-align: center;">','<div class="aboutFix__main__title">')
	text = text.replace('</h2>','</div>')
	text = text.replace('<b>',' <span class="text_blue">')
	text = text.replace('</b>','</span> ')
	while text.find('noscript') != -1:
		pos_start = text.find('<nos')
		pos_end = text.find('</nos')
		mask = text[pos_start:pos_end+11]
		text = text.replace(mask,'')
		pos_start = text.find('<img')
		pos_end = text[pos_start:].find('>')
		mask = text[pos_start:pos_end+1+pos_start]
		text = text.replace(mask,'')
	while text.find('<iframe') != -1:
		pos_start = text.find('<iframe')
		pos_end = text[pos_start:].find('>')
		mask = text[pos_start:pos_end+10+pos_start]
		text = text.replace(mask,'')
	text = text.replace('<div class="aboutFix__main__text"></div>','')
	text = text.replace('&nbsp;',' ')

	
