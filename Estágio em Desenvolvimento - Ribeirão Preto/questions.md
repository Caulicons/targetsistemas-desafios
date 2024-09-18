### 1 -----------------------------------------------------------------

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

**RESPONSE**: [Click here to see the code](./1.js)

### 2 ----------------------------------------------------------------

Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

**RESPONSE**: [Click here to see the code](./2.js)

### 3 ----------------------------------------------------------------

Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

**RESPONSE**: O valor é 66. [Click here to see the code](./3.js)

### 4 ----------------------------------------------------------------

Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, **\_
b) 2, 4, 8, 16, 32, 64, \_\_**
c) 0, 1, 4, 9, 16, 25, 36, \_**\_
d) 4, 16, 36, 64, \_\_**
e) 1, 1, 2, 3, 5, 8, \_**\_
f) 2,10, 12, 16, 17, 18, 19, \_\_**

**RESPONSE**:
a) 1, 3, 5, 7, \_\_

- Esta é uma sequência de números ímpares consecutivos. O próximo número ímpar após 7 é 9.

b) 2, 4, 8, 16, 32, 64, \_\_
-Esta é uma sequência geométrica onde cada termo é o dobro do anterior. O próximo termo é 128.

c) 0, 1, 4, 9, 16, 25, 36, \_\_

- Esta é uma sequência dos quadrados dos números naturais: (0^2, 1^2, 2^2, 3^2, 4^2, 5^2, 6^2). O próximo termo é (7^2), que é 49.

d) 4, 16, 36, 64, \_\_

- Esta é uma sequência dos quadrados dos números pares: (2^2, 4^2, 6^2, 8^2). O próximo termo é (10^2), que é 100.

e) 1, 1, 2, 3, 5, 8, \_\_

- Esta é a sequência de Fibonacci, onde cada termo é a soma dos dois anteriores. O próximo termo é 13.

f) 2, 10, 12, 16, 17, 18, 19, \_\_

- Essa sequência eu não entendi muito bem, ele somar 8, 2, 4, 1, 1, 1, não segue uma ordem definida, talvez o próximo termo da sequencia seja 20, já que no final a sequencia está alternando entre par e impar.

### 5 ----------------------------------------------------------------

Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

**RESPONSE**:

Admitindo que todas as lampadas estão desligas, eu poderia fazer os seguintes passos.

1. Ligar o primeiro interruptor, vamos chamar esse de interruptor A, e deixar ele ligado.

2. Ligar o segundo interruptor, vamos chamar esse de interruptor B, e deixar ele ligado por 10 minutos até aquecer a lâmpada e depois desligar.

3. O terceiro interruptor ser manterá desligado e iremos chamar de interruptor C.

Prontinho com isso com as duas voltas para as salas conseguimos saber.

Caso sala esteja com a lâmpada ligada então é o interruptor A, caso esteja com a lâmpada desligada mais a lampada esteja quente será o interruptor B, caso esteja desligada e com a lampada fria é o interruptor C.
