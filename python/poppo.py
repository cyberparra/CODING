import string
import secrets

letters=string.ascii_letters
digits=string.digits
symbols=string.punctuation
# concatenate variables to obtain all chars
all_characters=letters+digits+symbols
#random.choice choose one chars from variable
#print(random.choice(all_characters))
password=""
print(secrets.choice(all_characters))
for n in range(10):
    password=password+secrets.choice(all_characters)
    print(password)