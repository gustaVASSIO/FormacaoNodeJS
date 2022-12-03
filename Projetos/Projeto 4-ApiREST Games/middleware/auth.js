const jwt = require("jsonwebtoken");
const JWTSecret = require('../secret')
//Gerando middleware para projetger as rotas
function auth(req, res, next) {
    const authToken = req.headers.authorization;
    console.log(authToken)
    if(authToken != undefined){
        const token = authToken.replace('Bearer ','')
        jwt.verify(token,JWTSecret,(err,data)=>{
          if(!err){
            req.token = token
            req.loggedUser = {
              email:data.email,
              senha:data.senha
            }
            next();
          }else{
            res.status(401)
            res.json({mss:'Token invalido'})
          }
        });
    }else{
      res.status(401)
      res.json({mss:'Token vazio'})
    }
  }
  module.exports = auth
  