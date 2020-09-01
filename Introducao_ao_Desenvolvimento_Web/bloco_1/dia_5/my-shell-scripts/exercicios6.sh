#!/bin/bash
    #Exercicio 5 e 6

#read -p "Qual o caminho ?" CAMINHO #Pedirá ao usuario para determinar o caminho até o arquivo ou diretorio
if [ -f $* ]   # '*' parte do exercicio bonus
then
    echo "$* é um arquivo comum"

elif [ -d $* ]
then 
    echo "$* é um diretorio"
else
    echo "É outro tipo de arquivo" 
fi 

ls -l $*