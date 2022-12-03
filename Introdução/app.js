// const {mult,soma,div} = require('./modulos')

// console.log(soma(2,3))
// console.log(mult(2,3))
// console.log(Number(div(2,3).toFixed(2)))

//Protocolos HTTP
const http = require('http')
http.createServer((req,res)=>{
res.end('Ola fella')
}).listen(5500)