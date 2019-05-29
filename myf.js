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
    connection.query('select batting.id, batting.year, batting.player_id, batting.HR from batting　inner join player on batting.player_id = player.id　limit 10;', (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql5.ejs', { content: rows });
    });
});



server.listen( 80, function() {
    console.log( 'listening on port 80' );
});
