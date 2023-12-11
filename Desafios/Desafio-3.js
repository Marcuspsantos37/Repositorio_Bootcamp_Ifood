class heroi{
    constructor (nome, idade, tipo){
        this.nome  = nome.toUpperCase()
        this.idade = idade.toUpperCase()
        this.tipo = tipo.toUpperCase()
    }
    ataque () {
        
        switch (this.tipo){
            case "MAGO":
                console.log(`O ${this.tipo} atacou usando Magia. `);
                break;
            case "GUERREIRO":
                console.log(`O ${this.tipo} atacou usando espada. `);
                break;
            case "MONGE":
                console.log(`O ${this.tipo} atacou usando artes marciais. `);
                break;
            case "NINJA":
                console.log(`O ${this.tipo} atacou usando shuriken. `);
                break;
            default:
                Console.log(`[ERROR]: Por favor selecionar o tipo de herói como: Mago, Guerreiro, Monge ou Ninja.`);
                break;
        }
    }
}


let luta = new heroi('Marcus','37','Ninja1')
luta.ataque() 
