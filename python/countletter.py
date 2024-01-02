abet="abcdefghijklmnopqrstuvwxyz"
abetCount=[]
for x in range(26):
	abetCount.append(0)

parola=input("inserisci la parola: ")
print (parola,len(parola))
for letter in range(len(parola)):
    for alfa in range(len(abet)):
        if abet[alfa]==parola[letter]:
            abetCount[alfa]=abetCount[alfa]+1
for c in range(26):
    if abetCount[c]>0:
        print(abet[c],"=",abetCount[c])
