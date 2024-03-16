def linearSearch(list, element):
    for x in list:
        if x == element:
            return True
    return False
v = ['Bob', 'Doug', 'Alice']
while True:
    value =input("Enter search string or q to quit: ")
    if value.lower( ) == 'q':
        break
    else:
        print(linearSearch(v, value))