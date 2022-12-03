const exp = require("express");
const app = exp();
const bodyParser = require('body-parser')
const connection = require('./database/db')
const perguntaModel = require('./database/Pergunta');
const Pergunta = require("./database/Pergunta");
const Resposta = require('./database/Resposta')
//database
connection
.authenticate()
.then(()=>{
  console.log('Conectou')
})
.catch((erro)=>{
  console.log(erro)
})

app.use(exp.static('D:/CursoNodeJS/Projeto1-Pergunstas e Respostas/public'))
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
  // SELECT * FROM...
  Pergunta.findAll({raw:true,order:[
    ['id','desc']
  ]})
  .then((perguntas)=>{
    res.render('home',{
      perguntas,
    })
  }) 
  
});
//router of page 'ask.ejs'
app.get('/ask',(req,res)=>{
  res.render('ask')
});
//create router for recive a post from a form
app.post('/savequestion',(req,res)=>{
  const {title, description} = req.body
  //= INSERT INTO perguntas ....,
  perguntaModel.create({
    titulo:title,
    descricao:description
}).then(()=>{
  res.redirect('/')
});
});


//rota para responder as perguntas
app.get('/ask/:id',async (req,res)=>{
  const id = req.params.id
  const pergunta = await Pergunta.findOne({where:{id:id}})
  
  if(pergunta!=undefined){
    Resposta.findAll({where:{perguntaID:pergunta.id},order:[['id','desc']]})
    .then(respostas =>{
      res.render('pergunta',{pergunta,respostas})
    })
  }else{
    res.redirect('/')
  }
})

app.post('/salvaresposta',(req,res)=>{
  const {resposta,perguntaID} = req.body
  let respondeu = false
  Resposta.create({
   resposta:resposta,
   perguntaID:perguntaID
})
.then(()=>{
  respondeu = true
  res.redirect('/ask/'+perguntaID)
})
.catch(()=>{
  res.render('/ask/'+perguntaID)
  module.exports = respondeu
});
});

app.listen(5500);




