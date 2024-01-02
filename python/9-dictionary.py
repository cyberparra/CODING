
elenco=dict()
elenco['idrogeno']=1
elenco['ossigeno']=1
elenco['ferro']=4
print([elenco])
print(elenco["ferro"])
elenco['idrogeno']=elenco['idrogeno']+1
elenco['ossigeno']=elenco['ossigeno']+elenco['ferro']
print([elenco])
elementi=['boro','cadmio','boro','ferro','ferro']

for elem in elementi:
    elenco[elem]=elenco.get(elem,0)+1

'''
for elem in elementi:
    if elem not in elenco:
        elenco[elem]=1
    else:
        elenco[elem]=elenco[elem]+1
'''

print([elenco])
print(elenco.get('cloro',0))
#print(elenco['boro'])
