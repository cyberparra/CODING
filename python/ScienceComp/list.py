def convert_to_snake_case(pascal_or_camel_cased_string):
    snake_cased_char_list = []
    for char in pascal_or_camel_cased_string:
        #check for uppercase characters
        if char.isupper():
            #convert the char from upper to lower
            converted_character='_' + char.lower()
            #add the converted char to the snake list
            snake_cased_char_list.append(converted_character)
        else:
            snake_cased_char_list.append(char)
    snake_cased_string="".join(snake_cased_char_list)
    #Strings in camel case start with a capital character 
    #Since you've converted all such characters to lowercase 
    #and prepended an underscore to them, chances are, 
    #the converted snake case string has a dangling underscode at the start.
    #so we remove the undescore at the beginning in case is there
    clean_snake_cased_string=snake_cased_string.strip('_')
    return clean_snake_cased_string
    
def main():
    script=input("inserisci la parola: ")
    print(convert_to_snake_case(script))
if __name__=='__main__':
    main()