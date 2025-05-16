let curtidas = [89, 300, 600, 500, 750];
curtidas[curtidas.length] = 0;
let i = 0;
let x = 0;

while (i < curtidas.length) {
    if (curtidas[i] > curtidas[i + 1] && curtidas[i] > x) {
        x = curtidas[i];
        i++;
    } else {
        i++;
    }
}
console.log(`A postagem com mais curtidas teve ${x} curtidas`);
// Fabio Henrique Rabello Trevizolli
// 09/05/2025