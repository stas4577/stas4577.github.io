template = open ('template.txt','r',encoding="UTF-8")
default = open ('default.txt','r',encoding="UTF-8")
ready = open ('ready.txt','w',encoding="UTF-8")
default_text = default.read()
text = template.read()
search_text = 'data-name="'
all_list = []
while text.find(search_text) != -1:
	pos = text.find(search_text)
	last_pos = text[pos+len(search_text)+1:].find('"') + pos+len(search_text)+1
	all_list.append(text[pos+len(search_text):last_pos])
	text = text[last_pos+1:]
for i in range(len(all_list)):
	ready.write(default_text.replace('$name',all_list[i]) + '\n')
input()
