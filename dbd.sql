create table GameName (id int auto_increment not null primary key, name varchar(100) );
create table Fighter (id int auto_increment not null primary key, name varchar(100) );
load data local infile 'GameName.csv' into table GameName fields terminated by ',' enclosed by '"';
load data local infile 'Fighter.csv' into table Fighter fields terminated by ',' enclosed by '"';
