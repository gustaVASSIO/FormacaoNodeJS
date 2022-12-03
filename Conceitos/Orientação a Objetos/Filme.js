class Filme {
    
    constructor(titulo, ano, genero, duracao, ){
        this.titulo=titulo,
        this.ano = ano,
        this.genero = genero,
        this.duracao = duracao
    }

    Reproduzir(){
        console.log('reproduzindo filme')
    }

    Pausar(){
        console.log('Pausado ||')
    }

    Avancar(){
        console.log('Avançando filme >>')
    }
    Informacoes(){
        const ficha ={
            titulo:this.titulo,
            ano:this.ano,
            genero:this.genero,
            duracao:this.duracao,
        }
        return ficha
    }

}

const filme = new Filme('Pantera Negra 2', 2022, 'Ação', 180)

console.log(filme.Informacoes())