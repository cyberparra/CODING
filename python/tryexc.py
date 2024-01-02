temp = "5 degrees"
cel = 0
try:
    fahr = float(temp)

except:
    print("temp is a string not number")
    quit()

cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)    
