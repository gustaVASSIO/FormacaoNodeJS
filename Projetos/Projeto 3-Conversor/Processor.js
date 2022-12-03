class Processor{
    static Process(data){
        const x = data.split('\r\n')//dividindo os dados da tabela por linhas
        let rows=[]
        x.forEach(row => {
            const elementrow =row.split(';')
            rows.push(elementrow)
        });
        return rows
    }
}
module.exports = Processor