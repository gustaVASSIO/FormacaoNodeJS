const fs = require('fs')

//--ARQUIVOS TXT
// //lendo arquivo
// fs.readFile('apresentacao.txt',{encoding:'utf-8'},(erro,data)=>{
//     if(erro)console.log('erro')
//     else console.log(data)
// })
// //escrevendo arquivo
// fs.writeFile('apresentacao.txt','Estou escrevendo no arquivo',(erro)=>{
//     if(erro)console.log(erro)
// })

//--ARQUIVOS JSON
fs.readFile('user.json',{encoding:'utf-8'},(erro,data)=>{
    if(erro)console.log('erro')
    // console.log(data.nome)//dado em forma de string
    const jsondata  = JSON.parse(data)
    // console.log(jsondata.nome)
    jsondata.nome = 'Dhara Melissa'
    jsondata.idade = 18
    jsondata.curso ='Bio Med'
    fs.writeFile('user.json',JSON.stringify(jsondata),(erro)=>{
        console.log(erro)
    })

})