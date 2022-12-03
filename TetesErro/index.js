const express = require('express')
const app = express()
app.use(express.static('public'))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('main1')
});
app.get('/main1/:any',(req,res)=>{
    res.render('main2')
});
app.listen(8080)