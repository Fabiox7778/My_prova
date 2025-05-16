let nivelPersonagem = 38;

if (nivelPersonagem >= 50) {
    console.log(`Seu personagem nivel ${nivelPersonagem} pode atacar chefões, entrar em eventos e combates normais`);
} else if (nivelPersonagem >= 40) {
    console.log(`Seu personagem nivel ${nivelPersonagem} pode entrar em eventos e combates normais`);
} else if (nivelPersonagem >= 20){
    console.log(`Seu personagem nivel ${nivelPersonagem} pode apenas ter combates normais`);
} else {
    console.log(`Seu personagem nivel ${nivelPersonagem} está começando, não pode fazer nada`)
}
// Fabio Henrique Rabello Trevizolli
// 09/05/2025