function contarLetraA(str) {
  // Converte a string para minúsculas para facilitar a contagem
  let lowerStr = str.toLowerCase();
  let count = 0;

  // Itera sobre cada caractere da string
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === 'a') {
      count++;
    }
  }

  // Verifica se a letra 'a' está presente e imprime a quantidade
  if (count > 0) {
    console.log(`"A letra 'a' aparece ${count} vezes na string.`);
  } else {
    console.log("A letra 'a' não está presente na string.");
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Informe uma string para calcularmos a ocorrência da letra a: ', (string) => {
  contarLetraA(string);
  readline.close();
});



