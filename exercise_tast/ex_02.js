let pontuacao = 70;

if (pontuacao >= 0 && pontuacao <= 100) {
    if (pontuacao >= 70) {
        console.log("Classificado para a final");
    } else if (pontuacao >= 40) {
        console.log("Classificado");
    } else {
        console.log("Eliminado");
    }
} else {
    console.log(`${pontuacao} é uma pontuação invalida`);
}
// Fabio Henrique Rabello Trevizolli 
// 09/05/2025