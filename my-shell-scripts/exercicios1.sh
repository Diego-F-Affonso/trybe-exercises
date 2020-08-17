#!/bin/bash
    # Exercicio 1
echo "Shell Script é demais!"
    # Exercicio 2
TESTE="Shell script com variaveis é demais!"
        echo "$TESTE"
    # Exercicio 3
PC=`hostname`
echo "Este script está rodando no computador: $PC"
    # Exercicio 4
ARQUIVO="/mnt/Armazenamento-Linux/Vscode/Aula1.5/texto.txt" #Variavel com o caminho até o arquivo
if [ -e $ARQUIVO ] # Primeiro teste
then
    echo "O caminho $ARQUIVO está habilitado!"
fi
if [ -w $ARQUIVO ] # Segundo teste
then   
    echo "Você tem permissão para editar $ARQUIVO"
fi
    # Exercicio 5 e 6

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

    #Exercicio 7

if [ -d $1 ]
then   
QUANTIDADE=`ls -l | grep "^-" -c `
 echo "o $1 tem $QUANTIDADE arquivos."
else
    echo "O argumento $1 não é um diretório!"
fi
 echo "teste"
