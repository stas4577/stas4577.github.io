from bs4 import BeautifulSoup as BS
import os
links = open('links.txt','r')
html = links.read()
html = BS(html,'lxml')
a = []
a = html.find_all('a')
for i in range (len(a)):
	print (a[i]['href'][20:])
input()
