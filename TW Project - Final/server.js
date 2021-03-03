let express = require('express')
let bodyParser = require('body-parser');
let app = express()
let port = 3000;

//Librarie necesara pentru a prelucra fisiere JSON
const fs = require('fs');

// exemple de pe pagina http://www.irinaciocan.ro/tehnici_web/lab12.php

// Citire BD
let rawdata = fs.readFileSync('data/database.json'); 
let studentBD = JSON.parse(rawdata);

function add_student(studentData){
    studentBD['studenti'].push(studentData);
    studentBD['nextId'] = parseInt(studentBD['nextId']) + 1;
    console.log(studentBD);
    let data = JSON.stringify(studentBD);//transform in sir
    fs.writeFileSync("data/database.json", data);//scriu in fisier
}

// Use this code as is. 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
    next();
  });

app.set('view engine', 'ejs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
  

// What you get if you go on the default route of the server. It's good to keep something here whether you use it or not.
app.get('/', function (req, res) {
    res.render('client.ejs', { root: __dirname });
});

// Adaugarea unui student
app.get('/add_student', function(req,res){
    res.sendFile('html/add_student.html', { root: __dirname })
})

app.post('/add_student', function (req, res) {
    add_student({
        ...req.body,
        id: studentBD.nextId
    });
    res.render('add_successful.ejs', { root: __dirname });
});

app.get('/list_studenti', function (req, res) {
    res.render('studenti.ejs',{root: __dirname,BD:studentBD});
})

// In caz ca intrii pe o pagina care nu exista!
app.use(function(req,res){
    // res.status(404).send({error: 'Not found'});
    res.status(404).sendFile('html/404.html', { root: __dirname });
});

// Start the server
app.listen(port, () => {
    console.log(`Express.JS Server is running on http://localhost:${port}`)
});