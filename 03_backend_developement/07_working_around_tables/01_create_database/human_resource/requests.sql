DROP TABLE region ;

CREATE TABLE Region (
  id serial PRIMARY KEY NOT NULL,
  name varchar
);

CREATE TABLE Country (
	id serial PRIMARY KEY NOT NULL,
	name varchar,
	region_id int
 );

 CREATE TABLE Location (
 	id serial PRIMARY KEY NOT NULL,
 	street_adress varchar,
 	postal_code varchar,
 	city varchar,
 	state_province varchar,
 	country_id int

 );

 CREATE TABLE Job(
 	id serial PRIMARY KEY NOT NULL,
 	code varchar,
 	title varchar,
 	min_salary numeric,
 	max_salary numeric

 );


 CREATE TABLE Job_Grade(
	id serial PRIMARY KEY NOT NULL,
	level varchar,
	lowest_salary int,
	highest_salary int
);

CREATE TABLE Job_History(
	id serial PRIMARY KEY NOT NULL,
	employee_id int,
	start_date date,
	end_date date,
	job_id int,
	department_id int
);

CREATE TABLE Department(
	id serial PRIMARY KEY NOT NULL,
	name varchar,
	manager_id int,
	location_id int
);

CREATE TABLE Employee(
	id serial PRIMARY KEY NOT NULL,
	first_name varchar,
	last_name varchar,
	email varchar,
	phone_number varchar,
	hire_date date,
	job_id int,
	salary numeric,
	manager_id int,
	department_id int
);

/*Write a query in SQL to display the full name (first and last name), and salary for those employees who earn below 6000.*/
SELECT first_name, last_name, salary FROM employee WHERE salary < 6000 ORDER BY salary ASC ;

/*Write a query in SQL to display the first and last_name, department number and salary for those employees who earn more than 8000.*/
SELECT first_name, last_name, department_id, salary FROM employee WHERE salary > 8000 ORDER BY salary ASC;
