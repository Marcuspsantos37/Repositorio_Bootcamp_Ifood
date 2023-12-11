
class formaBolo {
    constructor( massaBolo, recheioBolo){
        this.massaBolo = massaBolo
        this.recheioBolo = recheioBolo
    }
    escrever () {
        console.log(`Um delicioso bolo de ${this.massaBolo} com recheio de ${this.recheioBolo}`)
    }
    preparar () {
        console.log(`Vou prepara um bolo de ${this.massaBolo}`)
    }
}

let bolo = new formaBolo("Coco","Chocolate Branco")
bolo.escrever()

let comida = new formaBolo("Baumilha")
comida.preparar()