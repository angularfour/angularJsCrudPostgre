mysql -u root -p
sa

CREATE USER 'usercom'@'localhost' IDENTIFIED BY '123';

create database employee;

GRANT ALL PRIVILEGES ON employee.* TO 'usercom'@'localhost' WITH GRANT OPTION;

CREATE TABLE emp_details (
emp_id int(255) NOT NULL AUTO_INCREMENT,
emp_name varchar(255) NOT NULL,
emp_email varchar(255) NOT NULL,
emp_gender varchar(255) NOT NULL,
emp_address varchar(255) NOT NULL,
PRIMARY KEY (emp_id)
);

insert into emp_details (emp_name, emp_email, emp_gender, emp_address) 
values ('worker1', 'worker1@gmail.com', 'male', 'av one')