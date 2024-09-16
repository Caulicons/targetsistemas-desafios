const reverseString = (string) => {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Entre uma frase ou palavra para ela ser invertida: ', (string) => {
  console.log(reverseString(string))
  readline.close();
});