name = input("Digite seu nome:")

def Convert(string):
    list1 = []
    list1[:0] = string
    return list1

name_arr = Convert(name.upper())

for letter in name_arr:
  print(letter)