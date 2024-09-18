function checkIfNumberExistInFibonacciSequence(desiredNumber, n1 = 0, n2 = 1) {
  if (n2 > desiredNumber)
    return console.log(`O número ${desiredNumber}, NÃO EXISTE na sequencia de Fibonacci ⛔`);

  if (n2 === desiredNumber)
    return console.log(`O número ${desiredNumber} EXISTE na sequencia de Fibonacci ✅`);

  const nextNumber = n1 + n2;
  checkIfNumberExistInFibonacciSequence(desiredNumber, n2, nextNumber);
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Informe o número desejado: ', (desiredNumber) => {
  checkIfNumberExistInFibonacciSequence(parseInt(desiredNumber));
  readline.close();
});


