create table GameName (id int auto_increment not null primary key, GameName.game_name int, name varchar(100) );
create table Fighter (id int auto_increment not null primary key, Fighter.fighter_number int, Fighter.fighter_name int, name varchar(100) );
create table buy (id int auto_increment not null primary key, number varchar(100));
load data local infile 'GameName.csv' into table GameName fields terminated by ',' enclosed by '"';
load data local infile 'Fighter.csv' into table Fighter fields terminated by ',' enclosed by '"';
load data local infile 'buy.csv' into table buy fields terminated by ',' enclosed by '"';
