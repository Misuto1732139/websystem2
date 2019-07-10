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
    res.render('mokuzi.ejs',{ title:'Express' });
});

server.get('/games',function( req, res ){
    let query = 'select GameName.id,Gamename.game_name,buy.number from GameName inner join GameName on GameName.number_id=buy.id ;';
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'GN.ejs', { content: rows });
    });
});

server.get('/characters',function( req, res ){
    let query = 'select Fighter.id,Fighter.fighter_id,Fighter.fighter_name ;';
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'FN.ejs', { content: rows });
    });
});
    
server.listen(80,function() {
    console.log('listening on port 80');
});
