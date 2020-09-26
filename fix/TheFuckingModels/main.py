import pyperclip
f = open ('text.txt',encoding="utf-8")
ready_file = open ('ready.txt','w',encoding="utf-8")
honor_file = open ('mi.txt','w',encoding="utf-8")
for line in f:
	if line == '\n':
		continue
	text = line
	text = text.replace('\n','')
	ready_text = '<div data-name="' + text +'" class="button__scroll__item"> ' + text +' </div>'
	if text.find('Mi') != -1:
		honor_file.write(ready_text + '\n')
	else:
		ready_file.write(ready_text + '\n')




f.close()
ready_file.close()
ready_file = open ('ready.txt','r',encoding="utf-8")
pyperclip.copy(ready_file.read())

	

