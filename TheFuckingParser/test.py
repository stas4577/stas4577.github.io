from setting import *
def get_html(link):
	resp = req.get(link)
	soup = BS(resp.text, 'lxml')
	return soup
link = 'https://ifix-it.ru//iphone-4s/zamena-sluhovogo-razgovornogo-dinamika-iphone-4-4s/'
html = get_html(link)
text = html.select('div.elementor-text-editor')[-1]
print (text)
test = input()
