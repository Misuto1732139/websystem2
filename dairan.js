const express = require('express');
const server = express();
const ejs = require('ejs');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'node',
    password: 'websystem',
    database: 'web'
});

server.get('/', function( req, res ){
        res.send('mokuzi.ejs',{ title:'Express' });
    });
});

server.listen(80,function() {
    console.log('listening on port 80');
});