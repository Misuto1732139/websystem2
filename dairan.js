
const Fighter = require('Fighter');

const server = Fighter();
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
    connection.query('select id, FighterId, FighterName ',(error,rows,fields)=>{
        if(error){
            console.log('Query Error');
        }
        res.send('FN.js',{ content: row });
    });
});

server.listen(80,function() {
    console.log('listening on port ');
