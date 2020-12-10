from setting import *
import os
import shutil
import textLib
import table
# Получение html кода
def get_html(link):
	try:
		resp = req.get(link)
		soup = BS(resp.text, 'lxml')
		return soup
	except:
		print ('С ссылкой что то не так')
		return False
def get_fix_links (html):
	links = html.select('.row-hover tr')
	return links
url = 'https://ifix-it.ru/remont-android/remont-android-huawei'
page = get_html(url)
models = page.select_one('.elementor-element-7cde39b')
models = models.select('a')
template_file = open('template.txt','r',encoding="utf-8")
template = template_file.read()
template_file.close()
for model in models:
	folder_to_create = model['href']
	folder_to_create = folder_to_create[folder_to_create.rfind('/')+1:]
	#try:
	#	os.mkdir(folder_to_create)
	#except:
	#	print ('Папка ' + folder_to_create + ' уже создана')

	current_link = model['href']
	this_page = get_html(current_link)
	this_page_text = this_page.select_one('.elementor-section-stretched')
	this_page_text = this_page_text.select_one('.elementor-text-editor')
	this_page_text = this_page_text.text
	#print (this_page_text)
	sub_text = textLib.text_correct(str(this_page.select('.elementor-text-editor.elementor-clearfix')[2]))
	fix_links = get_fix_links(this_page)
	text_for_table = ''
	line_continue = True
	for el in fix_links:
		if line_continue == True:
			line_continue = False
			continue
		ready_line = ''
		for item in el.select('td'):
			ready_line = ready_line + item.text + '\t'
		text_for_table = text_for_table + ready_line + '\n'
	table_file = open('table.txt','w',encoding="utf-8")
	table_file.write(text_for_table)
	table_file.close()
	table_file = open('table.txt','r',encoding="utf-8")
	table_text = table.main(table_file)
	table_file.close()
	result_text = template
	result_text = result_text.replace('$text',this_page_text)
	result_text = result_text.replace('$sub_text',sub_text)
	result_text = result_text.replace('$name',model.text)
	result_text = result_text.replace('$table',text_for_table)
	result_text = result_text.replace('$fix_links',table_text)
	shutil.copytree(os.getcwd() + '\\' + 'files',folder_to_create)
	result_file = open(os.getcwd() + '\\' + folder_to_create + '\\' + 'index.txt','w',encoding="utf-8")
	result_file.write(result_text)
	result_file.close()
	os.rename(os.getcwd() + '\\' + folder_to_create + '\\' + 'index.txt',os.getcwd() + '\\' + folder_to_create + '\\' + 'index.kit')

print ('Готово!')
input()
 
	

