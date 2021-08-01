
console.log('popup script running');

// let mysql = require('mysql');
// let express = require('express');
// let session = require('express-session');
// let bodyParser = require('body-parser');
// let path = require('path');








//the background data handleing

let autofill =document.getElementById('autofill');


    autofill.addEventListener('click',()=>
    {
        chrome.runtime.sendMessage({data:'popup'},
        (response) => {console.log(response.confirmation);})
    })

