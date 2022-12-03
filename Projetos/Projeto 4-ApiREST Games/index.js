const express = require("express");
const bp = require("body-parser");
const app = express();
const Game = require("./Game");
const User = require("./User");
const cors = require("cors"); //permite o consumo de api através de outro arquivo
const jwt = require("jsonwebtoken");
const auth = require('./middleware/auth')
const JWTSecret = require('./secret')
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());

//Games
app.get("/games",auth, (req, res) => {
  Game.findAll().then((games) => {
    res.statusCode = 200;
    res.json({ 
      // user:req.loggedUser,
      games});
  });
});

app.get("/games/:id",auth,(req, res) => {
  const { id } = req.params;
  if (!isNaN(id)) {
    Game.findOne({
      where: { id: id },
    }).then((game) => {
      if (game != undefined) {
        res.statusCode = 200;
        res.json(game);
      } else {
        res.sendStatus(404);
      }
    });
  } else {
    res.sendStatus(400);
    //res.send('O id não é um número')
  }
});

app.post("/creategame",auth,(req, res) => {
  const { title, year, price } = req.body;
  if(title!=undefined)
  {Game.findOne({ where: { title: title } }).then((game) => {
    if (game == undefined) {
      Game.create({
        title,
        year,
        price,
      })
        .then(() => {
          res.sendStatus(200);
        })
        .catch(() => {
          res.sendStatus(400);
        });
    } else {
      res.sendStatus(309);
    }
  });
}else{
  res.status(404)
  res.json({mss:'O titulo vazio'})
}
});

app.delete("/deletegame",auth,(req, res) => {
  const { id } = req.body;
  if (!isNaN(id)) {
    Game.destroy({
      where: { id: id },
    }).then(() => {
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(400);
  }
});

app.patch("/editgame/:id",auth,(req, res) => {
  const { id } = req.params;
  const { title, year, price } = req.body;
  if (!isNaN(id)) {
    Game.update(
      {
        title,
        year,
        price,
      },
      { where: { id: id } }
    ).then(() => {
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(400);
  }
});

//Users

//criando rota de autorização para a API e gerando o token
app.post("/auth", (req, res) => {
  const { email, senha } = req.body;

  User.findOne({ where: { email: email } }).then((user) => {
    if (user != undefined) {
      if (user.senha == senha) {
        jwt.sign(
          { id: user.id, email: user.email },
          JWTSecret,
          { expiresIn: "48h" },
          (err, token) => {
            if (err) {
              res.status(400);
            } else {
              res.status(200);
              res.json({ token });
            }
          }
        );
      } else {
        res.status(401);
        res.json({ warn: "Credenciais invalidas" });
      }
    } else {
      res.send("Email não existe");
    }
  });
});

app.listen(8080);
