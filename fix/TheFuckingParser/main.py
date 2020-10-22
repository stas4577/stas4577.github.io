from setting import *
import os
import textLib
import shutil
template = open('default.txt','r',encoding="utf-8")
default_href = 'https://ifix-it.ru'
# Получение html кода
def get_html(link):
	try:
		resp = req.get(link)
		soup = BS(resp.text, 'lxml')
		return soup
	except:
		print ('С ссылкой что то не так')
		return False
# Получение ссылок на неисправности
def get_fix_links (html):
	links = html.select('tr a')
	return links
# Получение неисправностей
def get_info (html):
	try:
		table = html.select_one('tbody')
		if table.text.find('Цена') != -1:
			count_fix = table.select('tr')
			info = table.select('tr')[1:]
		else:
			count_fix = table.select('tr')
			info = table.select('tr')
	except:
		return False
	return info
# Получение папки
def get_current_link (link,text):
	pos = link.find(text)
	folder = link[pos+len(text)+1:]
	return folder
# Получение модели
def current_model(link):
	pos = link.find('ifix-it.ru/')
	folder = link[pos+len('ifix-it.ru/'):]
	return folder
# Получение всех моделей
def get_all_models(html):
	models = html.select('.elementor-image')
# Получение модели
def get_model_name(link):
	pos = link.rfind('/')
	if pos == len(link) - 1:
		link = link[:-1]
		pos = link.rfind('/')
	link = link[pos+1:]
	return link
# Получение модели на случай ошибок
def get_error_model(link):
	link = link.replace('//','/')
	text = 'ifix-it.ru/'
	pos = link.find(text)
	link = link[pos+len(text)+1:]
	pos = link.find('/')
	link = link[:pos]
	return link
# Работа с шаблонами
def temlate_replace(info,i):
	try:
		info = {
			"name": info[i].select('td')[0].text,
			"fix": info[i].select('td')[1].text,
			"time": info[i].select('td')[2].text,
			"cost": info[i].select('td')[3].text,
		}
	except:
		try:
			info = {
				"name": info[i].select('th')[0].text,
				"fix": '',
				"time": info[i].select('th')[1].text,
				"cost": info[i].select('th')[2].text,
			}
		except:
			return False
	return info
# Получение заголовка
def get_page_name (html):
	name = html.select_one('h1').text
	return name
# Получение текста страницы
def get_page_text (html):
	text = html.select('div.elementor-text-editor')[-1]
	return str(text)
default_path = os.getcwd()
template_text = template.read()
main_page = 'https://ifix-it.ru/remont-ipad'
main_page = get_html(main_page)
all_models_href = main_page.select('.wp-caption a')
for num in range (len(all_models_href)):
	if all_models_href[num]['href'].find('/') == -1:
		link = default_href + '/' + all_models_href[num]['href']
	else:
		link = default_href + all_models_href[num]['href']
	model_name = get_model_name(link)
	print (model_name)
	os.mkdir(model_name)
	page = get_html(link)
	fix_links = get_fix_links(page)
	for i in range(len(fix_links)):
		fix_links_text = fix_links[i].text
		folder = model_name + '\\' + get_current_link(fix_links[i]['href'],get_error_model(fix_links[i]['href']))
		if folder.find('icloud') != -1:
			continue
		folder = folder.replace('/','')
		files_path = '\\files'
		full_path_to_model = os.getcwd() + '\\' + folder + '\\'
		basic_path = os.getcwd()
		# Если папка создана, пропустить
		try:
			os.mkdir(folder)
		except:
			continue
		try:
			info = get_info(get_html(fix_links[i]['href']))
		except:
			continue
		if info == False:
			os.rmdir(os.getcwd() + '\\' + folder)
			continue
		else:
			# Работа с шаблоном
			info_fix = temlate_replace (info,0)
			if info_fix == False:
				continue
			main_table = open('main_table.txt','r',encoding="utf-8")
			ready_text = main_table.read().replace('$name',info_fix['name'])
			ready_text = ready_text.replace('$fix',info_fix['fix'])
			ready_text = ready_text.replace('$time',info_fix['time'])
			ready_text = ready_text.replace('$cost',info_fix['cost'])
			main_text = template_text.replace('$main_table',ready_text)
			title = get_page_name(get_html(fix_links[i]['href']))
			main_text = main_text.replace('$title',title)
			page_text = get_page_text(get_html(fix_links[i]['href']))
			page_text = textLib.text_correct(page_text)
			main_text = main_text.replace('$main_text',page_text)
			if len(info_fix) > 1:
				add_table = open('add_table.txt','r',encoding="utf-8")
				add_table_text = add_table.read()
				for i in range(1,len(info)):
					info_fix = temlate_replace(info,i)
					add_table_text = add_table_text.replace('$name',info_fix['name'])
					add_table_text = add_table_text.replace('$fix',info_fix['fix'])
					add_table_text = add_table_text.replace('$time',info_fix['time'])
					add_table_text = add_table_text.replace('$cost',info_fix['cost'])
					main_text = main_text.replace('$next',add_table_text)
	
	
	
	
	
	
			ready = open('C:\\Users\\Стас\\Desktop\\работа\\fix — копия\\TheFuckingParser\\' + folder + '\\index.txt','w',encoding="utf-8")
			main_text = main_text.replace('$next','')
			ready.write(main_text)
			ready.close()
			os.rename(os.getcwd() +'\\' + folder + '\\index.txt',os.getcwd() + '\\'+ folder + '\\index.html')
			files_dirs = os.listdir(basic_path + files_path)
			for folder_dir in files_dirs:
				shutil.copytree(basic_path + files_path + '\\' + folder_dir,basic_path + '\\' + folder + '\\' + folder_dir)




print ('DONE!')
ready.close()
test = input()
