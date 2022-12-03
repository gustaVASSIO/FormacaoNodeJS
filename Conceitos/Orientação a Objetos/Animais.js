class Animais {
    constructor(nome, idade, preco){
        this.nome =nome,
        this.idade=idade ,
        this.preco=preco
    }
    ChecarEstoque(){
        return 10
    }
}
class Cachorro extends Animais{
    constructor(nome,idade,preco,raca, tamanho){
        super(nome,idade,preco)
        this.raca = raca,
        this.tamanho = tamanho
    }
    MostrarCachorro(){
        return ({
            raca:this.raca,
            tamanho: this.tamanho,
            nome:this.nome,
            idade:this.idade,
            preco:this.preco           
        })
}
ChecarEstoque(){
  return super.ChecarEstoque()
}
}

const cacho = new Cachorro('Bulldog','40cm')
const animal = new Animais('Luke','10','R$ 50')
console.log(animal.ChecarEstoque())
console.log(cacho.ChecarEstoque())