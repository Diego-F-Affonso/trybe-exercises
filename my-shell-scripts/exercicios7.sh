#!/bin/bash
    #Exercicio 7

if [ -d $1 ]
then   
QUANTIDADE=`ls -l | grep "^-" -c `
 echo "o $1 tem $QUANTIDADE arquivos."
else
    echo "O argumento $1 não é um diretório!"
fi
 echo "teste"