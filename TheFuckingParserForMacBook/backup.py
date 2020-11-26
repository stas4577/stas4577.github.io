from setting import *
import os
import textLib
template = open('default.txt','r',encoding="utf-8")
# Получение html кода
def get_html(link):
	resp = req.get(link)
	soup = BS(resp.text, 'lxml')
	return soup
# Получение ссылок на неисправности
def get_fix_links (html):
	links = html.select('tr a')
	return links
# Получение неисправностей
def get_info (html):
	try:
		table = html.select_one('tbody')
		count_fix = table.select('tr')
		info = table.select('tr')[1:]
	except:
		return False
	return info
# Получение папки
def get_current_link (link):
	pos = link.find('iphone-4s/')
	folder = link[pos+10:]
	return folder
# Получение модели
def current_model(link):
	pos = link.find('ifix-it.ru/')
	folder = link[pos+len('ifix-it.ru/'):]
	return folder
# Получение всех моделей
def get_all_models(html):
	models = html.select('.elementor-image')
# Работа с шаблонами
def temlate_replace(info,i):
	info = {
		"name": info[i].select('td')[0].text,
		"fix": info[i].select('td')[1].text,
		"time": info[i].select('td')[2].text,
		"cost": info[i].select('td')[3].text,
	}
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
link = 'https://ifix-it.ru/iphone-4s'
page = get_html(link)
fix_links = get_fix_links(page)
for i in range(len(fix_links)):
	folder = get_current_link(fix_links[i]['href'])
	# Если папка создана, пропустить
	try:
		os.mkdir(folder)
	except:
		print ('Папка ' + folder + ' уже создана')
		continue
	info = get_info(get_html(fix_links[i]['href']))
	if info == False:
		print ('страница ' + folder + ' не существует')
		continue
	else:
		# Работа с шаблоном
		info_fix = temlate_replace (info,0)
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




print ('DONE!')
ready.close()
test = input()
