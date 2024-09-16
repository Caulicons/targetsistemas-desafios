const faturamentos = require('./faturamentos.json');

const faturamentosFiltrados = faturamentos.filter(day => day.valor > 0);

const total = faturamentosFiltrados.reduce((acc, day) => acc + day.valor, 0);
const media = total / faturamentosFiltrados.length;

const { maiorValor, menorValor } = faturamentosFiltrados.reduce(
  (acc, day) => ({
    maiorValor: Math.max(acc.maiorValor, day.valor),
    menorValor: Math.min(acc.menorValor, day.valor),
  }),
  { maiorValor: 0, menorValor: Infinity }
);

const diasComFaturamentoAcimaDaMedia = faturamentosFiltrados.filter(
  day => day.valor > media
).length;

console.log(`
  Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}
  Menor valor de faturamento: R$ ${menorValor.toFixed(2)}
  Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasComFaturamentoAcimaDaMedia} dias`);
