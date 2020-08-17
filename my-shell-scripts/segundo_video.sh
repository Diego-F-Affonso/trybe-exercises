#!/bin/bash

echo "Bem vindo!!"

read -p "Qual o seu nome? " NOME
echo "Meu nome é" $NOME
read -p "Qual a sua idade? " IDADE
echo "Minha idade é" $IDADE
USUARIO=`whoami`
echo "Estou logado no usario: "$USUARIO
DIRETORIO=`pwd`
echo "Meu diretorio atual é: "$DIRETORIO

echo "Tenha um Bom Dia!"