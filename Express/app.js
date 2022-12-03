const exp = require('express')//importando express
const app = exp()//iniciando o express e passando para a variavel app

//criando rota para acessar meu servidor e suas paginas
app.get('/compras',(req,res)=>{
res.send('Bem vindo a pagina de compras')
})
//Query param
app.get('/carrinho',(req,res)=>{
const param = req.query['produto']
if(param)res.send(param)
res.send('Bem vindo a pagina de carrinho')
})
app.get('/ola/:nome?',(req,res)=>{
    //Req: são os dados do usuario
    const nome =  req.params.nome
    if(nome)res.send(`Bem vindo ${nome}`)
    res.send('Bem vindo usuario')
})

app.get('/',(req,res)=>{
res.send('Bem vindo ao meu server big fella')
})


//criando servidor 
app.listen(5500,(error)=>{
if(error){
    console.log(error)
}else{
    console.log('Servidor iniciado com sucesso')
}
})