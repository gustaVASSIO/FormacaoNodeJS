//Aqrui será apresentado o conteúdo de composição de classes.
//A composição serve para dividir o códio em mais de uma parte, evitando a repetição de diversas linhas de 
//comando e tornando o código mais limpo.
//Além disso é possivel reutilizar metodos em classes de contextos diferentes


class Leitor{
    Ler(caminho){
        return 'Conteudo'
    }
}
class Escritor{
    Escrever(arquivo,conteudo){
       return console.log('Conteúdo escrito com sucesso')
    }
}

class Criador{
    Criar(nome){
        return 'Arquivo criado com sucesso'
    }
}

class ManipuladorDeArquivos{
    constructor(nome){
        this.nome = nome,
        this.Leitor = new Leitor()
        this.Criador = new Criador()
        this.Escritror = new Escritor()
    }
}

const manipulador = new ManipuladorDeArquivos('meuarquivo.txt')

console.log(manipulador.Leitor.Ler())