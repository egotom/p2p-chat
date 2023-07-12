import re,requests,os
template='''
<html>
  <body>
	{}
  </body>
</html>
{}
'''


cpms=[]
def svgp(fn,n):
	global cpms
	print(fn,'\t\t', n)
	fp=open(fn,'r')
	ctx=fp.read()
	
	ctx=ctx.replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">','<>')
	ctx=ctx.replace('</svg>','</>')
	print({n:ctx})
	cpms.append({n:ctx})
	fp.close()

proxies={'http':'http://127.0.0.1:8580','https':'http://127.0.0.1:8580'}
img=''
imp=''
mojs=[]
for root, dirs, files in os.walk('./emoji'):
	#print(str(files)[1:-1])
	#print(template(mjs=str(files)[1:-1]))
	mojs=files
	for file in files:
		# img += '<img src="./emoji/{}" alt="" width="60" height="60">'.format(file)
		# img += '<img src=i{} alt=""  className="w-6 h-6"/>\n'.format(file.split('.')[0])
		# imp += 'import i{} from \'../assets/emoji/{}\'\n'.format(file.split('.')[0], file)
		svgp('./emoji/'+file, file.split('.')[0])
print(cpms)
fp=open('tmp.html',"w")
fp.write(str(cpms))
fp.close()	
exit()

fp=open('./twemoji-awesome.css','r')
ls=fp.readlines()
for l in ls:
	m=re.match(r".*(url\(\"(.*)\"\))", l)
	if m:
		url = m.group(2)
		#r=requests.get(url)
		r=requests.get(url , proxies=proxies)
		fn=url.split('/')[-1]
		if fn in mojs:
			continue
		with open("./emoji/"+fn,"w") as f:
			f.write(r.text)
			mojs.append(fn)
			print(fn)
		#print(r.text,url.split('/')[-1])
		#break
	