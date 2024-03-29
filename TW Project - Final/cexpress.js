let express = require('express')
// let bodyParser = require('body-parser');
let app = express()
let port = 3000;


// This is our small database. In future labs we will keep this object in a separate file. 
let users = [
   {
       id: 1,
       name : 'Lola',
       email : 'lola@yh.com',
       mobile : '1234567890',
       tipulprod : 'Torturi',
       descriereprod : 'Ciocolata',
       livrare : 'domiciliu',
       plata : 'card'
   }
]


// This function receives a number and returns the corect user based on that number from the Database.
// If the id is incorrect, it returns an empty object. Remember: It is best to always return the same type of item from an endpoint, no matter the content.
function getUserById(someNumber){
  let returnedUser = {};
  users.forEach(user => { 
      if(user.id == someNumber)
          returnedUser = user;
      });
  return returnedUser;
}



// Use this code as is. 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
    next();
  });
app.use(express.json());


  


// What you get if you go on the default route of the server. It's good to keep something here whether you use it or not.
app.get('/', function (req, res) {
  res.sendFile('/html + css + js/index.html', { root: __dirname });
});
/////////////////////////////////////////////////////////////////
app.get('/index.html', function (req, res) {
    res.sendFile('/html + css + js/index.html', { root: __dirname });
  });
app.get('/Torturi-Prajituri.html', function (req, res) {
    res.sendFile('/html + css + js/Torturi-Prajituri.html', { root: __dirname });
 });
app.get('/caddUsers.html', function (req, res) {
   res.sendFile('/html + css + js/caddUsers.html', { root: __dirname });
});
app.get('/ccomanda.html', function (req, res) {
    res.sendFile('/html + css + js/ccomanda.html', { root: __dirname });
 });
 app.get('/cuserPage.html', function (req, res) {
    res.sendFile('/html + css + js/cuserPage.html', { root: __dirname });
 });
 //---------------------------------------------------------------------------
 app.get('/confirmation.html', function (req, res) {
    res.sendFile('/html + css + js/confirmation.html', { root: __dirname });
 });
 app.get('/404.html', function (req, res) {
    res.sendFile('/html + css + js/404.html', { root: __dirname });
 });
 //////////////////////////////////////////////////////
app.get('/j2.js', function (req, res) {
   res.sendFile('/html + css + js/j2.js', { root: __dirname });
});
app.get('/java.js', function (req, res) {
   res.sendFile('/html + css + js/java.js', { root: __dirname });
}); 
 //--------------------------------------------------------------------------------------
 app.get('/style.css', function (req, res) {
    res.sendFile('/html + css + js/style.css', { root: __dirname });
});
app.get('/w3.css', function (req, res) {
   res.sendFile('/html + css + js/w3.css', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////
app.get('/administrator.html', function (req, res) {
   res.sendFile('/html + css + js/administrator.html', { root: __dirname });
});
app.get('/nav-bar.html', function (req, res) {
   res.sendFile('/html + css + js/nav-bar.html', { root: __dirname });
});
// app.get('/admin', function (req, res) {
//    res.render('admin.ejs', { root: __dirname });
// });

/////////////////////////////////////////////////////////////
app.get('/Photos/Avatar.png', function (req, res) {
   res.sendFile('/html + css + js//Photos/Avatar.png', { root: __dirname });
});
app.get('/Photos/cover.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/cover.jpg', { root: __dirname });
});
app.get('/Photos/Icon.png', function (req, res) {
  res.sendFile('/html + css + js/Photos/Icon.png', { root: __dirname });
});
///////////////////////////////////////////////////////////////
app.get('/Photos/Desch1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Desch1.jpg', { root: __dirname });
 });
 app.get('/Photos/Desch2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Desch2.jpg', { root: __dirname });
 });
 app.get('/Photos/Desch3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Desch3.jpg', { root: __dirname });
 });
 app.get('/Photos/Desch4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Desch4.jpg', { root: __dirname });
 });
 ///////////////////////////////////////////////////////////////////
 app.get('/Photos/Vitrina1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Vitrina1.jpg', { root: __dirname });
 });
 app.get('/Photos/Vitrina2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Vitrina2.jpg', { root: __dirname });
 });
 app.get('/Photos/Vitrina3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Vitrina3.jpg', { root: __dirname });
 });
 app.get('/Photos/Vitrina4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Vitrina4.jpg', { root: __dirname });
 });
  ////////////////////////////////////////////////////////////////////////////////////////
  app.get('/Photos/Torturi1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Torturi1.jpg', { root: __dirname });
 });
 app.get('/Photos/Torturi2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Torturi2.jpg', { root: __dirname });
 });
  app.get('/Photos/Prajituri1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Prajituri1.jpg', { root: __dirname });
 });
 app.get('/Photos/Prajituri2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Prajituri2.jpg', { root: __dirname });
 });
  app.get('/Photos/ProdSpec1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/ProdSpec1.jpg', { root: __dirname });
 });
 app.get('/Photos/ProdSpec2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/ProdSpec2.jpg', { root: __dirname });
 });
  app.get('/Photos/ProdPost1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/ProdPost1.jpg', { root: __dirname });
 });
 app.get('/Photos/ProdPost2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/ProdPost2.jpg', { root: __dirname });
 });
  ////////////////////////////////////////////////////////////////////////////////////////
  
  app.get('/Photos/photo1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/photo1.jpg', { root: __dirname });
 });

//  app.get('TorturiClasice.jpg', function (req, res) {
//     res.sendFile('/html + css + js/TorturiClasice.jpg', { root: __dirname });
//  });
//  app.get('MiniTorturi.jpg', function (req, res) {
//     res.sendFile('/html + css + js/MiniTorturi.jpg', { root: __dirname });
//  });
//  app.get('DeSezon.jpg', function (req, res) {
//     res.sendFile('/html + css + js/DeSezon.jpg', { root: __dirname });
//  });
//  app.get('Personalizate.jpg', function (req, res) {
//     res.sendFile('/html + css + js/Personalizate.jpg', { root: __dirname });
//  });
//  app.get('Speciale.jpg', function (req, res) {
//     res.sendFile('/html + css + js/Speciale.jpg', { root: __dirname });
//  });


////////////////////////////////////////////////////////////////////////////////////////
//............................Pt Galeria Torturi-Prajituri.............................




////////////////////////////////////////////////////////////////////////////////////////
app.get('/Photos/TorturiClasice1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/TorturiClasice1.jpg', { root: __dirname });
 });
 app.get('/Photos/TorturiClasice2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/TorturiClasice2.jpg', { root: __dirname });
 });
  app.get('/Photos/TorturiClasice3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/TorturiClasice3.jpg', { root: __dirname });
 });
 app.get('/Photos/TorturiClasice4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/TorturiClasice4.jpg', { root: __dirname });
 });
 app.get('/Photos/TorturiClasice5.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/TorturiClasice5.jpg', { root: __dirname });
});
app.get('/Photos/TorturiClasice6.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/TorturiClasice6.jpg', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////////////////

app.get('/Photos/MiniTorturi1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/MiniTorturi1.jpg', { root: __dirname });
 });
 app.get('/Photos/MiniTorturi2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/MiniTorturi2.jpg', { root: __dirname });
 });
  app.get('/Photos/MiniTorturi3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/MiniTorturi3.jpg', { root: __dirname });
 });
 app.get('/Photos/MiniTorturi4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/MiniTorturi4.jpg', { root: __dirname });
 });
 app.get('/Photos/MiniTorturi5.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/MiniTorturi5.jpg', { root: __dirname });
});
app.get('/Photos/MiniTorturi6.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/MiniTorturi6.jpg', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////////////////
app.get('/Photos/DeSezon1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/DeSezon1.jpg', { root: __dirname });
 });
 app.get('/Photos/DeSezon2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/DeSezon2.jpg', { root: __dirname });
 });
  app.get('/Photos/DeSezon3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/DeSezon3.jpg', { root: __dirname });
 });
 app.get('/Photos/DeSezon4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/DeSezon4.jpg', { root: __dirname });
 });
 app.get('/Photos/DeSezon5.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/DeSezon5.jpg', { root: __dirname });
});
app.get('/Photos/DeSezon6.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/DeSezon6.jpg', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////////////////
app.get('/Photos/Personalizate1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Personalizate1.jpg', { root: __dirname });
 });
 app.get('/Photos/Personalizate2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Personalizate2.jpg', { root: __dirname });
 });
  app.get('/Photos/Personalizate3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Personalizate3.jpg', { root: __dirname });
 });
 app.get('/Photos/Personalizate4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Personalizate4.jpg', { root: __dirname });
 });
 app.get('/Photos/Personalizate5.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/Personalizate5.jpg', { root: __dirname });
});
app.get('/Photos/Personalizate6.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/Personalizate6.jpg', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////////////////
app.get('/Photos/Speciale1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Speciale1.jpg', { root: __dirname });
 });
 app.get('/Photos/Speciale2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Speciale2.jpg', { root: __dirname });
 });
  app.get('/Photos/Speciale3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Speciale3.jpg', { root: __dirname });
 });
 app.get('/Photos/Speciale4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Speciale4.jpg', { root: __dirname });
 });
 app.get('/Photos/Speciale5.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/Speciale5.jpg', { root: __dirname });
});
app.get('/Photos/Speciale6.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/Speciale6.jpg', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////////////////
app.get('/Photos/TorturiPost1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/TorturiPost1.jpg', { root: __dirname });
 });
 app.get('/Photos/TorturiPost2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/TorturiPost2.jpg', { root: __dirname });
 });
  app.get('/Photos/TorturiPost3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/TorturiPost3.jpg', { root: __dirname });
 });
 app.get('/Photos/TorturiPost4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/TorturiPost4.jpg', { root: __dirname });
 });
 app.get('/Photos/TorturiPost5.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/TorturiPost5.jpg', { root: __dirname });
});
app.get('/Photos/TorturiPost6.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/TorturiPost6.jpg', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////////////////



app.get('/Photos/PrajituriMari1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/PrajituriMari1.jpg', { root: __dirname });
 });
 app.get('/Photos/PrajituriMari2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/PrajituriMari2.jpg', { root: __dirname });
 });
  app.get('/Photos/PrajituriMari3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/PrajituriMari3.jpg', { root: __dirname });
 });
 app.get('/Photos/PrajituriMari4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/PrajituriMari4.jpg', { root: __dirname });
 });
 app.get('/Photos/PrajituriMari5.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/PrajituriMari5.jpg', { root: __dirname });
});
app.get('/Photos/PrajituriMari6.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/PrajituriMari6.jpg', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////////////////
app.get('/Photos/MiniPrajituri1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/MiniPrajituri1.jpg', { root: __dirname });
 });
 app.get('/Photos/MiniPrajituri2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/MiniPrajituri2.jpg', { root: __dirname });
 });
  app.get('/Photos/MiniPrajituri3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/MiniPrajituri3.jpg', { root: __dirname });
 });
 app.get('/Photos/MiniPrajituri4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/MiniPrajituri4.jpg', { root: __dirname });
 });
 app.get('/Photos/MiniPrajituri5.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/MiniPrajituri5.jpg', { root: __dirname });
});
app.get('/Photos/MiniPrajituri6.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/MiniPrajituri6.jpg', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////////////////
app.get('/Photos/PrajituriSpeciale1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/PrajituriSpeciale1.jpg', { root: __dirname });
 });
 app.get('/Photos/PrajituriSpeciale2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/PrajituriSpeciale2.jpg', { root: __dirname });
 });
  app.get('/Photos/PrajituriSpeciale3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/PrajituriSpeciale3.jpg', { root: __dirname });
 });
 app.get('/Photos/PrajituriSpeciale4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/PrajituriSpeciale4.jpg', { root: __dirname });
 });
 app.get('/Photos/PrajituriSpeciale5.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/PrajituriSpeciale4.jpg', { root: __dirname });
});
app.get('/Photos/PrajituriSpeciale6.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/PrajituriSpeciale6.jpg', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////////////////
app.get('/Photos/Fursecuri1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Fursecuri1.jpg', { root: __dirname });
 });
 app.get('/Photos/Fursecuri2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Fursecuri2.jpg', { root: __dirname });
 });
  app.get('/Photos/Fursecuri3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Fursecuri3.jpg', { root: __dirname });
 });
 app.get('/Photos/Fursecuri4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Fursecuri4.jpg', { root: __dirname });
 });
 app.get('/Photos/Fursecuri5.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/Fursecuri5.jpg', { root: __dirname });
});
app.get('/Photos/Fursecuri6.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/Fursecuri6.jpg', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////////////////
app.get('/Photos/Platouri1.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Platouri1.jpg', { root: __dirname });
 });
 app.get('/Photos/Platouri2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Platouri2.jpg', { root: __dirname });
 });
  app.get('/Photos/Platouri3.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Platouri3.jpg', { root: __dirname });
 });
 app.get('/Photos/Platouri4.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/Platouri4.jpg', { root: __dirname });
 });
 app.get('/Photos/Platouri5.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/Platouri5.jpg', { root: __dirname });
});
app.get('/Photos/Platouri6.jpg', function (req, res) {
   res.sendFile('/html + css + js/Photos/Platouri6.jpg', { root: __dirname });
});
////////////////////////////////////////////////////////////////////////////////////////
app.get('/Photos/photo2.jpg', function (req, res) {
    res.sendFile('/html + css + js/Photos/photo2.jpg', { root: __dirname });
 });



//////////////////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////














// The users endpoint that returns us the entire users database.
app.get('/users', function (req, res){
    res.send(JSON.stringify(users)); //Before sending it, make sure to make it JSON. JS object is not entirely the same with a JSON.
});

// A parametrised request that returns us only the user with a specified id in the URL.
app.get('/users/:userId', function (req, res){
    console.log(req.params); // In req.params, we receive the clients params. We could have more, but for now, only one, userId.
    // {'userId': '2'}
   
    let requestedUserId = req.params['userId']; // This is a string. Note it is important to use the same case.
    requestedUserId = parseInt(requestedUserId); // It is now an int
   
    let requestedUserInfo = getUserById(requestedUserId); // This is an object
    requestedUserInfo = [requestedUserInfo]; // We transform it in array. It is a good practice that no matter how many items you return, you should return them in the same format, in this case, an array with only one object.
    
    res.send(JSON.stringify(requestedUserInfo));
});

app.post('/addUser', function(req, res){
    console.log(req.body); // Verificam ca avem continutul asa cum ne asteptam
    let newUser = req.body; // Vedem ca primim id-ul ca string, dar noi il salvam ca numar. Va trebui sa il modificam
    newUser['id'] = parseInt(newUser['id'])


    if(getUserById(newUser['id']).id !== undefined){ //daca exista deja un user cu acel id ...
        res.statusCode = 500;
        res.send(JSON.stringify({response: 'Numarul de ordine al comezii a fost deja ales de altcineva.\nTe rugam alegeti alt numar de ordine pentru viitoarea comanda.'}));
    } else {
        users.push(newUser);
        res.send(JSON.stringify({
            response: 'Comanda adaugata! Multumim!'
        }));
    }
})











// Start the server
app.listen(port, () => {
    console.log(`Express.JS Server is running on http://localhost:${port}`)
});