import pyperclip
f = open ('text.txt',encoding="utf-8")
text = f.read()
text_ready = ''
#while text.find('<ul>') != -1:
pos_start = text.find('<ul>')
pos_end = text.find('</ul>')
link_start = text[pos_start:].find('<li>')
link_end = text[link_start+pos_start:].find('</li>')
text_start = text[pos_start+link_start:].find('<a')
text_start = text[pos_start+link_start+text_start+1:].find('>')
text_end = text[pos_start+link_start:].find('</a')
link = text[text_start:text_end+1] 
text_ready = text_ready + '<div data-cost="--" data-time="--" data-name="' + link +'" class="button__scroll__item">\n\t' + link +'\n</div>'
mask = text[pos_start:pos_end+pos_start+1]
text.replace(mask,'')

f.close()
pyperclip.copy(text_ready)

	

