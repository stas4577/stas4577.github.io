from selenium import webdriver

driver = webdriver.Chrome('C:\\Users\\Стас\\Desktop\\работа\\fix — копия\\THE FUCKING PARSER\\chromedriver.exe')
driver.get("https://ifix-it.ru/remont-iphone")
html = driver.page_source
while html.find('data-elementor-open-lightbox') != -1:
	pos = html.find('data-elementor-open-lightbox')
	mask = html[]
