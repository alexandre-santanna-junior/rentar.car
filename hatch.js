function calcular(){
const dias = document.querySelector('#dias');
const km = document.querySelector('#km');
const d = Number(dias.value);
const k = Number(km.value);
const hatch = (60 * d) + (0.15 * k);
document.querySelector('.resposta').innerHTML = `O valor do aluguel no periodo de ${d} dias e a distância de ${k} Km. </br> Será de: R$ ${hatch} reais. `;
document.querySelector('.mensagem').innerHTML = `Alugue um carro conosco e experimente a excelência em serviço de locação de veículos. </br> Nossa empresa oferece uma ampla seleção de carros bem-mantidos e atendimento ao </br> cliente excepcional. Não perca mais tempo procurando, escolha a confiabilidade e qualidade </br> que você merece!`;
}