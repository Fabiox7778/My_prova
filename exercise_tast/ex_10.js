let pontosDeVida = 500;
let ataques = [30, 50, 20, 70, 60, 40];

for (let i = 0; i < ataques.length; i++) {
    pontosDeVida = pontosDeVida - ataques[i];
    console.log(`O castelo sofreu ${ataques[i]} de dano e está com ${pontosDeVida} de pontos de vida`);
}
console.log("------------------------------------------------");
if (pontosDeVida > 0) {
    console.log(`O castelo resistiu com ${pontosDeVida} pontos de vida`);
} else {
    console.log("O castelo foi destruido");
}
// Fabio Henrique Rabello Trevizolli
// 09/05/2025