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
SELECT first_name, last_name, salary FROM employee e WHERE e.salary < 6000 ORDER BY salary ASC ;

/*Write a query in SQL to display the first and last_name, department number and salary for those employees who earn more than 8000.*/
SELECT first_name, last_name, department_id, salary
FROM employee e
WHERE e.salary > 8000
ORDER BY salary ASC;

/*Write a query in SQL to display the first and last name, and department number for all employees whose last name is "McEwen".*/
SELECT first_name, last_name, department_id
FROM employee e
WHERE e.last_name = 'McEwen';

/*Write a query in SQL to display all the information for all employees without any department number.*/
SELECT *
FROM employee e
WHERE e.department_id is null ;

/*Write a query in SQL to display all the information about the department Marketing.*/
SELECT *
FROM department d
WHERE d.name = 'Marketing';

/*Write a query in SQL to display the full name (first and last), hire date, salary, and department number for those employees whose first name does not containing the letter M and make the result set in ascending order by department number.*/
SELECT first_name, last_name, hire_date, salary, department_id
FROM employee e
WHERE e.first_name
NOT LIKE '%M%'
AND e.first_name
NOT LIKE '%m%'
ORDER BY e.department_id ASC;

/*Write a query in SQL to display all the information of employees whose salary is in the range of 8000 and 12000 and commission is not null or department number is except the number 4, 12 and 7 and they have been hired before June 5th, 1987.*/
SELECT * FROM employee e
WHERE e.salary > 8000
AND e.salary < 12000
AND e.department_id NOT IN (7, 4, 12)
AND e.hire_date < '1987-06-05' ;

/*Write a query in SQL to display the full name (first and last name), and salary for all employees who does not earn any commission.*/

/* Write a query in SQL to display the full name (first and last), the phone number and email separated by hyphen, and salary, for those employees whose salary is within the range of 9000 and 17000. The column headings assign with Full_Name, Contact_Details and Remuneration respectively.*/
SELECT CONCAT (first_name,' ',last_name)
AS fullname,
CONCAT (phone_number,'-', email)
AS Contact_details,
salary
AS Remuneration
FROM employee e
WHERE e.salary > 9000 and e.salary < 17000;

/*Write a query in SQL to display the first and last name, and salary for those employees whose first name is ending with the letter m.*/
SELECT first_name, last_name, salary
FROM employee e
WHERE e.first_name LIKE '%m';

/*Write a query in SQL to display the full name (first and last) name, and salary, for all employees whose salary is out of the range 7000 and 15000 and make the result set in ascending order by the full name.*/
SELECT CONCAT (first_name,' ',last_name)
AS fullname,
salary
FROM employee
WHERE salary NOT BETWEEN 7000 AND 15000
ORDER BY fullname ASC;

/*Write a query in SQL to display the full name (first and last), job id and date of hire for those employees who was hired during November 5th, 2007 and July 5th, 2009.*/
SELECT CONCAT (first_name,' ',last_name)
AS fullname,
job_id, hire_date
FROM employee
WHERE hire_date = '2007-11-05'
OR hire_date = '2009-06-05' ;

/*Write a query in SQL to display the the full name (first and last name), and department number for those employees who works either in department 7 or 9.*/
SELECT CONCAT(first_name,' ',last_name)
AS fullname,
department_id
FROM employee e
WHERE e.department_id = 7
OR e.department_id = 9 ;

/*NOT WORKING Write a query in SQL to display the full name (first and last name), salary, and manager number for those employees who is working under a manager.*/
SELECT CONCAT(first_name,' ',last_name)
AS fullname,
salary, manager_id
FROM employee e
WHERE e.manager_id is not null ;

/*Write a query in SQL to display all the information from Employees table for those employees who was hired before June 21st, 2002.*/
SELECT *
FROM employee e
WHERE e.hire_date < '2002-06-21';

/*Write a query in SQL to display the first and last name, email, salary and manager ID, for those employees whose managers are hold the ID 21, 4 or 46.*/
SELECT first_name, last_name, email, salary, manager_id
FROM employee e
WHERE manager_id IN (21, 4, 46) ;

/*Write a query in SQL to display all the information for all employees who have the letters D, S, or N in their first name and also arrange the result in descending order by salary.*/
SELECT *
FROM employee
WHERE first_name LIKE '%D%'
OR first_name LIKE '%S%'
OR first_name LIKE '%N%'
ORDER BY salary
DESC;

/*Write a query in SQL to display the full name (first name and last name), hire date, commission percentage, email and telephone separated by '-', and salary for those employees who earn the salary above 11000 or the seventh digit in their phone number equals 3 and make the result set in a descending order by the first name.*/
SELECT CONCAT(first_name,' ', last_name)
AS fullname,
hire_date,
CONCAT (email,' ', phone_number),
salary
FROM employee
WHERE salary > 11000
OR phone_number LIKE '___.___.3___'
OR phone_number LIKE '___.__._3__.______'
ORDER BY first_name DESC;

/*Write a query in SQL to display the first and last name, and department number for those employees who holds a letter s as a 3rd character in their first name.*/
SELECT first_name, last_name, department_id
FROM
employee
WHERE
first_name LIKE '__s%';

/*Write a query in SQL to display the employee ID, first name, job id, and department number for those employees who is working except the departments 5, 3 and 8.*/
SELECT id, first_name, job_id, department_id
FROM employee
WHERE department_id NOT IN (5, 3, 8) ;

/*Write a query in SQL to display the employee Id, first name, job id, and department number for those employees whose department number equals 3, 4 or 9.*/
SELECT id, first_name, job_id, department_id
FROM employee
WHERE department_id IN (3,4,9);

/*Write a query in SQL to display the ID for those employees who did two or more jobs in the past.*/



/*Write a query in SQL to display the first name, last name, department number, and department name for each employee.*/

SELECT first_name, last_name, department_id, name
FROM employee
INNER JOIN department ON (department_id = department.id) ;

/*Write a query in SQL to display the first and last name and salary for those employees who earn less than the employee earn whose number is 83.*/
SELECT first_name, last_name, salary
FROM employee
WHERE salary < (SELECT salary FROM employee WHERE id = 83) ;

/*Write a query in SQL to display the first name of all employees including the first name of their manager.*/
SELECT emp.first_name AS EMPLOYEES, man.first_name AS MANAGERS
FROM employee emp
INNER JOIN employee man ON (emp.manager_id = man.id)
ORDER BY man.first_name ASC ;

/*Write a query in SQL to display the department name, full name (first and last name) of manager, and their city.*/
