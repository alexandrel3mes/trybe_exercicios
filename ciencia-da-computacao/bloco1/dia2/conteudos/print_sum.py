from curses.ascii import isdigit


numms_string = input("Digite dois números para serem somados:")

numms_list = list(numms_string.split(" "))

if numms_list[0].isdigit() is False or numms_list[1].isdigit() is False:
  print('Apenas números naturais por favor')
else: 
  print(f'O resultado da soma é: {int(numms_list[0]) + int(numms_list[1])}')