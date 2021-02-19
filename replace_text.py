import os
import shutil
current_path = os.getcwd()
def replaceText(file,replace_from,replace_to,dir = os.getcwd()):
	text = open(dir + '/' + file,'r',encoding = 'utf-8').read()
	text = text.replace(replace_from,replace_to)
	write_file = open(dir + '/' + file,'w',encoding = 'utf-8')
	write_file.write(text)
def walkFolder (dir = os.getcwd(),name = 'index.html'):
	print (dir)
	all_dirs = os.listdir(dir)
	dirs = []
	files = []
	for item in all_dirs:
		if os.path.isdir(dir + '/' + item):
			dirs.append(item)
		else:
			files.append(item)
	for current_dir in dirs:
		walkFolder(dir + '/' + current_dir)
	for current_file in files:
		if current_file == name:
			replaceText(current_file,'<div data-button="swap" class="button">Обменять на новое</div>','<a href="/lotery" data-button="swap" class="button">Лотерея</a>',dir = dir)
walkFolder()
print ('Done!')
input()