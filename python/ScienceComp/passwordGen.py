#use the "string" module to detect letters digits and symbols
import random
#secrets module is better that random for crypto purpose
import secrets
import string

def main():
    print(generate_password)

def generate_password(length):
#Define the possible characters for the password.
    letters=string.ascii_letters
    digits=string.digits
    symbols=string.punctuation
    # concatenate variables to obtain all chars
    all_characters=letters+digits+symbols
    #random.choice choose one chars from variable
    #print(random.choice(all_characters))

    while True:
        password=""
        for n in range(length):
            password+=secrets.choice(all_characters)
            
        return password
new_password=generate_password(18)
print(new_password) 
