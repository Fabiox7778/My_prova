let gols = [2, 3, 0, 5, 1];
let jogadores = ["Leo", "Sam", "Nina", "Gabi", "Caio"];

let x = 0;
let y = 0;

for (let i = 0; i < jogadores.length; i++) {
    if (gols[i] > gols[i + 1] && gols[i] > x) {
        x = gols[i];
        y = jogadores[i];
    }
}
console.log(`O artilheiro foi ${y} com ${x} gols!`);
// Fabio Henrique Rabello Trevizolli
// 09/05/2025
