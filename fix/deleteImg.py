import os
import shutil
folderName = ['slider_1_1.png','slider_1_2.png','slider_1_3.png','slider_2_1.png','slider_2_2.png','slider_2_3.png']
default_path = os.getcwd()
def listToImg (list):
	new_list = []
	for i in range(len(list)):
		if list[i].find('.png') != -1 or list[i].find('.jpg'):
			new_list.append(list[i])
		else:
			continue
	return new_list
def listToFolders (list):
	new_list = []
	for i in range(len(list)):
		if list[i].find('.') == -1:
			new_list.append(list[i])
		else:
			continue
	return new_list
def deleteImg (img,cur_dir):
	finded = False
	folders = listToFolders(os.listdir(cur_dir))
	for i in range(len(folders)):
		deleteImg(img,cur_dir + '\\' + folders[i])
	for i in range(len(img)):
		if img[i] in os.listdir(cur_dir):
			os.remove(cur_dir + '\\' + img[i])
			print ('Удалил файл')
			finded = True
	if finded:
		img_files = os.listdir('C:\\Users\\Стас\\Desktop\\работа\\img')
		for i in range (len(img_files)):
			this_img = img_files[i].rfind('\\')
			this_img = img_files[i][this_img:]
			shutil.copy('C:\\Users\\Стас\\Desktop\\работа\\img' + '\\'  + img_files[i],cur_dir)







files_current = os.listdir()
folder_only = listToFolders(files_current)
deleteImg(folderName,default_path)

print ('DONE!')
input()