let vitorias = 45
let qtdPartidas = 200
let qtVitoria = Saldo(vitorias,qtdPartidas)

console.log(`A quantidade de vitória foi de ${qtVitoria} de um total de ${qtdPartidas} partidas. O que corresponde um total de ${((vitorias / qtdPartidas) * 100)}% de eficiência.`)

function Saldo(numbA, numbB) {
    let saldo = numbB - (numbB - numbA)
    return saldo 
}