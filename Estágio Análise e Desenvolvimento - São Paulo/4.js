const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const total = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);
const media = total / Object.keys(faturamento).length;
const { SP, RJ, MG, ES, Outros } = faturamento;

for (const estado in faturamento) {
  const percentual = (faturamento[estado] / total) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}% (R$ ${faturamento[estado].toFixed(2)})`);
}