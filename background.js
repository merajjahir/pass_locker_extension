
console.log('background running');

let mysql = require('mysql');
// let express = require('express');
// let session = require('express-session');
// let bodyParser = require('body-parser');
// let path = require('path');


// let connection = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'root',
// 	password : '',
// 	database : 'app_passlock'
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
 

// let app = express();

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(express.json()); 
// app.use(express.urlencoded());


// // path

// app.get('/', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/login.html'));
// });

// app.post('/auth', function(request, response) {
// 	var username = request.body.username;
// 	var password = request.body.password;
// 	if (username && password) {
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('/home');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });



// extension stuff

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => 
{
  if(request.data == 'popup')
  { 
    sendResponse({confirmation: "recived in the background over"})

    let usr_data = 
    {
      data : "background",
      email :"meraj.jahir17@gmail.com",
      pass : "what is going on"
    }


    chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>
    {

        chrome.tabs.sendMessage(tabs[0].id, {usr_data} ,(response) => { console.log(response.confirmation)} );        

    })
  
 
  }
  

  
})
    