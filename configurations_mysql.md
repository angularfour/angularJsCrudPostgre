#php.ini
extension_dir="C:/php/php7/ext"
extension=php_mysqli.dll

#apache2\conf\httpd.conf
ServerRoot "c:/php/apache2"
DocumentRoot "C:/git/"
<Directory "C:/git/">
LoadModule php7_module "c:/php/php7/php7apache2_4.dll"
AddType application/x-httpd-php .php .html
PHPIniDir "c:/php/php7"
AddHandler application/x-httpd-php .php


#linux
mysql -u root -p
sa

#windows
mysqlsh (windows menu -> mysql shell)
\c root@localhost
1234
\sql



select User,Host from mysql.user;

CREATE USER 'usercom'@'localhost' IDENTIFIED BY '123';

SHOW DATABASES;

create database employee;

use employee;

GRANT ALL PRIVILEGES ON employee.* TO 'usercom'@'localhost' WITH GRANT OPTION;

SHOW TABLES;

CREATE TABLE emp_details (
emp_id int(255) NOT NULL AUTO_INCREMENT,
emp_name varchar(255) NOT NULL,
emp_email varchar(255) NOT NULL,
emp_gender varchar(255) NOT NULL,
emp_address varchar(255) NOT NULL,
PRIMARY KEY (emp_id)
);

insert into emp_details (emp_name, emp_email, emp_gender, emp_address) 
values ('worker1', 'worker1@gmail.com', 'male', 'av one');
