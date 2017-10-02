#uncomment the lines in php.ini:
extension=php_pdo_pgsql.dll
extension_dir="C:/php/php7/ext"

#add the lines in apache2\conf\httpd.conf
ServerRoot "c:/php/apache2"
DocumentRoot "C:/git/"
<Directory "C:/git/">
LoadModule php7_module "c:/php/php7/php7apache2_4.dll"
AddType application/x-httpd-php .php .html
PHPIniDir "c:/php/php7"
AddHandler application/x-httpd-php .php


#connect to postgresql and make the changes:

#linux (starting the postgresql server)
./pg_ctl -D "C:/java/servers/pgsql/data" -l logfile start
./psql -d "employee" -U postgres

#windows (starting the postgresql server)
pg_ctl -D "C:/java/servers/pgsql/data" -l logfile start
psql -U postgres


#lista all databases
\list
#connect to employee database
\connect employee
#if database doesn't exist then create
create database employee;
#list all tables
\z
#or
\dt

#create the user and give the grants
CREATE USER usercom WITH PASSWORD '123';

GRANT ALL PRIVILEGES ON DATABASE employee TO usercom;

CREATE TABLE emp_details (
emp_id serial NOT NULL,
emp_name varchar(255) NOT NULL,
emp_email varchar(255) NOT NULL,
emp_gender varchar(255) NOT NULL,
emp_address varchar(255) NOT NULL,
PRIMARY KEY (emp_id)
);

insert into emp_details (emp_name, emp_email, emp_gender, emp_address) 
values ('worker1', 'worker1@gmail.com', 'male', 'av one');

GRANT ALL PRIVILEGES ON emp_details TO usercom;