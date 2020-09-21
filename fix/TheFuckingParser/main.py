from setting import *
resp = req.get("https://ifix-it.ru/ipad-2")
soup = BS(resp.text, 'lxml')
print (soup.find('ul').text)
test = input()