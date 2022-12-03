const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const WriterHtml = require('./WriterHtml')
const PdfWriter = require('./PdfWriter')

async function main(){
    const leitor = new Reader()
    const data = await leitor.Read('alunos.CSV')
    const dadosProcessados = Processor.Process(data)
    const table = new Table(dadosProcessados)
    const html = await HtmlParser.ToHtml(table)
    const writer = new WriterHtml()
    writer.Write(Date.now()+'.html',html)
    PdfWriter.WritePdf(Date.now()+'.PDF',html)
    
    //console.log(html)
    // console.log(table.RowCount)
    // console.log(table.ColumnsCout)
}
main()