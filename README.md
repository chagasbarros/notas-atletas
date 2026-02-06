# Cálculo de Média por Atleta

## Visão Geral

Projeto desenvolvido para a **Certificação 1 do programa DevStart**, curso de Desenvolvimento Front-End. O sistema implementa uma função em JavaScript que calcula a média final de atletas em competições de ginástica artística, aplicando regras específicas de avaliação e descarte de notas extremas.

## Descrição do Projeto

Em competições de ginástica artística, cada atleta recebe **cinco notas** de diferentes juízes. O cálculo da média final segue um processo específico para garantir maior justiça na avaliação:

1. A **menor nota** é descartada
2. A **maior nota** é descartada
3. As **três notas restantes** são somadas
4. A **média** é calculada a partir dessas notas válidas
5. O resultado final é exibido no console para cada atleta

Este método elimina possíveis distorções causadas por avaliações muito rigorosas ou muito generosas.

## Tecnologia Utilizada

- JavaScript (ES6+)

## Estrutura do Projeto
```
.
├── index.js
└── README.md
```

## Lógica da Solução

Para cada atleta cadastrado, o algoritmo executa os seguintes passos:

1. **Copia o array de notas** usando `slice()` para preservar os dados originais
2. **Ordena as notas** em ordem crescente com `sort()`
3. **Remove a menor e a maior nota** utilizando `slice(1, 4)`
4. **Soma as notas restantes** com o método `reduce()`
5. **Calcula a média final** dividindo a soma por 3
6. **Exibe o resultado formatado** no console

### Fluxo de Dados
```
Notas Originais → Ordenação → Remoção de Extremos → Soma → Média → Exibição
[8, 9, 7, 6, 8]   [6,7,8,8,9]      [7, 8, 8]        23    7.67    Console
```

## Exemplo de Uso
```javascript
const atletas = [
  {
    nome: "Joaozinho",
    notas: [8, 8, 9, 7, 6]
  },
  {
    nome: "Mariazinha",
    notas: [5, 8, 7, 8, 7]
  },
  {
    nome: "Pedrinho",
    notas: [6, 6, 8, 9, 7]
  }
];

calculaMedia(atletas);
```

### Saída Esperada
```
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
```

## Como Executar

1. **Clone o repositório:**
```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. **Acesse o diretório:**
```bash
   cd seu-repositorio
```

3. **Execute o projeto:**
```bash
   node index.js
```


## Autor

**Chagas Barros**  
Curso: Desenvolvimento Front-End  
Programa: DevStart

---

Se este projeto foi útil, considere dar uma estrela no repositório!
