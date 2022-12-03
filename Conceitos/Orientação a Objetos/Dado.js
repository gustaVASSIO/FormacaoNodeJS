class Dado{
    constructor(numero_de_faces){
        this.numero_de_faces = numero_de_faces
    }
    Rolar(){
       const min = Math.ceil(1);
        const max = Math.floor(this.numero_de_faces);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
const dado6 = new Dado(20)
console.log(dado6.Rolar())