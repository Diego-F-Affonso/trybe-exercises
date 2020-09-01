#!/bin/bash
    #Exercicio 4
    
ARQUIVO="/mnt/Armazenamento-Linux/Vscode/Aula1.5/texto.txt" #Variavel com o caminho até o arquivo
if [ -e $ARQUIVO ] # Primeiro teste
then
    echo "O caminho $ARQUIVO está habilitado!"
fi
if [ -w $ARQUIVO ] # Segundo teste
then   
    echo "Você tem permissão para editar $ARQUIVO"
fi