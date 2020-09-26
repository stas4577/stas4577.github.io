import pyperclip
f = open ('text.txt',encoding="utf-8")
ready_file = open ('ready.txt','w',encoding="utf-8")
for line in f:
 if line == '\n':
 	continue
 text = line
 text = text.replace('\n','')
 pos = text.find('—')
 name = text[0:pos]
 cost = text[pos+1:]
 ready_file.write('\t\t\t\t\t\t\t<div data-cost="' + cost + '" data-name="' + name + '" class="button__scroll__item">' + name + '</div>' + '\n')




f.close()
ready_file.close()
ready_file = open ('ready.txt','r',encoding="utf-8")
pyperclip.copy(ready_file.read())

	

