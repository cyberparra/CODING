text = 'Hello Zaira'
shift = 3

def caesar(message,offset):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    #.lower() set the string lowercase
    #index=alphabet.find(text[0].lower())
    #print(index)
    #shifted=alphabet[index+shift]
    #print(shifted)

    new_char=""
    for char in message.lower():
        if char==" ":
            new_char+=char
        else:
            index=alphabet.find(char)
            new_index = (index + offset)% len(alphabet)
            #new_char=alphabet[new_index]
            new_char+=alphabet[new_index]
            #print("char:",  char,"new char",new_char)
    print(message, new_char)
caesar(text,shift)