def main(f):
	result_text = ''
	a = {}
	error = False
	for line in f:
		if line == '\n':
			continue
		text = line
		text = text.replace('\t\t','\t')
		pos_name = text.find('\t')
		a['name'] = text[0:pos_name]
		pos_time = text.find('\t',pos_name + 1)
		a['time'] = text[pos_name+1:pos_time]
		a['cost'] = text[pos_time+1:-1]
		if a['cost'].find(a['name']) != -1 and a['name'].find('на новый') == -1 and a['name'].find('iCloud') == -1:
			if error == True:
				a['time'] = a['name']
				a['name'] = saved_name
				a['cost'] = text[text.find('\t')+1:-1]
			else:
				saved_name = a['name']
				error = True
				continue
		if a['cost'].find('--') != -1:
			a['cost'] = '--'
		if a['time'].find('--') != -1:
			a['time'] = '--'
		if a['cost'].find('Р') == -1:
			a['cost'] = a['cost'] + 'Р'
		if a['cost'].find('платно') != -1:
			a['cost'] = a['cost'].replace('Р','')
		if a['name'].find('на новый') != -1:
			a['time'] = '--'
			a['cost'] = text[text.find('\t')+1:-1]
		if a['name'].find('iCloud') != -1:
			a['time'] = '--'
			a['cost'] = text[text.find('\t')+1:]
	
		ready_text = '\t\t\t\t\t\t\t<div data-cost="' + a['cost'] + '" data-time="' + a['time'] +'" data-name="' + a['name'] +'" class="button__scroll__item">\n\t\t\t\t\t\t\t\t' + a['name'] +'\n\t\t\t\t\t\t\t</div>'
		error = False
		result_text = result_text + ready_text + '\n' 
	return result_text

	

