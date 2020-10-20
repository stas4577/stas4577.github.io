from bs4 import BeautifulSoup as BS
import os
links = open('links.txt','r')
html = links.read()
html = BS(html,'lxml')
a = []
path = []
a = html.find_all('a')
for i in range (len(a)):
	a[i] = a[i]['href'][20:]
os.chdir('iphone-4s')
os.mkdir('remont-posle-popadaniya-vlagi-iphone-4-4s')
input()