const express = require('express');
const app = express();
const port = 3000;
const bodyParser= require('body-parser');

let command = -1;

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    if ( command > 0 )
        res.send("Muie Dragnea");
    else
        res.render('index');
});

app.post('/',(req,res)=>{

command = req.body.powerOn; // here you can get the value of from the textbox
    //res.send(command);
    res.json({command: command})

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));