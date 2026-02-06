CÁLCULO DE MÉDIA POR ATLETA

Projeto desenvolvido para o Projeto de Certificação 1 do curso de Desenvolvimento FrontEnd do programa Devstar.
Este projeto consiste em uma função em JavaScript que calcula a média final de atletas em uma competição de ginástica artística, seguindo regras específicas de avaliação.


DESCRIÇÃO DO PROJETO

Em competições de ginástica artística, cada atleta recebe cinco notas.
Para calcular a média final:
A menor e a maior nota são descartadas
As três notas restantes são somadas
A média é calculada a partir dessas notas válidas
O resultado final é exibido no console para cada atleta.


TECNOLOGIA UTILIZADA

JavaScript (ES6+)


LÓGICA DA SOLUÇÃO

Para cada atleta, o algoritmo executa os seguintes passos:
Copia o array de notas usando slice()
Ordena as notas em ordem crescente com sort()
Remove a menor e a maior nota
Soma as notas restantes com reduce()
Calcula a média final
Exibe o resultado formatado no console


EXEMPLO DE SAÍDA

Atleta: Joaozinho

Notas: 8, 8, 9, 7, 6

Média: 7.67

-----------------------

Atleta: Mariazinha

Notas: 5, 8, 7, 8, 7

Média: 7.33

-----------------------

Atleta: Pedrinho

Notas: 6, 6, 8, 9, 7

Média: 7.00

-----------------------

AUTOR

Projeto desenvolvido por Chagas Barros
Curso: Desenvolvimento Frontend
Programa: Devstart
