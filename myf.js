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

server.get('/', function( req, res ) {
    connection.query('select batting.id, batting.year,  batting.HR, batting.player_id ,player.name from batting　inner join player on batting.player_id = player.id　limit 10;', (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
            
        }
        console.log(rows);
        res.render( 'sql5.ejs', { content: rows });
    });
});

server.get('/players', function( req, res ) {
    let name=req.query.players||'';
    if(name.length != 0){
        let quary="insert into (name) value ('"+ name +"');"
        console.log(rows);
        res.render( 'sqlmy2.ejs', { content: rows });
        res.render('input.ejs');
    }else{
        res.render('sitei.ejs');
    }
});


server.listen( 80, function() {
    console.log( 'listening on port 80' );
});
