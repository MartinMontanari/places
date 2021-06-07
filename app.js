const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/test',(req, res) =>{
    res.json(req.body)
})


app.listen(3000, function (){
    console.log('Aplicacion escuchando en el puerto 3000');
})