## Como rodar o código ?

Como o código foi escrito em JavaScript, iremos precisar de um interpretador para rodar o código, no caso usaremos o [Node](https://nodejs.org/en).

Com o node instalado, basta executar o seguinte comando no terminal:
`node <nome-do-arquivo>`

## Questões:

### 1 --------------------------------------------------------------------

Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

**RESPONSE**: O valor será 91. [Click here to see the code](./1.js)

### 2 -------------------------------------------------------------------

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

**RESPONSE**: [Click here to see the code](./2.js)

### 3 ------------------------------------------------------------------

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

**RESPONSE**: [Click here to see the code](./3.js)

- Maior valor de faturamento: R$ 48924.24
- Menor valor de faturamento: R$ 373.78
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: 10 dias

### 4 ------------------------------------------------------------------

Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

- SP – R$67.836,43
- RJ – R$36.678,66
- MG – R$29.229,88
- ES – R$27.165,48
- Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

**RESPONSE**: [Click here to see the code](./4.js)

### 5 ----------------------------------------------------------------

Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

**RESPONSE**: [Click here to see the code](./5.js)
