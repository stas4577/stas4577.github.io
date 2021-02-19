import os
import shutil
folderName = input('Какую папку удалить: ')
default_path = os.getcwd()
def listToFolders (list):
	new_list = []
	for i in range(len(list)):
		if list[i].find('.') == -1:
			new_list.append(list[i])
		else:
			continue
	return new_list
def deleteFolders (name,cur_dir):
	folders = listToFolders(os.listdir(cur_dir))
	for i in range(len(folders)):
		deleteFolders(name,cur_dir + '\\' + folders[i])
		if folders[i] == name:
			shutil.rmtree(cur_dir + '\\'  + folders[i])
			print ('Удалил папку')






files_current = os.listdir()
folder_only = listToFolders(files_current)
deleteFolders(folderName,default_path)

print ('DONE!')
input()